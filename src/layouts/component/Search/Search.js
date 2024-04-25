import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import * as searchServices from '~/services/searchService';
import { useDebounce } from '~/hooks';
import styles from './Search.module.scss';
import { SearchIcon, DeleteSearchIcon, LoadingSearchIcon } from '~/component/Icons';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountItem from '~/component/AccountItem';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const debouncedValue = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }
        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.search(debouncedValue);
            setSearchResult(result);

            setLoading(false);
        };

        fetchApi();
    }, [debouncedValue]);

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
        setSearchResult([]);
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;

        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    const renderResult = (attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
                <h4 className={cx('search-title')}>Account</h4>
                {searchResult.map((result) => (
                    <AccountItem key={result.id} data={result} />
                ))}
            </PopperWrapper>
        </div>
    );

    return (
        // Using a wrapper <div> tag around the reference element solves
        // this by creating a new parentNode context.
        <div>
            <Tippy
                visible={showResult && searchResult.length > 0}
                interactive
                offset={[0, 8]}
                placement="bottom"
                render={renderResult}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search"
                        spellCheck="false"
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('delete-btn')} onClick={handleClear}>
                            <DeleteSearchIcon />
                        </button>
                    )}
                    {!!loading && (
                        <button className={cx('loading-btn')}>
                            <LoadingSearchIcon />
                        </button>
                    )}
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
