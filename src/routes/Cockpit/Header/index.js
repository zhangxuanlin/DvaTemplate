import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Tool from './Tool';
// import ButtonGroup from './ButtonGroup';
import styles from './style.less';

const Header = (props) => {
    const { title } = props;
    return (
        <header className={styles.header}>
            <h1>{title}</h1>
            <Tool />
            <Link to="home">跳至平台1</Link>
            {/* <ButtonGroup /> */}
        </header>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

Header.defaultProp = {
    title: '监控系统',
};

export default Header;
