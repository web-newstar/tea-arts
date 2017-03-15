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
            titlechina: '香道讲座',
            titleenglish: 'CHINESE ZITHER',
            tiaozhuan: `古琴是中华文化中地位最崇高的乐器，自古“琴”为其特指，20世纪20年代为与钢琴区分改
称古琴。琴有“士无故不撤琴瑟”和“左琴右书”之说。`,
            tiaoing: `Guqin is the most lofty status in the Chinese culture of musical instrument, "jean" since ancient times fo
r its particular, in the 1920 s to distinguish and piano as guqin. Jean has "and not a cause `,
            time: '2016-10-14 08:00',
            click: '9999人浏览',
            src: '/public/images/M_11.png'
        },
        {
            id: '2',
            titletu: '/public/images/q1.png',
            titlechina: '古琴讲座',
            titleenglish: 'CHINESE ZITHER',
            tiaozhuan: `中国古琴的音域为四个八度零两个音。有散音七个、泛音九十一个、按音一百四十七个。古
琴的声音是非常独特的，一般人听琴乐能感到古琴的安静悠远。`,
            tiaoing: `Chinese guqin compass into four degrees and two tone. There are scattered sound seven, harmonics,
ninety-one, in one hundred and forty-seven. Guqin's voice is very unique, `,
            time: '2016-10-14 08:00',
            click: '9999人浏览',
            src: '/public/images/M_12.jpg'
        },
        {
            id: '3',
            titletu: '/public/images/q1.png',
            titlechina: '古琴讲座',
            titleenglish: 'CHINESE ZITHER',
            tiaozhuan: `古琴的右手弹弦亦有手指之别与指背甲弹与指面肉弹之别。右手的弹弦是由大指、食指、中
指和名指承担的。一般说来，大指与中指力度较强，食指与名指较弱.`,
            tiaoing: `Guqin right hand play string also have fingers don't and carapace play and refers to the surface of suicide
 bombers. The right hand to the elastic string is borne by the thumb and forefinger, `,
            time: '2016-10-14 08:00',
            click: '9999人浏览',
            src: '/public/images/M_13.jpg'
        },
        {
            id: '4',
            titletu: '/public/images/q1.png',
            titlechina: '古琴讲座',
            titleenglish: 'CHINESE ZITHER',
            tiaozhuan: `古琴发音的张力除了来自左右手的技法与使用的力量外，还有一个因素，就是左手运指的速
度。一般来说，速度越快便越见力度，反之，则越是松弛。`,
            tiaoing: `The tension of guqin pronunciation except from both technique and the use of force, there is another fac
tor that is left hand refers to the speed of the shipment. In general, the faster it sees more,`,
            time: '2016-10-14 08:00',
            click: '9999人浏览',
            src: '/public/images/M_14.jpg'
        }
    ]
    ;
ReactDOM.render(<Q_value Q_list={Q_list}/>, document.getElementById("Q_left"));
//ReactDOM.render(<Q_title Q_tea={Q_tea}/>, document.getElementById("Q_right"));

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