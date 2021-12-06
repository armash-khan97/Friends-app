import React from 'react'
import { Layout, Menu } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const Home = () => {
    return (
        <div>
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">Profile</Menu.Item>
                        <Menu.Item key="2"><Link to='/setting'><SettingOutlined /></Link></Menu.Item>
                    </Menu>
                </Header>
                {/* <Content className="profile">
                    <Profile className="profile" />

                </Content> */}

            </Layout>

        </div>
    )
}
export default Home;