import classNames from 'classnames/bind';
import styles from './FollowingAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountsItems() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/df66cca4e36a75f2fd4d5185c37e1449.jpeg?lk3s=30310797&x-expires=1714208400&x-signature=RTyWaS0Vok7%2B91VREl%2Fuef%2BQnFA%3D"
                alt="img"
            />
            <div className={cx('account-user')}>
                <div className={cx('account-info')}>
                    <span className={cx('account-title')}>tiger050794</span>
                    <FontAwesomeIcon className={cx('account-icon')} icon={faCircleCheck} />
                </div>
                <p className={cx('account-desc')}>Son Tung M-TP</p>
            </div>
        </div>
    );
}

export default AccountsItems;
