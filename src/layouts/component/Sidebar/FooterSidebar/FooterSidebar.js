import classNames from 'classnames/bind';
import styles from './FooterSidebar.module.scss';

const cx = classNames.bind(styles);

function FooterSidebar({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default FooterSidebar;
