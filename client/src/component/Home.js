import React, { Component } from 'react';
import { Layout, Menu, Icon, Dropdown, Button, Input, Pagination, List } from 'antd';
import './Home.css';
import 'antd/dist/antd.css';
import { Avatar } from 'antd';
import { Row, Col } from 'antd';
import HotelContent from '../layout/Content';
import Footer from '../layout/Footer';
import Typography from '@material-ui/core/Typography';




const { Header, Sider, Content } = Layout;
const menu = (
    <Menu >
        <Menu.Item key="1">
            <Icon type="poweroff" />
            Log out
      </Menu.Item>
    </Menu>
);
const language = (
    <Menu >
        <Menu.Item key="1">
            <Icon />
            Chinese
        </Menu.Item>
        <Menu.Item key="2">
            <Icon />
            English
        </Menu.Item>
    </Menu>
);



export class Home extends Component {

    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <div>
                <Layout>
                    {/* <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className="logo" />
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">
                                <Icon type="user" />
                                <span>User</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="trademark" />
                                <span>reservation</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="contact us" />
                                <span>nav 3</span>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Icon type="contact us" />
                                <span>nav 3</span>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <Icon type="contact us" />
                                <span>nav 3</span>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <Icon type="contact us" />
                                <span>nav 3</span>
                            </Menu.Item>


                        </Menu>
                    </Sider> */}
                    <Layout>
                        <div>
                            <Header style={{ background: '#fff', padding: 0 }}>

                                {/* <Typography
                                    // component="h1"
                                    variant="h7"
                                    color="inherit"
                                    align="flex"
                                    // noWrap
                                    // className={classes.toolbarTitle}
                                    >
                                    Newbooking
                                    </Typography> */}
                                <Dropdown overlay={menu} >
                                    <Button style={{ float: 'right', marginRight: '10px', marginTop: '10px' }}>
                                        <Icon type="user" />
                                    </Button>
                                </Dropdown>
                                <Dropdown overlay={language}>
                                    <Button style={{ float: 'right', marginRight: '10px', marginTop: '10px' }}>
                                        Language <Icon type="down" />
                                    </Button>
                                </Dropdown>






                            </Header>
                        </div>
                        <Content
                            style={{
                                margin: '24px 16px',
                                padding: 24,
                                background: '#fff',
                                minHeight: 380,
                            }}
                        >



                            <div>

                            </div>
                            <HotelContent />
                            <Footer />

                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

export default Home
