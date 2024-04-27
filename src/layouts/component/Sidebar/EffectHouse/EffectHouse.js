import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './EffectHouse.module.scss';

const cx = classNames.bind(styles);

function EffectHouse({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

EffectHouse.propTypes = {
    children: PropTypes.node.isRequired,
};

export default EffectHouse;
