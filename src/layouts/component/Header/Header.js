import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import config from '~/config';
import Images from '~/assets/images';
import Search from '~/layouts/component/Search';
import Button from '~/component/Button';
import {
    AddIcon,
    MoreIcon,
    LiveIcon,
    LanguageIcon,
    FeedbackIcon,
    KeyboardIcon,
    DarkModeIcon,
    InboxIcon,
    MessIcon,
    UserIcon,
    FavoritesIcon,
    GetCoinsIcon,
    SettingsIcon,
    LogOutIcon,
} from '~/component/Icons';
import Menu from '~/component/Popper/Menu/Menu';
import Image from '~/component/Image/Image';

const cx = classNames.bind(styles);

const MENU_ITEM = [
    {
        icon: <LiveIcon />,
        title: 'LIVE Creator Hub',
        to: '/Live',
    },
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'Language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FeedbackIcon />,
        title: 'LIVE Creator Hub',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
        to: '/keyboard',
    },
    {
        icon: <DarkModeIcon />,
        title: 'Dark mode',
        modeDark: true,
    },
];

const menu_user = [
    {
        icon: <UserIcon />,
        title: 'View profile',
        to: '/profile',
    },
    {
        icon: <FavoritesIcon />,
        title: 'Favorites',
        to: '/Favorites',
    },
    {
        icon: <GetCoinsIcon />,
        title: 'Get Coins',
        to: '/coins',
    },
    {
        icon: <SettingsIcon />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEM,
    {
        icon: <LogOutIcon />,
        title: 'Log out',
        separate: true,
    },
];

function Header() {
    const handleChange = (item) => {
        switch (item.type) {
            case 'Language':
                break;

            default:
                break;
        }
    };
    const currentUser = true;

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={Images.logo} alt="logo" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    <Button text leftIcon={<AddIcon />}>
                        Upload
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Messages" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <span className={cx('mess-btn')}>
                                        <MessIcon />
                                    </span>
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? menu_user : MENU_ITEM} onChange={handleChange}>
                        {currentUser ? (
                            <div className={cx('current-user')}>
                                <Image
                                    className={cx('avatar')}
                                    src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/a72e4166554e6c822d55ace1929b299a.jpeg?lk3s=a5d48078&x-expires=1714111200&x-signature=qi3Juo%2FFaaXAogInElcMQ3UUhKY%3D"
                                    alt="avatar"
                                />
                            </div>
                        ) : (
                            <button className={cx('more-btn')}>
                                <MoreIcon />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;
