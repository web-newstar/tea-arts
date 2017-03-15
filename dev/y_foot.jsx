var React = require('react');
var ReactDOM = require('react-dom');
class Footer extends React.Component {
    constructor(props){
        super(props);
        this.submit=this.submit.bind(this);
    }
    submit(e) {
        e.preventDefault();
        var data = {apply_class: this.apply_class.value, wechat: this.wechat.value,name: this.name.value, phone: this.phone.value, content: this.content.value};
        fetch('/apply', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
            body: JSON.stringify(data)
        }).then((res)=>res.json()).then((data)=> {
            if (data !== 'err') {
                alert('插入成功');
            }
        })
    }
    render() {
        return (

            <div className="yfooterbox">
                <div className="ymesstitle">
                    <span className="ysp1">
                        在线报名
                    </span>
                    <span className="ysp2">
                        LIANXI WOMEN
                    </span>

                </div>
                <form className="ymess">
                    <ul className="ymessl">
                        <li>
                            <span>报名课程</span>
                            <select className="ysel" name="apply_class" ref={(el)=>{this.apply_class=el}}>
                                {this.props.data.map((v,i)=><option key={i}>{v}</option>)}
                            </select>
                        </li>
                        <li>
                            <span>微信号码</span>
                            <input type="text" name="wechat" ref={(el)=>{this.wechat=el}}/>
                        </li>
                        <li>
                            <span>您的姓名</span>
                            <input type="text" name="name" ref={(el)=>{this.name=el}}/>
                        </li>
                        <li>
                            <span>电话号码</span>
                            <input type="text" name="phone" ref={(el)=>{this.phone=el}}/>
                        </li>
                        <li>
                            <div className="ybz">
                                <span>备注</span>
                                <input type="textarea" className="ybz" name="content" ref={(el)=>{this.content=el}}></input>
                            </div>
                        </li>
                        <li>
                            <div className="yyz">
                                <span>验证码</span>
                                <div className="yyzr">
                                    <input type="ytext"/>
                                    <div className="yyzt">
                                        <div className=""></div>
                                        <a href="javascript:;">换一张</a>
                                    </div>
                                </div>

                            </div>
                        </li>
                        <li className="ytbtn">
                            <div  onClick={this.submit}/>
                        </li>
                    </ul>
                    <ul className="ymessr">
                        <li className="yli1">
                            <div></div>
                            <span>400 0351 152</span>
                        </li>
                        <li className="yli2">
                            <div></div>
                            <span>www.lvxing.com</span>
                        </li>
                        <li className="yli3">
                            <div></div>
                            <span>info.services@1234567890.com</span>
                        </li>
                        <li className="yli4">
                            <div></div>
                            <span>山西省大同市南郊区御东新区兴云街</span>
                        </li>
                    </ul>

                </form>
                <div className="ymap"></div>
                <div className="yfbottom">
                    <span className="ybq">
                        版权所有：茗悦国艺有限公
                    </span>
                    <span className="ybn">
                        晋ICP备14008682号-10
                    </span>
                </div>
            </div>
        )
    }
}
var arr=[
    {id:1,name:'琴'},
    {id:2,name:'琴'},
    {id:3,name:'hua'}
]

var newarr=arr.map((v)=>v.name);
// var newarr = ["琴", '棋', '书 ']
ReactDOM.render(<Footer data={newarr}/>, document.getElementById("footer"));

