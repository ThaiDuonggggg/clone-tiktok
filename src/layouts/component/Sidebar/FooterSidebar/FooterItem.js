import classNames from 'classnames/bind';
import styles from './FooterSidebar.module.scss';

const cx = classNames.bind(styles);

function FooterItem() {
    return (
        <div className={cx('footer-container')}>
            <div className={cx('footer-item')}>
                <h4 className={cx('heading')}>Company</h4>

                <div className={cx('footer-body')}>
                    <a className={cx('footer-link')} href="https://www.tiktok.com/about">
                        About
                    </a>
                    <a className={cx('footer-link')} href="https://www.tiktok.com/about">
                        Newsroom
                    </a>
                    <a className={cx('footer-link')} href="https://www.tiktok.com/about">
                        Contact
                    </a>
                    <a className={cx('footer-link')} href="https://www.tiktok.com/about">
                        Careers
                    </a>
                </div>
            </div>
        </div>
    );
}

export default FooterItem;
