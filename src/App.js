import React from 'react';
import './App.css';
import {HashRouter, Link, Route, Switch} from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import ConfigGroup from "./comport/ConfigGroup";
import ConfigApp from "./comport/ConfigApp";
import Config from "./comport/Config";
import ConfigTemplate from "./comport/ConfigTemplate";
import ConfigDataCollection from "./comport/ConfigDataCollection";
import ConfigTemplateTree from "./comport/ConfigTemplateTree";
import TreeDataEdit from "./comport/TreeDataEdit";
import ConfigTemplateEdit from "./comport/ConfigTemplateEdit";
import ConfigEdite from "./comport/ConfigEdite";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class App extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        return (
            <HashRouter>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" style={{marginTop:'30px'}}>
                        <Menu.Item key="1" icon={<PieChartOutlined />}>
                            <Link to={"configGroup"}>
                                配置域管理
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<DesktopOutlined />}>
                            <Link to={"configApp"}>
                                应用管理
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<DesktopOutlined />}>
                            <Link to={"config"}>
                                配置信息管理
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="4" icon={<DesktopOutlined />}>
                            <Link to={"configTemplate"}>
                                配置模板管理
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="5" icon={<DesktopOutlined />}>
                            <Link to={"configData"}>
                                配置信息数据集
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="6" icon={<DesktopOutlined />}>
                            <Link to={"configTemplateTree"}>
                            配置信息树管理
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                            <Switch>
                                <Route exact path="/configGroup" component={ConfigGroup}/>
                                <Route exact path="/configApp" component={ConfigApp}/>
                                <Route exact path="/config" component={Config}/>
                                <Route exact path="/configTemplate" component={ConfigTemplate}/>
                                <Route exact path="/configData" component={ConfigDataCollection}/>
                                <Route exact path="/configTemplateTree" component={ConfigTemplateTree}/>
                                <Route exact path="/tree" component={TreeDataEdit}/>
                                <Route exact path="/configTreeTemplate" component={ConfigTemplateEdit}/>
                                <Route exact path="/configEdit" component={ConfigEdite}/>

                            </Switch>

                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>

            </Layout>
            </HashRouter>
        );
    }
}
export default App;