import PropTypes from 'prop-types';
import { useState } from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/component/Popper';
import Header from './Header';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const defaultFnc = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFnc() }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onclick={() => {
                        const isParent = !!item.children;
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                <div className={cx('menu-container')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    const handleResetPage = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <HeadlessTippy
            hideOnClick={hideOnClick}
            interactive
            delay={[0, 700]}
            placement="bottom-start"
            offset={[8, 9]}
            render={renderResult}
            onHide={handleResetPage}
        >
            {children}
        </HeadlessTippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
