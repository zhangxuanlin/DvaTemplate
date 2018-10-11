import React from 'react';
import { connect } from 'dva';
import Header from './Header';
import './index.less';

class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            i: 0,
        };
    }

    componentDidMount() {
    }

    render() {
        const { i } = this.state;
        console.log(i);
        return (
            <div>
                <Header title="工地扬尘监控系统" />
            </div>
        );
    }
}

export default connect()(IndexPage);
