import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import Button from '~/component/Button';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    // const classes = cx('menu-item', {
    //     modeDark: data.modeDark,
    // });

    return (
        <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
