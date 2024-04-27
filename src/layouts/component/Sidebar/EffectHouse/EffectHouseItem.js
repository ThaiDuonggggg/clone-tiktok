import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './EffectHouse.module.scss';

const cx = classNames.bind(styles);

function EffectHouseItem({ href, target, img, alt, title }) {
    return (
        <div className={cx('container')}>
            <a className={cx('link')} href={href} target={target}>
                <div className={cx('body')}>
                    <img className={cx('img')} src={img} alt={alt} />
                    <div className={cx('title')}>
                        <h4 className={cx('desc')}>{title}</h4>
                    </div>
                </div>
            </a>
        </div>
    );
}

EffectHouseItem.propTypes = {
    href: PropTypes.string.isRequired,
    target: PropTypes.string,
    img: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
};

export default EffectHouseItem;
