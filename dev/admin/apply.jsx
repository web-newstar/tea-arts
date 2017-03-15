const React = require('react');
const ReactDOM = require('react-dom');

import { Layout, Menu, Breadcrumb, Icon,Table,Button} from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider} = Layout;

import { Dropdown } from 'antd';

const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="/login">退出</a>
        </Menu.Item>
    </Menu>
);

const columns = [{
    title: 'id',
    dataIndex: 'key',
}, {
    title: '课程',
    dataIndex: 'apply_class',
    // render: text => <a href="#">{text}</a>,
}, {
    title: '微信',
    dataIndex: 'wechat',
}, {
    title: '姓名',
    dataIndex: 'name',
},
    {
        title: '电话',
        dataIndex: 'phone',
    },
    {
        title: '内容',
        dataIndex: 'content',
        render: text => <p className="words">{text}</p>,
    },
    {
        title: '操作',
        key: 'action',
        render: (text, record) => (
            <span>
      <Button type="danger">删除</Button>
    </span>
        ),
    }];
const data = [{
    key: '1',
    apply_class:"茶叶",
    wechat:"15934524011",
    name: 'John',
    phone: "13313331333",
    content: "我是留言我是留言我是留言我是留言我是留言我是留言我是留言我是留言"
}];
class Btns extends React.Component {
    render() {
        return (
            <div className="btns">

            </div>
        )
    }
}


const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User',    // Column configuration not to be checked
    }),
};









class Page extends React.Component{
    render(){
        return(
            <Layout>
                <Header className="header" style={{fontSize:'20px',color:'#fff'}}>
                    茗悦国艺后台管理
                    <Dropdown overlay={menu} trigger={['click']}>
                        <a className="ant-dropdown-link" href="#"
                           style={{color:'rgba(0,0,0,.65)',height:32,fontSize:'12px',float:'right',border:'1px solid #000',borderRadius:'3px',lineHeight:'17px',margin:'15px -16px',padding:'7px 16px',background:'#fff'}}>
                            超级管理员 <Icon type="down" />
                        </a>
                    </Dropdown>
                </Header>
                <Content style={{ padding: '0 20px' }}>
                    <Breadcrumb style={{ margin: '12px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>

                    </Breadcrumb>
                    <Layout style={{ padding: '24px 0', background: '#fff' }}>
                        <Sider width={200} style={{ background: '#fff' }}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%' }}
                            >
                                <SubMenu className="delete" key="sub1" title={<span><Icon type="user" /><a className="link" href="/admin" style={{color:"rgba(0,0,0,.65)"}}>联系我们</a></span>}>
                                </SubMenu>

                                <SubMenu key="sub2" title={<span><Icon type="home" />最新动态</span>}>
                                    <Menu.Item key="1">茗悦动态</Menu.Item>
                                </SubMenu>
                                <SubMenu className="delete" key="sub3" title={<span style={{fontFamily:''}}><Icon type="pushpin-o" />关于我们</span>}>
                                    <Menu.Item key="2">企业简介</Menu.Item>
                                    <Menu.Item key="3">行业新闻</Menu.Item>
                                    <Menu.Item key="4">合作加盟</Menu.Item>
                                    <Menu.Item key="5">企业招聘</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub4" title={<span><Icon type="phone" />培训课程</span>}>
                                    <Menu.Item key="6">茶艺培训</Menu.Item>
                                    <Menu.Item key="7">插画培训</Menu.Item>
                                    <Menu.Item key="8">香道培训</Menu.Item>
                                    <Menu.Item key="9">古琴培训</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub5" title={<span><Icon type="camera-o" />茶学堂</span>}>
                                    <Menu.Item key="10">茶艺茶道</Menu.Item>
                                    <Menu.Item key="11">茶艺知识</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            <Table dataSource={data} columns={columns} rowSelection={rowSelection} />
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