import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './Search.module.scss';
import { SearchIcon, DeleteSearchIcon, LoadingSearchIcon } from '~/component/Icons';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountItem from '~/component/AccountItem';

const cx = classNames.bind(styles);

function Search() {
    return (
        <Tippy
            visible={false}
            interactive
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Account</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input placeholder="Search" spellCheck="false" />
                <button className={cx('delete-btn')}>
                    <DeleteSearchIcon />
                </button>
                <button className={cx('loading-btn')}>
                    <LoadingSearchIcon />
                </button>
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </Tippy>
    );
}

export default Search;
