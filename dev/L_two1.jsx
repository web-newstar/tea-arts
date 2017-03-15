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
    "cha_banner_02.png"
];
ReactDOM.render(<Q_banner />, document.getElementById('Q_banner'));
//面包屑
var t_bread=[{name:"首页",font:">",href:'/index'},{name:"茶学堂",href:'/school'},];
//二级页面热门推荐的内容
class Q_value extends React.Component {
    render() {
        var Q_list = this.props.Q_list.map((v, i)=><div className="Q_shaw" key={i}>
            <div className="Q_photo">
                <img src={v.src} alt=""/>
            </div>
            <p>{v.china}</p>
            <div className="Q_bg"></div>
            <span>{v.english}</span>
            <div className="Q_time">
                <div className="Q_yuan"></div>
                <div className="Q_tian">{v.time}</div>
            </div>
        </div>);
        return (
            <div className="Q_two">
                <common.T_bread t_bread={t_bread}/>
                <div className="Q_left">
                    <div>
                        <common.Q_two Q_two={qtwo}/>
                        <common.Q_hot Q_hot={Q_bg}/>
                        <div>
                            {Q_list}
                            <common.Q_tui Q_tui={Q_tui}/>
                        </div>
                    </div>
                </div>
                <common.Q_tea Q_tea={Q_tea}/>
            </div>
        )
    }
}
//培训课程
const Q_peixun = [{src:"../public/images/M_21.png"}];
const Q_hot = [{src:"../public/images/M_21.png"}];
//热门推荐
const Q_bg = [{src: "../public/images/M_21.png"}];
//更多推荐
const Q_tui = [{src: "../public/images/Q.png"}];
//热门推荐的内容
const Q_list = [
    {
        id: "1",
        src: '../public/images/q_23.png',
        china: "茗悦星级大咖莅临本店",
        english: 'MING YUE STAR HIGHER-UPS TO OUR SHOP',
        time: '2016-8-12  8:00'
    },
    {
        id: "1",
        src: '../public/images/q_26.png',
        china: "茗悦茶艺大咖亲授技艺",
        english: 'MING YUE TEA CAFE CLOSE TEACHING',
        time: '2016-8-12  8:00'
    }
];
//    这个是培训课程的组件
const qtwo = [
    {id: '1', china: '茶叶知识', english: 'THE TEA KNOWLEDG',href:'/school/1'},
    {id: '2', china: '茶艺茶道', english: 'THE TEA CEREMORY',href:'/school/2'}
    //{id: '3', china: '茶具茶器', english: 'TEA SERVICE WARE'},
    //{id: '4', china: '茶文精选', english: 'TEA CULTURE SIFT'}
];


///二级页面右边内容
const Q_tea = [
        {
            id: '1',
            titletu: '../public/images/q1.png',
            titlechina: '茶叶知识',
            titleenglish: 'THE TEA KNOWLEDGE',
            tiaozhuan: `茶，是中国特有的一种著名饮品遍销海内外。为小乔木状经广泛栽培毛被及 叶型变化很大可作饮品含有多种有益成分。`,
            tiaoing: `A famous drink tea, it is unique to China, all over at home and`,
            time: '2016-8-14 08:00',
            click: '1212人浏览',
            src: '../public/images/L_cha02_05.png'
        },
        {
            id: '2',
            titletu: '../public/images/q1.png',
            titlechina: '茶叶知识',
            titleenglish: 'THE TEA KNOWLEDGE',
            tiaozhuan: `茶艺表演是将日常沏泡茶技巧进行艺术加工后，展现出来的具有表演性、观 赏性的艺术活动，它已不是生活的原生态。`,
            tiaying: `The technique of the tea art performance is to daily brew tea a`,
            time: '2016-8-14 08:00',
            click: '1212人浏览',
            src: '../public/images/L_cha03_09.png'
        }
    ]
    ;
ReactDOM.render(<Q_value Q_list={Q_list}/>, document.getElementById("Q_left"));
//ReactDOM.render(<Q_title Q_tea={Q_tea}/>, document.getElementById("Q_right"));
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
    {id:1,name:'Jone'},
    {id:2,name:'park'},
    {id:3,name:'Jems'}
]

var newarr=arr.map((v)=>v.name);
// var newarr = ["琴", '棋', '书 ']
ReactDOM.render(<Footer data={newarr}/>, document.getElementById("footer"));
