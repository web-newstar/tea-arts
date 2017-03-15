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
var t_bread=[{name:"首页",font:">"},{name:"最新动态"}];
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
//热门推荐
const Q_bg = [{src: "../public/images/Q_19.png"}];
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
    {id: '1', china: '茗悦动态', english: 'MINGYUE NEWS'},
    {id: '2', china: '行业动态', english: 'INDUSTRY NEWS'}
];

///二级页面右边内容
const Q_tea = [
        {
            id: '1',
            titletu: '../public/images/q1.png',
            titlechina: '古典与现代交融  调酒与茶艺邂逅',
            titleenglish: 'Classical and modern wine and tea',
            tiaozhuan: `近日，横岗街道怡锦社区党群服务中心举行了一场社区民生大盆菜之”礼赞父母·孝亲奉茶”活动，15岁萌童身着汉服，手把茶具，跟着茶艺师演绎……`,
            tiaoing: `Recently,Henggang Jin Yi Street commuhity party service center held a community livilihood”in praise
 of parents,filial piety vegetable tea”activities,15 year old adorable boy dressed in Chinese clothes,
hand tea,tea with the deduction…`,
            time: '2016-8-14 08:00',
            click: '1212人浏览',
            src: '../public/images/y_12.png'
        }
    ]
    ;
ReactDOM.render(<Q_value Q_list={Q_list}/>, document.getElementById("Q_left"));
//ReactDOM.render(<Q_title Q_tea={Q_tea}/>, document.getElementById("Q_right"));