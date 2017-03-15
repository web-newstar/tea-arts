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
var t_bread=[{name:"首页",font:">",href:'/index'},{name:"讲座表演",href:'/perform'}];
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
                        <common.Q_hot Q_hot={Q_peixun}/>
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
const Q_peixun = [{src:"/public/images/Q_01.png"}];
//热门推荐
const Q_bg = [{src: "/public/images/Q_19.png"}];
//更多推荐
const Q_tui = [{src: "/public/images/Q.png"}];
//热门推荐的内容
const Q_list = [
    {
        id: "1",
        src: '/public/images/q_23.png',
        china: "茗悦星级大咖莅临本店",
        english: 'MING YUE STAR HIGHER-UPS TO OUR SHOP',
        time: '2016-8-12  8:00'
    },
    {
        id: "1",
        src: '/public/images/q_26.png',
        china: "茗悦茶艺大咖亲授技艺",
        english: 'MING YUE TEA CAFE CLOSE TEACHING',
        time: '2016-8-12  8:00'
    }
];
//    这个是培训课程的组件
const qtwo = [
    {id: '1', china: '茶艺', english: 'MINGYUE NEWS',href:'/perform/1'},
    {id: '2', china: '插花', english: 'INDUSTRY NEWS',href:'/perform/2'},
    {id: '3', china: '香道', english: 'INCENSE LORE',href:'/perform/3'},
    {id: '4', china: '古琴', english: 'CHINESE ZITHER',href:'/perform/4'}
];

///二级页面右边内容
const Q_tea = [
        {
            id: '1',
            titletu: '/public/images/q1.png',
            titlechina: '插花讲座',
            titleenglish: 'Tea art lecture',
            tiaozhuan: `功夫茶茶艺近日，横岗街道怡锦社区党群服务中心举行了一场社区民生大盆菜之“礼赞父
母·孝亲奉茶”活动`,
            tiaoing: `Recently, the horizontal bar street between yi jin community service center held a community
of people's livelihood big ready-to-cook"Great parents, XiaoQin serve tea "activity`,
            time: '2016-10-14 08:00',
            click: '9999人浏览',
            src: '/public/images/M_16.jpg'
        },
        {
            id: '2',
            titletu: '/public/images/q1.png',
            titlechina: '茶艺讲座',
            titleenglish: 'Tea art lecture',
            tiaozhuan: `茶艺表演是将日常沏泡茶技巧进行艺术加工后，展现出来的具有表演性、观赏性的艺术活动
它已不是生活的原生态。`,
            tiaoing: `The technique of the tea art performance is to daily brew tea art processing, display is performing, orna
mental art activities, it is not the original life.`,
            time: '2016-10-14 08:00',
            click: '9999人浏览',
            src: '/public/images/M_17.jpg'
        },
        {
            id: '3',
            titletu: '/public/images/q1.png',
            titlechina: '茶艺讲座',
            titleenglish: 'Tea art lecture',
            tiaozhuan: `茶艺表演是在茶艺的基础上产生的，它是通过各种茶叶冲泡技艺的形象演示科学地、生活化
地、艺术地展示泡饮过程
实与灿烂。各朝关于插花欣赏的诗词很多。`,
            tiaoing: `Tea art performance was produced on the basis of the tea art, it is through a variety of tea brewing tech
niques of image demonstrationScientifically, life, art display bubble drink process`,
            time: '2016-10-14 08:00',
            click: '9999人浏览',
            src: '/public/images/M_18.jpg'
        },
        {
            id: '4',
            titletu: '/public/images/q1.png',
            titlechina: '茶艺讲座',
            titleenglish: 'Tea art lecture',
            tiaozhuan: `当人们将喝茶提升到品饮的层次，为了满足精神上的需求时，泡茶就成为了一门艺术，至于茶艺表演，其艺术性自然更强，也更具观赏性`,
            tiaoing: `When people drink tea will ascend into drinks the level, in order to meet the spiritual needs, make tea b
ecame an art, as for the tea ceremony performance, its artistic nature better, and more ornamental`,
            time: '2016-10-14 08:00',
            click: '9999人浏览',
            src: '/public/images/M_19.png'
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