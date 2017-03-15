var React=require('react');
var ReactDOM=require('react-dom');
const common=require('./common.jsx');
class T_content extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        //地址栏
        var el=(
            this.props.t_location.map((v,i)=>
                <div className="t_set" key={i}>
                    <div className="t_img" style={{backgroundImage:`url(/public/images/${v.img})`}}></div>
                    <div className="t_font">
                        <span className="t_f1">{v.font1}</span>
                        <span className="t_f2">{v.font2}</span>
                    </div>
                </div>
            )
        )
        //留言区
        return(
            <div>
                <common.Ztnav zt_nav={zt_nav}/>
                <common.T_banner t_banner={t_banner}/>
                <div className="t_cinner">
                    <common.T_bread t_bread={t_bread}/>
                    <div className="t_btn"></div>
                    <div className="t_localtion">
                        <div className="t_floewr1"></div>
                        <div className="t_lobox">
                            {el}
                        </div>
                    </div>
                    <div className="t_btn t_btn2"></div>
                    <div className="t_form">
                        <form action="">
                            <input type="text" placeholder="NAME" name="name"/>
                            <input type="text" placeholder="PHONE" name="phone"/>
                            <input type="text" placeholder="EMAIL" name="email"/>
                            <textarea name="textarea" placeholder="LEAVE A MESSAGE..."></textarea>
                        </form>
                        <div className="t_send t_fbtn">发送</div>
                        <div className="t_rest t_fbtn">重置</div>
                        <div className="t_flower"></div>
                    </div>
                </div>
                <common.Footerl/>
            </div>
        )
    }
}
var t_banner=["t_content1.png"]
var t_bread=[{name:"首页",font:">"},{name:"联系我们"}]
var t_location=[
    {img:"t_content5.png",font1:"134-3567-9987",font2:"134-3567-9987"},
    {img:"t_content6.png",font1:"134-3567-9987",font2:"134-3567-9987"},
    {img:"t_content7.png",font1:"134-3567-9987",font2:"134-3567-9987"}
]
var zt_nav = [
    {id:1,title:"首页",img:"/public/images/zt_5_03.jpg",http:"/index"},
    {id:2,title:"关于茗悦",img:"/public/images/zt_6_03.jpg",http:"/about"},
    {id:3,title:"最新动态",img:"/public/images/zt_7_03.jpg",http:"/new"},
    {id:4,title:"培训课程",img:"/public/images/zt_9_03.jpg",http:"/class"},
    {id:5,title:"讲座表演",img:"/public/images/zt_8_03.jpg",http:"/perform"},
    {id:6,title:"茶学堂",img:"/public/images/zt_10_03.jpg",http:"/school"},
    {id:7,title:"联系我们",img:"/public/images/zt_11_03.jpg",http:"/contact"}
];
ReactDOM.render(<T_content t_location={t_location}/>,document.getElementById('t_content'))
