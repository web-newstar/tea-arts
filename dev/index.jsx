var React=require('react');
var ReactDOM=require('react-dom');
const common=require("./common.jsx");
class Header extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            index:0,
            banner:[]
        }

    }
    componentDidMount(){
        var url="/banner_all"
        fetch(url,{
            credentials:"same-origin"
        }).then((res)=>res.json())
            .then((data)=>{
                this.setState({
                    banner:data
                })

            })
    }
    render(){
        return (
            <div>
                {<common.Ztnav zt_nav={zt_nav}/>}
                <div className="lt_banner">
                    <ul className="lt_center">
                        <li className="banner">
                            {this.state.banner.map((v,i)=><div key={i} style={{backgroundImage:`url(/public/images/${v.ban_img})`,opacity:(i===this.state.index)?1:0}}></div>)}
                        </li>
                        <li className="tea">
                            <div className="ask"></div>
                        </li>
                        <li className="yellow"></li>
                        <li className="go"></li>
                        <li className="next" onClick={()=>{this.setState({index:(this.state.index+1>2)?0:(this.state.index+1)})}}></li>

                    </ul>
                </div>
                {<common.T_tit t_tit={t_tit}/>}
                {<common.Lj_news lj_news={lj_news}>
                    <common.M_dongTai m_dongtai={m_dongtai}/>
                </common.Lj_news>}
                {<common.T_tit t_tit={t_tit2}/>}
                {<common.Lt_video lt_video={lt_video}/>}
                {<common.T_tit t_tit={t_tit3}/>}
                {<common.Q_students q_student={q_student}/>}
                {<common.T_tit t_tit={t_tit4}/>}
                {<common.T_course t_course={t_course}/>}

            </div>
        )
    }
}
//banner部分
var lt_banner=[
    {id:1,back:"/public/images/lt_1.png"},
    {id:2,back:"/public/images/lt_2.png"},
    {id:3,back:"/public/images/lt_3.png"}
]
//培训课程
const q_student=[
    {id:1,src:"/public/images/Q-2_03.png"},
    {id:2,src:"/public/images/q_4_03.png"},
    {id:3,src:"/public/images/Q-5_03.png"},
    {id:4,src:"/public/images/Q-7_07.png"},
    {id:5,src:"/public/images/Q-3_03.png"},
    {id:6,src:"/public/images/茗悦首页_03.png"},
    {id:7,src:"/public/images/q-6_03.png"}
];
//导航
var zt_nav=[
    {id:1,title:"首页",img:"/public/images/zt_5_03.jpg",http:"/index"},
    {id:2,title:"关于茗悦",img:"/public/images/zt_6_03.jpg",http:"/about"},
    {id:3,title:"最新动态",img:"/public/images/zt_7_03.jpg",http:"/new"},
    {id:4,title:"培训课程",img:"/public/images/zt_9_03.jpg",http:"/class"},
    {id:5,title:"讲座表演",img:"/public/images/zt_8_03.jpg",http:"/perform"},
    {id:6,title:"茶学堂",img:"/public/images/zt_10_03.jpg",http:"/school"},
    {id:7,title:"联系我们",img:"/public/images/zt_11_03.jpg",http:"/contact"}
]
//教学表演
var lt_video=[
    {id:1,from:"/public/video/1.mp4",back:"/public/images/zt_sp.jpg"}
]
//最新动态
var lj_news=[
    {id:1,time:"2016.10",title:[{id:"15萌童穿汉服学茶",img:"/public/images/zt_3_02.jpg",express:"今日，横岗街道怡景社区举行了一场社民大盆菜之礼。。"},{id:"旅游法又出新规",img:"/public/images/zt_3_03.jpg",express:"今日，横岗街道怡景社区举行了一场社民大盆菜之礼。。"},{id:"国外游火遍中华双十一又创新高",img:"/public/images/zt_3_01.jpg",express:"今日，横岗街道怡景社区举行了一场社民大盆菜之礼。。"}]},
    {id:2,time:"2016.10",title:[{id:"15萌童穿汉服学茶",img:"/public/images/zt_3_02.jpg",express:"今日，横岗街道怡景社区举行了一场社民大盆菜之礼。。"},{id:"旅游法又出新规",img:"/public/images/zt_3_03.jpg",express:"今日，横岗街道怡景社区举行了一场社民大盆菜之礼。。"},{id:"国外游火遍中华双十一又创新高",img:"/public/images/zt_3_01.jpg",express:"今日，横岗街道怡景社区举行了一场社民大盆菜之礼。。"}]},
    {id:3,time:"2016.10",title:[{id:"15萌童穿汉服学茶",img:"/public/images/zt_3_02.jpg",express:"今日，横岗街道怡景社区举行了一场社民大盆菜之礼。。"},{id:"旅游法又出新规",img:"/public/images/zt_3_03.jpg",express:"今日，横岗街道怡景社区举行了一场社民大盆菜之礼。。"},{id:"国外游火遍中华双十一又创新高",img:"/public/images/zt_3_01.jpg",express:"今日，横岗街道怡景社区举行了一场社民大盆菜之礼。。"}]},
    {id:4,time:"2016.10",title:[{id:"15萌童穿汉服学茶",img:"/public/images/zt_3_02.jpg",express:"今日，横岗街道怡景社区举行了一场社民大盆菜之礼。。"},{id:"旅游法又出新规",img:"/public/images/zt_3_03.jpg",express:"今日，横岗街道怡景社区举行了一场社民大盆菜之礼。。"},{id:"国外游火遍中华双十一又创新高",img:"/public/images/zt_3_01.jpg",express:"今日，横岗街道怡景社区举行了一场社民大盆菜之礼。。"}]},
    {id:5,time:"2016.10",title:[{id:"15萌童穿汉服学茶",img:"/public/images/zt_3_02.jpg",express:"今日，横岗街道怡景社区举行了一场社民大盆菜之礼。。"},{id:"旅游法又出新规",img:"/public/images/zt_3_03.jpg",express:"今日，横岗街道怡景社区举行了一场社民大盆菜之礼。。"},{id:"国外游火遍中华双十一又创新高",img:"/public/images/zt_3_01.jpg",express:"今日，横岗街道怡景社区举行了一场社民大盆菜之礼。。"}]},
    {id:6,time:"2016.10",title:[{id:"15萌童穿汉服学茶",img:"/public/images/zt_3_02.jpg",express:"今日，横岗街道怡景社区举行了一场社民大盆菜之礼。。"},{id:"旅游法又出新规",img:"/public/images/zt_3_03.jpg",express:"今日，横岗街道怡景社区举行了一场社民大盆菜之礼。。"},{id:"国外游火遍中华双十一又创新高",img:"/public/images/zt_3_01.jpg",express:"今日，横岗街道怡景社区举行了一场社民大盆菜之礼。。"}]}

]
//培训课程
var t_course=[
    {courseName:'插画培训',tit1:'"让心语茶对语"',tit2:'相遇那个美好的自己',img:'t_img2.png',href:"/class/1"},
    {courseName:'茶艺培训',tit1:'"让心语茶对语"',tit2:'相遇那个美好的自己"',img:'t_img1.png',href:"/class/2"},
    {courseName:'香道培训',tit1:'"让心语茶对语"',tit2:'相遇那个美好的自己',img:'t_img3.png',href:"/class/3"},
    {courseName:'古琴培训',tit1:'"让心语茶对语"',tit2:'相遇那个美好的自己',img:'t_img4.png',href:"/class/4"}
];
var t_tit=[
    {tit:'最新动态',english:"t_font1.png"},
];
var t_tit2=[
    {tit:'培训课程',english:"t_font1.png"},
];
var t_tit3=[
    {tit:'讲座表演',english:"t_font1.png"},
];
var t_tit4=[
    {tit:'学员作品',english:"t_font1.png"},
];
const m_dongtai=[
    {
        id:"one",
        title:"15萌童穿汉服学茶",
        txt1:"近日，横岗街道怡锦",
        txt2:"社区党群服务中心举行了一场社区民",
        txt3:"生大盆菜之礼……",
        src:"/public/imgs/M1.png"
    },
    {
        id:"three",
        title:"15萌童穿汉服学茶",
        txt1:"近日，横岗街道怡锦",
        txt2:"社区党群服务中心举行了一场社区民",
        txt3:"生大盆菜之礼……",
        src:"/public/imgs/M3.png"
    },
    {
        id:"two",
        title:"15萌童穿汉服学茶",
        txt1:"近日，横岗街道怡锦",
        txt2:"社区党群服务中心举行了一场社区民",
        txt3:"生大盆菜之礼……",
        src:"/public/imgs/M2.png"
    }
];
//首页底部
var arr=[
    {id:1,name:'琴'},
    {id:2,name:'琴'},
    {id:3,name:'hua'}
]

var newarr=arr.map((v)=>v.name);
ReactDOM.render(<Header data={lt_banner}/>,document.getElementById("page"))

