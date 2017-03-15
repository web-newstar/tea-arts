var React=require('react');
//导航部分
class Ztnav extends React.Component{
    constructor(props){
        super(props);
        //this.state={
        //    index:0
        //}
    }

    render(){
        var i=0;
        const urlInfo=location.pathname.split("/")[1];
        switch (urlInfo){
            case 'index':i=0;break;
            case 'about':i=1;break;
            case 'new':i=2;break;
            case 'class':i=3;break;
            case 'perform':i=4;break;
            case 'school':i=5;break;
            case 'contact':i=6;break;
        }
        this.state={index:i};
        var el=(
            this.props.zt_nav.map((v,i)=>(
                <a  key={i} href={v.http}>
                    <li style={{color:this.state.index==i?"#ffffff":"#000000"}}>
                        {v.title}
                        <img className="imgs" src={v.img} alt="" style={{display:this.state.index===i?"block":"none"}}/>
                    </li>
                </a>
            ))
        )
        return(
            <div className="zt_header">
                <div className="zt_box">
                    <img className="zt_img" src="/public/images/zt4.jpg" alt=""/>
                    <ul className="zt_ul">
                        {el}
                        <a href="">
                            <li><img src="/public/images/zt_10.jpg" alt="" /></li>
                        </a>
                    </ul>
                </div>
            </div>
        )
    }
}
//讲座表演
class Lt_video extends React.Component{
    constructor(props){
        super(props);
        this.state={
            index:0
        }
        this.play=this.play.bind(this)
        this.pause=this.pause.bind(this)

    }
    play(e){
        var video=document.getElementById("play")
        video.play()
        this.setState({
            index:1
        })
        e.stopPropagation()
    }
    pause(){
        var video=document.getElementById("play")
        video.pause()
        this.setState({
            index:0
        })
    }

    render(){
        return (
            <div className="lt_video" onClick={this.pause}>
                <embed id="page" src='http://player.youku.com/player.php/sid/XMjYyODA1NzM5Mg==/v.swf' allowFullScreen='true' type='application/x-shockwave-flash' hidden="true"></embed>
            </div>
        )
    }
}
//最新动态
class Lj_news extends React.Component{
    constructor(props){
        super(props);
        this.state={
            index:0
        }
        this.page1=this.page1.bind(this)
        this.page2=this.page2.bind(this)
    }
    page1(){
        var page=document.getElementsByClassName("new_left")
        this.setState({
            index:this.state.index-3
        })
    }
    page2(){
        var page=document.getElementsByClassName("new_left")
        this.setState({
            index:this.state.index+3
        })
    }
    render(){
        var news=(
            this.props.lj_news.map((v,i)=>
                <div key={i} className="lj_block">
                    <div className="lj_round" onClick={()=>this.setState({index:i})}>
                        <div className="round" style={{width:this.state.index==i?"44px":"26px",height:this.state.index==i?"44px":"26px"}}></div>
                    </div>
                    <li className="content">
                        {v.time}
                        <div>
                            {v.title.map((v,i)=>
                                <a href="" key={i}>{v.id}</a>
                            )}
                        </div>
                    </li>
                </div>

            )
        );
        var right=this.props.lj_news.map((v,i)=>
            <div key={i} className="lj_choose" style={{opacity:this.state.index==i?1:0}}>
                {v.title.map((v,i)=>
                    <ul key={i} style={{backgroundImage:`url(${v.img})`}}>
                        <div>
                            <p>{v.id}</p>
                            <p>{v.express}</p>
                        </div>
                    </ul>
                )}
            </div>
        )
        return (
            <div className="lj_news">
                <ul className="new_left">
                    <div className="timeline">
                        <div className="green"></div>
                    </div>
                    <div className="lj_contain" style={{top:this.state.index*-175+"px"}}>

                        {news}
                    </div>

                </ul>
                <ul className="indicator">
                    <li className="ind iconfont" onClick={this.page1}>《 </li>
                    <li className="ind iconfont" onClick={this.page2}> 》 </li>
                </ul>
                {right}
            </div>

        )
    }
}
class M_dongTai extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (

                <ul className="m_rbox">
                    {this.props.m_dongtai.map((v,i)=><li>
                        <div className={'m_tu'+v.id}>
                            <div className="tips">
                                <h1>{v.title}</h1>
                                <p>{v.txt1}</p>
                                <p>{v.txt2}</p>
                                <p>{v.txt3}</p>
                            </div>
                            <img src={v.src} alt=""/>
                        </div>
                    </li>)}
                    <div className="m_more">
                        <div className="m_tu"></div>
                    </div>
                </ul>
        )
    }
}
//学员作品
class Q_students extends React.Component{
    render(){
        return(
            <div className="Q_content">
                <div className="Q_tuA"></div>
                {this.props.q_student.map((v,i)=><div key={i} className={"Q_tu"+v.id} id="Q_tu"><img className="img1"src={v.src} alt=""/><img
                    className="img2"src="/public/images/q_7_07.png" alt=""/></div>)}
                <div className="Q_tuB">
                </div>
            </div>
        )
    }
}
//培训课程
class T_course extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const el=(
            this.props.t_course.map((v,i)=><div key={i}  className="course">
                <img src={`/public/images/${v.img}`} alt=""/>
                <h1>{v.courseName}</h1>
                <span>{v.tit1}</span>
                <span>{v.tit2}</span>
                <a href={v.href} className="t_btn"></a>
            </div>)
        )
        return(
            <div className="t_box">
                <div className="t_bg1"></div>
                <div className="t_bg2"></div>
                <div className="t_bg3">
                    {el}
                </div>
            </div>
        )
    }
}

//小标题
//首页小标提
class T_tit extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        var el=(
            this.props.t_tit.map((v,i)=>
                <div className="t_bg" key={i}>
                    <div className="t_h1">{v.tit}</div>
                    <img src={`/public/images/${v.english}`} alt=""/>
                </div>
            )
        )
        return(
            <div className="t_tit">{el}</div>
        )
    }
}
//二级banner
class T_banner extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        var el=(this.props.t_banner.map((v,i)=>
            //style="background:url('../images/')"
            <div className="t_binner" style={{backgroundImage:`url(/public/images/${v})`}}  key={i}>

            </div>
        ))
        return(
            <div className="t_banner">
                {el}
            </div>
        )
    }
}
//面保线
class T_bread extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        var el=(this.props.t_bread.map((v,i)=>
                <div className="t_bread" key={i}>
                    <a href="javascript:;">{v.name}</a>
                    <span>{v.font}</span>
                </div>)
        )
        return(
            <div>
                {el}
            </div>
        )
    }
}
//二级页脚
class Footerl extends React.Component{
    render(){
        return(
            <div className="footerbox">
                <div className="top"></div>
                <div className="contact">
                    <div className="add">
                        <div className="pic"></div>
                        <span>上海市浦东区耀州新路333号</span>
                    </div>
                    <div className="mail">
                        <div className="pic"></div>
                        <span>PLOVE LACD@163.com </span>

                    </div>
                    <div className="phone">
                        <div className="pic"></div>
                        <span>400-123-123</span>

                    </div>
                </div>
                <div className="map"></div>
                <div className="fbottom">
                    <span className="bq">
                        版权所有：茗悦国艺有限公
                    </span>
                    <span className="bn">
                        晋ICP备14008682号-10
                    </span>
                </div>

            </div>
        )
    }
}
//图文详情的标题二
class T_tea extends React.Component {
    render() {
        return (
            <div>
                {this.props.T_tea.map((v, i)=>
                    <div className="Q_right" id="T_right" key={i}>
                        <div className="t_point"></div>
                        <div className="two_tit">{v.tit}</div>
                        <div className="two_twotit">{v.tittwo}</div>
                        <p class="two_p">{v.china}</p>
                        <p class="two_engish">{v.english}</p>
                    </div>
                )}
            </div>
        )
    }
}
//图文详情的标题
class Q_tea extends React.Component {
    render() {
        return (
            <div>
                {this.props.Q_tea.map((v, i)=>
                    <div className="Q_right" key={i}>
                        <div className="Q_title">
                            <div className="Q_tea">
                                <img src={v.titletu} alt=""/>
                            </div>
                            <div className="Q_biao">
                                <p>{v.titlechina}<span> | </span><span>{v.titleenglish}</span></p>
                            </div>
                            <div className="Q_all"></div>
                        </div>
                        <div className="Q_contend">
                            <p>{v.biaoti}</p>
                            <a href={"/class/4/"+v.id}>{v.tiaozhuan}</a>
                            <p>{v.tiaoing}</p>
                            <div className="Q_read">
                                <div className="Q_circle"></div>
                                <div className="Q_time">{v.time}</div>
                                <div className="Q_circle"></div>
                                <div className="Q_time">{v.click}</div>
                            </div>
                            <img src={v.src} alt=""/>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}
//二级页面 更多推荐的小组件
class Q_tui extends React.Component{
    render(){
        return(
            <div>
                <div className="Q_tui">
                    查看更多热门推荐
                </div>
            </div>
        )
    }
}
//二级页面这个组件是左边的标题
class Q_hot extends React.Component {
    render() {
        return (
            <div>
                {this.props.Q_hot.map((v, i)=><div className="Q_hot" key={i}>
                    <img src={v.src} alt=""/>
                </div>)}
                <div className="dashed"></div>
            </div>
        )
    }
}
//二级页面左边的选型卡
class Q_two extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        var urlInfo=location.pathname.split("/")[2]
        if(!urlInfo){
            urlInfo=1
        }
        this.state={index:urlInfo}
        console.log(urlInfo)
        console.log(location.pathname)
        var Q_list=this.props.Q_two.map((v,i)=>
            <div  id="Q_list" className={'Q_padd'+v.id} key={i} style={{borderBottom:(i+1==this.state.index)?"2px dashed #98c955":"2px dashed #000"}}>
                <a href={v.href}>
                    <p style={{color:(i+1==this.state.index)?"#98c955":"#000"}}>{v.china}</p>
                    <p style={{color:(i+1==this.state.index)?"#98c955":"#000"}}>{v.english}</p>
                    <img src="../public/images/Q_07.png" alt="" style={{display:(i+1==this.state.index) ? 'block':'none'}}/>
                </a>
            </div>);
        return(
            <div>
                <div className="Q_title">
                    {/*<img src="../public/images/Q_01.png" alt=""/>*/}
                </div>
                <div className="Q_course">
                    {Q_list}
                    <div className="Q_back"></div>
                </div>
            </div>
        )
    }
}
//首页页脚
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

            <div className="footerbox">
                <div className="messtitle">
                    <span className="sp1">
                        在线报名
                    </span>
                    <span className="sp2">
                        LIANXI WOMEN
                    </span>

                </div>
                <form className="mess">
                    <ul className="messl">
                        <li>
                            <span>报名课程</span>
                            <select className="sel" name="apply_class" ref={(el)=>{this.apply_class=el}}>
                                {this.props.y_footer.map((v,i)=><option key={i}>{v}</option>)}
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
                            <div className="bz">
                                <span>备注</span>
                                <input type="textarea" className="bz" name="content" ref={(el)=>{this.content=el}}></input>
                            </div>
                        </li>
                        <li>
                            <div className="yz">
                                <span>验证码</span>
                                <div className="yzr">
                                    <input type="text"/>
                                    <div className="yzt">
                                        <div className=""></div>
                                        <a href="javascript:;">换一张</a>
                                    </div>
                                </div>

                            </div>
                        </li>
                        <li className="tbtn">
                            <div  onClick={this.submit}/>
                        </li>
                    </ul>
                    <ul className="messr">
                        <li className="li1">
                            <div></div>
                            <span>400 0351 152</span>
                        </li>
                        <li className="li2">
                            <div></div>
                            <span>www.lvxing.com</span>
                        </li>
                        <li className="li3">
                            <div></div>
                            <span>info.services@1234567890.com</span>
                        </li>
                        <li className="li4">
                            <div></div>
                            <span>山西省大同市南郊区御东新区兴云街</span>
                        </li>
                    </ul>

                </form>
                <div className="map"></div>
                <div className="fbottom">
                    <span className="bq">
                        版权所有：茗悦国艺有限公
                    </span>
                    <span className="bn">
                        晋ICP备14008682号-10
                    </span>
                </div>
            </div>
        )
    }
}
module.exports={
    Ztnav:Ztnav,
    Lt_video:Lt_video,
    Lj_news:Lj_news,
    M_dongTai:M_dongTai,
    Q_students:Q_students,
    T_course:T_course,
    T_tit:T_tit,
    T_banner:T_banner,
    T_bread:T_bread,
    Footerl:Footerl,
    T_tea:T_tea,
    Q_two:Q_two,
    Q_hot:Q_hot,
    Q_tui:Q_tui,
    Q_tea:Q_tea,
    Footer:Footer
}

