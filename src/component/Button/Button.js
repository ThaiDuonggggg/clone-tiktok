import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    href,
    to,
    children,
    primary = false,
    text = false,
    small = false,
    large = false,
    outline = false,
    leftIcon = false,
    rightIcon = false,
    className,
    onClick,
}) {
    let Comp = 'button';
    const props = {
        onClick,
    };

    if (href) {
        props.href = href;
        Comp = 'a';
    } else if (to) {
        props.to = to;
        Comp = Link;
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        text,
        small,
        large,
        outline,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    href: PropTypes.string,
    to: PropTypes.string,
    children: PropTypes.node.isRequired,
    primary: PropTypes.bool,
    text: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    outline: PropTypes.bool,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
};

export default Button;
