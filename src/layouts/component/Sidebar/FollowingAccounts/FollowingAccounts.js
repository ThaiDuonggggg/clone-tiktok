import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './FollowingAccounts.module.scss';
import AccountsItems from './AccountsItem';

const cx = classNames.bind(styles);

function FollowingAccounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('label')}>{label}</h4>
            <AccountsItems />
            <AccountsItems />
            <AccountsItems />
            <button className={cx('account-btn')}>
                <p>See more</p>
            </button>
        </div>
    );
}

FollowingAccounts.propTypes = {
    label: PropTypes.string,
};

export default FollowingAccounts;
