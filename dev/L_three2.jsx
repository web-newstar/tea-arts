const React = require('react');
const ReactDOM = require('react-dom');
const common = require('./common.jsx');
//导航
class Q_nav extends React.Component {
    render() {
        return (
            <div>
                <common.Ztnav zt_nav={zt_nav}/>
            </div>
        )
    }

    s
}
//导航
var zt_nav=[
    {id:1,title:"首页",img:"/public/images/zt_5_03.jpg",http:"/index"},
    {id:2,title:"关于茗悦",img:"/public/images/zt_6_03.jpg",http:"/about"},
    {id:3,title:"最新动态",img:"/public/images/zt_7_03.jpg",http:"/new"},
    {id:4,title:"培训课程",img:"/public/images/zt_9_03.jpg",http:"/class"},
    {id:5,title:"讲座表演",img:"/public/images/zt_8_03.jpg",http:"/perform"},
    {id:6,title:"茶学堂",img:"/public/images/zt_10_03.jpg",http:"/school"},
    {id:7,title:"联系我们",img:"/public/images/zt_11_03.jpg",http:"/contact"}
];
ReactDOM.render(<Q_nav/>, document.getElementById("Q_nav"));

//banner
class Q_banner extends React.Component {
    render() {
        return (
            <div>
                <common.T_banner t_banner={t_banner}/>
            </div>
        )
    }
}
const t_banner = [
    "q_banner.png"
];
ReactDOM.render(<Q_banner />, document.getElementById('Q_banner'));
//面包屑
var t_bread=[{name:"首页",font:">",href:'/index'},{name:"茶学堂",font:">",href:'/school'},{name:"茶叶知识",href:'/school/2'}];
//二级页面热门推荐的内容
class Q_value extends React.Component {
    render() {
        var Q_list = this.props.Q_list.map((v, i)=><div className="" key={i}>
            <div className="Q_photo">
                <img src={v.src} alt=""/>
            </div>
            <p>{v.china}</p>
            <div className="Q_bg"></div>
            <span>{v.english}</span>
            <div className="Q_time">
                <div className="Q_tian">{v.time}</div>
            </div>
        </div>);
        return (
            <div className="Q_two">
                <common.T_bread t_bread={t_bread}/>

                <div className="Q_left">
                    <div>
                        <common.Q_two Q_two={qtwo}/>
                        <div>
                            {Q_list}
                        </div>
                    </div>
                </div>
                <F_tea M_tea={G_tea}/>
            </div>
        )
    }
}
//培训课程
const Q_peixun = [{src:"../public/images/M_21.png"}];
//热门推荐
const Q_bg = [{src: "../public/images/Q_19.png"}];
//更多推荐
const Q_tui = [{src: "../public/images/Q.png"}];
//热门推荐的内容
const Q_list = [
    {
        id: "",
        src: '',
        china: "",
        english: '',
        time: ''
    },
    {
        id: "",
        src: '',
        china: "",
        english: '',
        time: ''
    }
];
//    这个是培训课程的组件
const qtwo = [
    {id: '2', china: '茶艺茶道', english: 'TEA KNOWLEDGE'}
];

///二级页面右边内容
class F_tea extends React.Component {
    render() {
        return (
            <div>
                {this.props.M_tea.map((v, i)=>
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
                            <a href="">{v.tiaozhuan}</a>
                            <p>{v.tiaoing}</p>
                            <div>
                                <img src={v.xian} alt=""/>
                            </div>
                            <img src={v.src} alt=""/>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}
const G_tea = [
        {
            id: '1',
            titletu: '../public/images/q1.png',
            titlechina: '茶艺茶道',
            titleenglish: 'TEA KNOWLEDGE',
            biaoti:'“礼赞父母·孝亲奉茶”活动',
            tiaozhuan: `近日，横岗街道怡锦社区党群服务中心举行了一场社区民生大盆菜之“礼赞父母·孝亲奉茶”活动，15名萌童身着汉服，手把茶具，跟着茶艺师演绎具有中华特色的传统华夏茶礼。这是“小小状元郎”国学书院中的一个项目。课堂上，茶艺老师给大家示范了汉式...`,
            tiaoing: `Yi jin recently, the horizontal bar street community service center held a community between the party and the masses of the people's livelihood big ready-to-cook "praise parents XiaoQin serve tea" activities, 15 of children's wear hanfu, hand the tea set, followed the tea room with characteristic of Chinese traditional Chinese tea ceremony. This is one of the "little took traditional Chinese academy" project. Class, tea art teacher to demonstrate the han type...`,
            xian:'../public/images/MAER.png',
            src: '../public/images/M_24.png'
        }
    ]
    ;
ReactDOM.render(<Q_value Q_list={Q_list}/>, document.getElementById("Q_left"));
class Footer extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (

            <div className="footerboxs">
                <div className="messtitle">
                    <span className="sp1">
                        在线报名
                    </span>
                    <span className="sp2">
                        LIANXI WOMEN
                    </span>

                </div>
                <div className="mess">
                    <ul className="messl">
                        <li>
                            <span>报名课程</span>
                            <select className="sel">
                                {this.props.data.map((v,i)=><option key={i}>{v}</option>)}
                            </select>
                        </li>
                        <li>
                            <span>微信号码</span>
                            <input type="text"/>
                        </li>
                        <li>
                            <span>您的姓名</span>
                            <input type="text"/>
                        </li>
                        <li>
                            <span>电话号码</span>
                            <input type="text"/>
                        </li>
                        <li>
                            <div className="bz">
                                <span>备注</span>
                                <textarea className="bz"></textarea>
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
                            <div />
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
var arr=[
    {id:1,name:'琴'},
    {id:2,name:'琴'},
    {id:3,name:'hua'}
]

var newarr=arr.map((v)=>v.name);
// var newarr = ["琴", '棋', '书 ']
ReactDOM.render(<Footer data={newarr}/>, document.getElementById("footer"));