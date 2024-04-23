import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    href,
    to,
    children,
    text = false,
    small = false,
    large = false,
    outline = false,
    leftIcon = false,
    rightIcon = false,
    className,
    onClick,
    primary,
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

export default Button;
