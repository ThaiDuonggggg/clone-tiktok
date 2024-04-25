import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return <h1 className={cx('wrapper')}>Sidebar</h1>;
}

export default Sidebar;
