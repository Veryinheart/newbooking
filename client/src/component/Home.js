import React, { Component } from 'react';
import { Layout, Menu, Icon, Dropdown, Button, Input, Pagination, List } from 'antd';
import './Home.css';
import 'antd/dist/antd.css';
import { Avatar } from 'antd';
import { Row, Col, Container } from 'reactstrap';
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

                    <Header style={{ background: '#fff', padding: 0 }}>
                    <Container>
                        <Row>
                            {/* <Col md="4" xs="4">
                                <Button>Home</Button>
                            </Col>
                            <Col md="4" xs="4">
                                <Button>Home</Button>
                            </Col>
                            <Col md="4" xs="4"> */}
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
                            
                         </Row>
                        </Container>
                    </Header>

                    <Content style={{
                        margin: '24px 16px',
                        padding: 24,
                        background: '#fff',
                        minHeight: 380,
                    }}>
                        <HotelContent/>
                        <Footer/>

                    </Content>

                </Layout>
            </div>
        )
    }
}

export default Home
