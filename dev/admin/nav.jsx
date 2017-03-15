const React = require('react');

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

import { Dropdown } from 'antd';
const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="/login/loginOut">退出</a>
        </Menu.Item>
    </Menu>
);
class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state={
            collapsed:false,
            mode:'inline'
        }
        this.onCollapse=this.onCollapse.bind(this)
    }
    onCollapse(collapsed){
        this.setState({
            collapsed,
            mode:collapsed?"vertical":"inline"
        })
    }
    render() {
        const urlInfo=location.pathname.split("/")
        urlInfo.shift()
        const openKeys=[urlInfo.slice(0,2).join("/")]
        //if(location.pathname.indexOf("/admin/about")!==-1){
        //    var selectKeys=[urlInfo.slice(0,2).join("/")]
        //}else{
        //    var selectKeys=[urlInfo.slice(0,urlInfo.length).join("/")]
        //}
        var selectKeys=[urlInfo.slice(0,urlInfo.length).join("/")]
        return (
            <Layout>
                <Header className="header" style={{fontSize:'20px',color:'#fff'}}>
                    茗悦国艺后台管理
                    <Dropdown overlay={menu} trigger={['click']}>
                        <a className="ant-dropdown-link" href="#"
                           style={{color:'rgba(0,0,0,.65)',height:32,fontSize:'12px',float:'right',border:'1px solid #000',borderRadius:'3px',lineHeight:'17px',margin:'15px -16px',padding:'7px 16px',background:'#fff'}}>
                            超级管理员 <Icon type="down"/>
                        </a>
                    </Dropdown>
                </Header>
                <Content style={{ padding: '0 20px' }}>
                    <Breadcrumb style={{ margin: '12px 0' }}>
                    </Breadcrumb>
                    <Layout style={{ padding: '24px 0', background: '#fff' }}>
                        <Sider width={200} style={{ background: '#fff' }}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={selectKeys}
                                defaultOpenKeys={openKeys}
                                style={{ height: '100%' }}
                            >
                                <SubMenu className="delete" key="admin/index"
                                         title={<span><Icon type="user" /><a className="link"  style={{color:"rgba(0,0,0,.65)"}}>首页</a></span>}>
                                        <Menu.Item key="admin/index/2"><a href="/admin/index/2">banner图</a></Menu.Item>
                                </SubMenu>

                                <SubMenu key="admin/about"
                                         title={<span><Icon type="home" />关于茗悦</span>}>
                                    <Menu.Item key="admin/about/1"><a href="/admin/about/1">茗悦分类</a></Menu.Item>
                                    <Menu.Item key="admin/about/2"><a href="/admin/about/2">茗悦详情</a></Menu.Item>
                                </SubMenu>
                                <SubMenu className="delete" key="admin/new"
                                         title={<span style={{fontFamily:''}}><Icon type="pushpin-o" />最新动态</span>}>
                                    <Menu.Item key="admin/new/1"><a href="/admin/new/1">动态分类</a></Menu.Item>
                                    <Menu.Item key="admin/new/2"><a href="/admin/new/2">动态详情</a></Menu.Item>
                                </SubMenu>
                                <SubMenu key="admin/class"
                                         title={<span><Icon type="pushpin-o" />培训课程</span>}>
                                    <Menu.Item key="admin/class/1"><a href="/admin/class/1">课程分类</a></Menu.Item>
                                    <Menu.Item key="admin/class/2"><a href="/admin/class/2">课程详情</a></Menu.Item>
                                </SubMenu>
                                <SubMenu key="admin/perform"
                                         title={<span><Icon type="pushpin-o" />讲座表演</span>}>
                                    <Menu.Item key="admin/perform/1"><a href="/admin/perform/1">表演分类</a></Menu.Item>
                                    <Menu.Item key="admin/perform/2"><a href="/admin/perform/2">表演详情</a></Menu.Item>
                                </SubMenu>
                                <SubMenu key="admin/school"
                                         title={<span><Icon type="pushpin-o" />茶学堂</span>}>
                                    <Menu.Item key="admin/school/1"><a href="/admin/school/1">学堂分类</a></Menu.Item>
                                    <Menu.Item key="admin/school/2"><a href="/admin/school/2">学堂详情</a></Menu.Item>
                                </SubMenu>
                                <SubMenu key="admin/contact"
                                         title={<span><Icon type="phone" />联系我们</span>}>
                                    <Menu.Item key="admin/contact/1"><a href="/admin/contact/1">留言</a></Menu.Item>
                                    <Menu.Item key="admin/contact/2"><a href="/admin/contact/2">在线报名</a></Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            {this.props.children}
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2017 Created by Ant UED
                </Footer>
            </Layout>
        )
    }
}
module.exports={
    Nav:Nav
}
