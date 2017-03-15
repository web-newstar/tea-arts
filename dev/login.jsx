const React = require("react")
const ReactDOM = require("react-dom")

import {Layout} from 'antd';
const {Header, Footer, Sider, Content} = Layout;

import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;
class NormalLoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                //console.log('Received values of form: ', values);
                var body=""
                for(var k in values){
                    body+=`${k}=${values[k]}&`
                }
                fetch("/login/check",{
                    method:"post",
                    headers:{
                        'Content-Type':'application/x-www-form-urlencoded'
                    },
                    credentials: 'same-origin',
                    body:body.slice(0,-1)
                })
                .then((res)=>res.json())
                .then((data)=>{
                    location.href="/admin/index"
                })
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{required: true, message: 'Please input your username!'}],
                    })(
                        <Input addonBefore={<Icon type="user" />} placeholder="请输入账号"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: 'Please input your Password!'}],
                    })(
                        <Input addonBefore={<Icon type="lock" />} type="password" placeholder="请输入密码"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox> 记住我 </Checkbox>
                    )}
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        点击登录
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
class Page extends React.Component {
    render() {
        return (
            <div className="login">
                <Layout>
                    <Header>
                        <div className="lt_login">茗悦国艺后台登录</div>
                    </Header>
                    <Content>
                        <WrappedNormalLoginForm/>
                    </Content>
                    <Footer>
                        <p>Copyright @ 2017-1608</p>
                    </Footer>
                </Layout>
            </div>
        )
    }
}
ReactDOM.render(<Page/>, document.querySelector("#page"));