import React from 'react';
import { connect } from 'dva';
import { Button, message } from 'antd';
import Home from './Home/index';
import fetch from '../utils/request';
import styles from './IndexPage.css';

class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            i: 0,
        };
    }
    componentDidMount() {
        setTimeout(this.getData(), 3000);
    }
    getData = () => {
        fetch.get('/api/qqmusic/8446666')
            .then((res) => {
                if (res && res.status === 200) {
                    console.log(res);
                } else {
                    message.error('error');
                }
            });
    }
    render() {
        const { i } = this.state;
        console.log(i);
        return (
            <div className={styles.normal}>
                <h1 className={styles.title}>Yay! Welcome to dva!</h1>
                <Home />
                <div className={styles.welcome} />
                <ul className={styles.list}>
                    <Button type="primary">测试</Button>
                    <li className={styles.home}>To get started, edit <code>src/index.js</code> and save to reload.</li>
                    <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
                </ul>
            </div>
        );
    }
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
