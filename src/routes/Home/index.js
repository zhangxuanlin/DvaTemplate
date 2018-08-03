import React from 'react';
import styles from './style.less';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            i: 0,
        };
    }
    render() {
        const { i } = this.state;
        console.log(i);
        return (
            <div className={styles.home}>
                <div className={styles.child}>
                    这是首页
                </div>
            </div>
        );
    }
}
export default Home;
