import React from 'react';
import { connect } from 'dva';
import { message } from 'antd';
import fetch from '../utils/request';
import Layouts from '../layouts/layout';

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
            <Layouts />
        );
    }
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
