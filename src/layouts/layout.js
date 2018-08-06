import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import styles from './style.less';
const { Header, Content, Sider } = Layout;

class Layouts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        };
    }
    /*
     * 显示隐藏触发器
     */
    toggle = () => {
        const { collapsed } = this.state;
        this.setState({
            collapsed: !collapsed,
        });
    }
    render() {
        const { collapsed } = this.state;
        return (
            <Layout className={styles.layout}>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    collapsed={collapsed}
                >
                    <div className={styles.logo} />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="user" />
                            <span className="nav-text">nav 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span className="nav-text">nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span className="nav-text">nav 3</span>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Icon type="user" />
                            <span className="nav-text">nav 4</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className={styles.trigger}
                            type={collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content className={styles.Content}>
                        <div className={styles.Main}>
                            content
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
export default Layouts;
