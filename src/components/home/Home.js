import React from 'react';
import { Layout, Menu } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const Home = () => {
    return (
        <div>
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">Home</Menu.Item>
                        <Menu.Item key="2"><Link to='/setting'><SettingOutlined /></Link></Menu.Item>
                    </Menu>
                </Header>
                
            </Layout>

        </div>
    )
}
export default Home;