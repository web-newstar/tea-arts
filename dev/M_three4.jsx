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
var zt_nav = [
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
var t_bread=[{name:"首页",font:">",href:'/index'},{name:"培训课程",font:">",href:'/class'},{name:"香道",href:'/class/3'}];
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
                        <common.Q_hot Q_hot={Q_peixun}/>
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
const Q_peixun = [{src:"/public/images/Q_01.png"}];
//热门推荐
const Q_bg = [{src: "/public/images/Q_19.png"}];
//更多推荐
const Q_tui = [{src: "/public/images/Q.png"}];
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
    {id: '3', china: '香道', english: 'Flower arranging',href:'/class/3'}
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
            titletu: '/public/images/q1.png',
            titlechina: '香道讲座',
            titleenglish: 'FLOWER ARRANGING',
            biaoti:'香是自然造化之美，人类之好香为天性使然',
            tiaozhuan: `从早期的简单用香，到后来的富有文化气息的品香、咏香，体现了人类热爱自然的积极情趣，表明了人类安逸从容的生活态度。香道发展到今天，已经不单纯是品香、斗香的概念，而是一种以天然芳香原料作为载体，融汇自然科学和人文科学为一体的，感受和美化自然生活，实现人与自然的和谐，创造人的外在美与心灵美的和谐统一的香的文化。`,
            tiaoing: `Sweet is the beauty of nature, the human good nature. From the early simple use perfume, to the later rich culture breath of sweet, sweet, embodies the human nature of positive sentiment, show the human comfort and easy life manner. Teachers development today, has not merely is the concept of the bucket is sweet, sweet, but a kind of natural aromatic raw materials as the carrier, natural science and the humanities as a whole, harmony culture.`,
            xian:'/public/images/MAER.png',
            src: '/public/images/M_15.jpg'
        }
    ]
    ;
ReactDOM.render(<Q_value Q_list={Q_list}/>, document.getElementById("Q_left"));
class Y_value extends React.Component {
    render() {
        return (
            <div>
                <common.Footerl/>
            </div>
        )
    }
}
ReactDOM.render(<Y_value Q_list={Q_list}/>, document.getElementById("Y_foot"));