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
var t_bread=[{name:"首页",font:">",href:'/index'},{name:"培训课程",font:">",href:'/class'},{name:"插花",href:'/class/2'}];
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
    {id: '2', china: '插花', english: 'Flower arranging',href:'/class/2'}
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
            titlechina: '插花讲座',
            titleenglish: 'FLOWER ARRANGING',
            biaoti:'一件成功的插花作品',
            tiaozhuan: `在我国插花的历史源远流长，发展至今已为人们日常生活所不可缺少。一件成功的插花作品，并不是一定要选用名贵的花材、高价的花器。一般看来并不起眼的绿叶一个花蕾，甚至路边的野花野草常见的水果、蔬菜，都能插出一件令人赏心悦目的优秀作品来。使观赏者在心灵上产生共鸣的是创作者唯一的目的，如果不能产生共鸣，那么这件作品也就失击了观赏价值。`,
            tiaoing: `In our country has a long history of flower arrangement, development has been indispensable to People's Daily life. A successful flower arrangement, not must choose expensive flowers of flowers, a high price. General opinion and a small green bud, wild weed even common fruits, vegetables, can put out a pleasing to the outstanding works. Make viewer resonate on the mind is the sole purpose of creators, if can't resonate, so this work will lose the ornamental value `,
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