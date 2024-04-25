import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <img className={cx('logo-img')} src={data.avatar} alt={data.avatar} />
            <div className={cx('info')}>
                <div className={cx('info-user')}>
                    <div className={cx('name')}>
                        <h4 className={cx('user')}>{data.nickname}</h4>
                        <span className={cx('tick')}>{data.tick && <FontAwesomeIcon icon={faCheckCircle} />}</span>
                    </div>
                    <p className={cx('nickname')}>{data.full_name}</p>
                </div>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
