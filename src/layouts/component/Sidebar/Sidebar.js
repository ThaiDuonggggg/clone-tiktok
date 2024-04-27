import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu from './Menu';
import MenuItem from './Menu/MenuItem';
import FollowingAccounts from './FollowingAccounts';

import {
    CameraIcon,
    CameraActiveIcon,
    ExploreIcon,
    ExploreActiveIcon,
    FollowingIcon,
    FollowingActiveIcon,
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
} from '~/component/Icons';

import EffectHouse from './EffectHouse';
import EffectHouseItem from './EffectHouse/EffectHouseItem';
import FooterSidebar from './FooterSidebar';
import FooterItem from './FooterSidebar/FooterItem';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('container')}>
            <aside className={cx('wrapper')}>
                <Menu>
                    <MenuItem
                        title="For You"
                        icon={<HomeIcon />}
                        activeIcon={<HomeActiveIcon />}
                        to={config.routes.home}
                    />
                    <MenuItem
                        title="Following"
                        icon={<FollowingIcon />}
                        activeIcon={<FollowingActiveIcon />}
                        to={config.routes.following}
                    />
                    <MenuItem
                        title="Friends"
                        icon={<UserGroupIcon />}
                        activeIcon={<UserGroupActiveIcon />}
                        to={config.routes.friends}
                    />
                    <MenuItem
                        title="Explore"
                        icon={<ExploreIcon />}
                        activeIcon={<ExploreActiveIcon />}
                        to={config.routes.explore}
                    />
                    <MenuItem
                        title="LIVE"
                        icon={<CameraIcon />}
                        activeIcon={<CameraActiveIcon />}
                        to={config.routes.live}
                    />
                </Menu>
                <FollowingAccounts label="Following accounts" />

                <EffectHouse>
                    <EffectHouseItem
                        href="https://effecthouse.tiktok.com/"
                        target="_blank"
                        img="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/8152caf0c8e8bc67ae0d.png"
                        alt="img"
                        title="Create TikTok effects, get a reward"
                    />
                </EffectHouse>

                <FooterSidebar>
                    <FooterItem />
                    <FooterItem />
                    <FooterItem />
                    <FooterItem />
                </FooterSidebar>
            </aside>
        </div>
    );
}

export default Sidebar;
