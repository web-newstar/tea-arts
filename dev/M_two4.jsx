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
    "M_11_02.png"
];
ReactDOM.render(<Q_banner />, document.getElementById('Q_banner'));
//面包屑
var t_bread=[{name:"首页",font:">",href:'/index'},{name:"培训课程",href:'/class'}];
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
    {id: '1', china: '茶艺', english: 'MINGYUE NEWS',href:'/class/1'},
    {id: '2', china: '插花', english: 'INDUSTRY NEWS',href:'/class/2'},
    {id: '3', china: '香道', english: 'INCENSE LORE',href:'/class/3'},
    {id: '4', china: '古琴', english: 'CHINESE ZITHER',href:'/class/4'}
];

///二级页面右边内容
const Q_tea = [
        {
            id: '1',
            titletu: '/public/images/q1.png',
            titlechina: '古琴讲座',
            titleenglish: 'incense lore',
            tiaozhuan: `香是自然造化之美，人类之好香为天性使然。从早期的简单用香，到后来的富有文化气息的
品香、咏香，体现了人类热爱自然的积极情趣，表明了人类安逸从容的生活态度。`,
            tiaoing: `Sweet is the beauty of nature, the human good nature. From the early simple use perfume, to the later 
rich culture breath of sweet, sweet, embodies the human nature of positive sentiment, `,
            time: '2016-10-14 08:00',
            click: '9999人浏览',
            src: '/public/images/M_16.jpg'
        },
        {
            id: '2',
            titletu: '/public/images/q1.png',
            titlechina: '香道讲座',
            titleenglish: 'incense lore',
            tiaozhuan: `香道的含义远远超越了香制品本身，而是通过香这个载体达到修养身心，培养高尚情操，追
求人性完美的文化。香，在馨悦之中调动心智的灵性，而又净化心灵；于有形...`,
            tiaoing: `There are far beyond the meaning of the product itself, but by the carrier to cultivation of body and mind, 
cultivate noble sentiment, the pursuit of the perfect human nature culture. In xin yue ... `,
            time: '2016-10-14 08:00',
            click: '9999人浏览',
            src: '/public/images/M_17.jpg'
        },
        {
            id: '3',
            titletu: '/public/images/q1.png',
            titlechina: '香道讲座',
            titleenglish: 'incense lore',
            tiaozhuan: `不同的历史时期，不同的文化背景，甚至不同的精神状态，人们用香、品香的方式有所不同
效果亦大相径庭。香虽细微，却能集宗教、艺术、医疗、休闲、生活...`,
            tiaoing: `The different historical period, different cultural background, different state of mind, even the way people
 use the taste is sweet, sweet is different, the effect also different. Fragrance is subtle,  `,
            time: '2016-10-14 08:00',
            click: '9999人浏览',
            src: '/public/images/M_18.jpg'
        },
        {
            id: '4',
            titletu: '/public/images/q1.png',
            titlechina: '香道讲座',
            titleenglish: 'incense lore',
            tiaozhuan: `有些香品是按照特定的香方，彩多种香料制成，所以多有自己独特的名称。而且单从其名称
上，大都看不出所用原料升香味的特征。`,
            tiaoing: `Some sweet incense is in a particular party, color made from a variety of spices, so many have their own u
nique name. And most of single from its name, can't see the characteristics of the ...`,
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