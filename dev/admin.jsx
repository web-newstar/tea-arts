const React = require('react');
const ReactDOM = require('react-dom');

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

import { Dropdown } from 'antd';
import { Card } from 'antd';
import { Button } from 'antd';
//卡片类
const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="/login">退出</a>
        </Menu.Item>
    </Menu>
);
class Page extends React.Component{
    render(){
        return(
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
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%' }}
                            >
                                <SubMenu className="delete" key="sub1" title={<span><Icon type="user" /><a className="link" href="/admin" style={{color:"rgba(0,0,0,.65)"}}>首页</a></span>}>
                                </SubMenu>

                                <SubMenu key="sub2" title={<span><Icon type="home" /><a href="/admin/about">关于茗悦</a></span>}>
                                    <Menu.Item key="2"><a href="/admin/about/1">茗悦分类</a></Menu.Item>
                                    <Menu.Item key="3"><a href="/admin/about/2">茗悦详情</a></Menu.Item>
                                </SubMenu>
                                <SubMenu className="delete" key="sub3" title={<span style={{fontFamily:''}}><Icon type="pushpin-o" /><a href="/admin/new">最新动态</a></span>}>
                                    <Menu.Item key="4"><a href="/admin/new/1">动态分类</a></Menu.Item>
                                    <Menu.Item key="5"><a href="/admin/new/2">动态详情</a></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub4" title={<span><Icon type="pushpin-o" /><a href="/admin/class">培训课程</a></span>}>
                                    <Menu.Item key="6"><a href="/admin/class/1">课程分类</a></Menu.Item>
                                    <Menu.Item key="7"><a href="/admin/class/2">课程详情</a></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub5" title={<span><Icon type="pushpin-o" /><a href="/admin/perform">讲座表演</a></span>}>
                                    <Menu.Item key="6"><a href="/admin/perform/1">表演分类</a></Menu.Item>
                                    <Menu.Item key="7"><a href="/admin/perform/2">表演详情</a></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub6" title={<span><Icon type="pushpin-o" /><a href="/admin/school">茶学堂</a></span>}>
                                    <Menu.Item key="8"><a href="/admin/school/1">学堂分类</a></Menu.Item>
                                    <Menu.Item key="9"><a href="/admin/school/2">学堂详情</a></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub7" title={<span><Icon type="phone" /><a href="/admin/contact">联系我们</a></span>}>
                                    <Menu.Item key="10"><a href="/admin/contact/1">留言</a></Menu.Item>
                                    <Menu.Item key="11"><a href="/admin/contact/2">在线报名</a></Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            <Button style={{margin:'10px 0',width:'100%',fontSize:'20px'}}>+</Button>
                            <Card style={{ width: 240,float:'left',margin:"7px 30px",textAlign:'center' }} bodyStyle={{ padding: 0 }}>
                                <div className="custom-image"style={{padding:'7px'}}>
                                    <img alt="example" width="100%" src="/public/images/t_bg01.png" />
                                </div>
                                <div className="custom-card" >
                                    <input type="text" style={{border:0,outLine:'none'}}   value="企业简介"/>
                                    <input type="text" style={{border:0,outLine:'none'}}   value="COMPANY PROFILE"/>
                                </div>
                                <Button style={{margin:'10px 0'}}>删除</Button>
                            </Card>
                            <Card style={{ width: 240,float:'left',margin:"7px 30px",textAlign:'center' }} bodyStyle={{ padding: 0 }}>
                                <div className="custom-image"style={{padding:'7px'}}>
                                    <img alt="example" width="100%" src="/public/images/t_bg01.png" />
                                </div>
                                <div className="custom-card">
                                    <input type="text" style={{border:0,outLine:'none'}}   value="学员风采"/>
                                    <input type="text" style={{border:0,outLine:'none'}}   value="COMPANY PROFILE"/>
                                </div>
                                <Button  style={{margin:'10px 0'}}>删除</Button>
                            </Card>
                            <Card style={{ width: 240,float:'left',margin:"7px 30px",textAlign:'center' }} bodyStyle={{ padding: 0 }}>
                                <div className="custom-image"style={{padding:'7px'}}>
                                    <img alt="example" width="100%" src="/public/images/t_bg01.png" />
                                </div>
                                <div className="custom-card" style={{textAlign:'center'}}>
                                    <input type="text" style={{border:0,outLine:'none'}}   value="合作加盟"/>
                                    <input type="text" style={{border:0,outLine:'none'}}   value="COMPANY PROFILE"/>
                                </div>
                                <Button   style={{margin:'10px 0'}}>删除</Button>
                            </Card>
                            <Card style={{ width: 240,float:'left',margin:"7px 30px",textAlign:'center' }} bodyStyle={{ padding: 0 }}>
                                <div className="custom-image"style={{padding:'7px'}}>
                                    <img alt="example" width="100%" src="/public/images/t_bg01.png" />
                                </div>
                                <div className="custom-card">
                                    <input type="text" style={{border:0,outLine:'none'}}   value="企业招聘"/>
                                    <input type="text" style={{border:0,outLine:'none'}}   value="COMPANY PROFILE"/>
                                </div>
                                <Button   style={{margin:'10px 0'}}>删除</Button>
                            </Card>
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


ReactDOM.render(<Page/>,document.querySelector("#page"));