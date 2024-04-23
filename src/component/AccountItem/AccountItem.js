import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('logo-img')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/6c348a1e040f3cce7ef19a029c502327.jpeg?lk3s=a5d48078&x-expires=1713985200&x-signature=MKwpkmSHgQnpr9MGIi%2Fiu8IHK4Y%3D"
                alt="img"
            />
            <div className={cx('info')}>
                <div className={cx('info-user')}>
                    <h4 className={cx('user')}>Tiger050794</h4>
                    <p className={cx('nickname')}>Son Tung M-TP</p>
                </div>
                <div className={cx('tick')}>
                    <FontAwesomeIcon icon={faCheckCircle} />
                </div>
            </div>
        </div>
    );
}

export default AccountItem;
