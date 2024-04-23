import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import Images from '~/assets/images';
import Search from '~/layouts/component/Search';
import Button from '~/component/Button';
import { AddIcon, MoreIcon, LiveIcon, LanguageIcon, FeedbackIcon, KeyboardIcon, DarkModeIcon } from '~/component/Icons';
import Menu from '~/component/Popper/Menu/Menu';

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

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={Images.logo} alt="logo" />
                </div>
                <Search />
                <div className={cx('actions')}>
                    <Button text leftIcon={<AddIcon />}>
                        Upload
                    </Button>
                    <Button primary>Log in</Button>
                    <Menu items={MENU_ITEM}>
                        <button className={cx('more-btn')}>
                            <MoreIcon />
                        </button>
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;
