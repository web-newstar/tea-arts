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
    {id:2,title:"关于茗悦",img:"/public/images/zt_6_03.jpg",http:"/index/t_two"},
    {id:3,title:"最新动态",img:"/public/images/zt_7_03.jpg",http:"/index/y_two"},
    {id:4,title:"培训课程",img:"/public/images/zt_9_03.jpg",http:"/index/Q_two"},
    {id:5,title:"讲座表演",img:"/public/images/zt_8_03.jpg",http:"/index/Q_two"},
    {id:6,title:"茶学堂",img:"/public/images/zt_10_03.jpg",http:"/index/l_two"},
    {id:7,title:"联系我们",img:"/public/images/zt_11_03.jpg",http:"/index/t_content"}
]
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
    "t_minbanner.png"
];
ReactDOM.render(<Q_banner />, document.getElementById('Q_banner'));
//面包屑
var t_bread=[{name:"首页",font:">"},{name:"培训课程"}];
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
                <common.T_tea T_tea={T_tea}/>

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
    {id: '1', china: '企业简介', english: 'Company profile'},
    {id: '2', china: '学院风采', english: 'Academy style'},
    {id: '3', china: '合作加盟', english: 'Cooperative '},
    {id: '4', china: '企业招聘', english: 'recruitment'}
];

//二级页面右边内容一
const Q_tea = [
        {
            id: '1',
            titletu: '../public/images/q1.png',
            titlechina: '企业简介',
            titleenglish: 'Company profile',
            tiaozhuan: `当传统脱下古装，当文化穿越回最初。一场千年而就的邂逅，见证还是参与？
这是一个问题......`,
            tiaoing: `When the traditional take off the costume, when the culture back to the original.
A thousand years of encounter, witness or participate?This is a question.`,
            time: '2016-10-14 08:00',
            click: '9999人浏览',
            src: '../public/images/t_two1.png'
        }
    ];
//二级页面右边内容二
const T_tea=[{tit:"当代专业的艺术文化产业传播机构，根植于东方传统美学",
    tittwo:"Contemporary professional arts and cultural industry communication institutions.",
    china:"茗悦国艺于2009年成立，主要致力于中国茶文化及相关产品的生成及推广，旗下拥有茗悦茶艺培训中心、从前慢手工茶器、茶空间设计中心等产业机构。除了与茶相关的茶艺培训、茶艺讲座、茶艺表演及相关茶产品，茗悦还拥有古琴、香道、花道、书法等传统文化系列课程培训。优越的学习环境、强大的师资团队、专业的服务理念，在整个行业内堪称典范；专业、高效、热情的做人做事宗旨，更为茗悦在业内和消费者之间树立了良好口碑。不懈的努力是对文化的专注，严苛的自我要求是对您的负责。",
    english:"Ming Yue's art was established in 2009, mainly engaged in China generation and promotion of tea culture and related products, owns the Ming Yue tea training center, handmade tea, tea was slow space design center industry organization. In addition to the tea tea, tea related training seminars, tea ceremony and tea products, Ming Yue also has the guqin, incense, Ikebana, calligraphy and other traditional culture training. Excellent learning environment, strong team of teachers, professional service concept, in the entire industry exemplary; professional and efficient, enthusiastic person to work for the purpose, Ming Yue between the industry and consumers establish a good reputation. Unremitting efforts are the focus of culture, demanding self responsibility is responsible for you."
},
    {tit:"拥有几千年历史根基的中国茶文化，深谙茶道的同时更关注当代茶人的现实需求",
        tittwo:"Thousands of years of history of the foundation of Chinese well versed in tea culture, tea ceremony atthe same time pay more attention to the realistic demand of contemporary tea",
        china:"茶道。作为一个有着五千年文化渊源的泱泱大国，从古至今，国人对传统茶道的深厚情愫始终未减。茗悦立足拥有几千年历史根基的中国茶文化，深谙茶道的同时更关注当代茶人的现实需求。茗悦人懂茶、爱茶、品茶、识茶，他们以满腔热情认真地做着和“茶”相关的事，默默奉献并乐在其中。昔日“陆放翁晴窗戏分茶”，“贾宝玉品茶栊翠庵”；今天，茗悦则选择了从现实的角度出发，重新对茶进行定义、研究、品鉴、赏味，以求真正领会、融通普悦“茶人合一，法道自然”的深远内涵。我们希望，在普悦身上，令国人骄傲的茶文化能焕发出新的生机，让更多人品悟到代表中国的经典味道。",
        english:'The tea ceremony. As a great country, five thousand years of cultural origins from ancient times, deep feelings of traditional Chinese tea ceremony has not reduced. Ming Yue has a history of thousands of years based on the foundation of the China well versed in tea culture, tea ceremony at the same time pay more attention to the realistic demand of contemporary tea. Ming Yue people understand tea, love tea, tea, tea in general, their enthusiasm seriously doing and "tea" related things, dedication and happiness within. The former "Lu you show clear - Windows tea", "tea Jia Baoyu cage jade Temple"; today, Ming Yue chose from a practical point of view, to define and study, tea tasting, tasting, in order to truly understand the financing, Hiroetsu "tea one, profound connotation of natural law". We hope that, in the General Yue body, so that people proud of the tea culture can radiate new vitality, so that more people to understand the character of the representative of the classic taste of china.'
    },
    {tit:"当代专业的艺术文化产业传播机构，根植于东方传统美学",
        tittwo:"Contemporary professional arts and cultural industry communication institutions.",
        china:"茗悦国艺于2009年成立，主要致力于中国茶文化及相关产品的生成及推广，旗下拥有茗悦茶艺培训中心、从前慢手工茶器、茶空间设计中心等产业机构。除了与茶相关的茶艺培训、茶艺讲座、茶艺表演及相关茶产品，茗悦还拥有古琴、香道、花道、书法等传统文化系列课程培训。优越的学习环境、强大的师资团队、专业的服务理念，在整个行业内堪称典范；专业、高效、热情的做人做事宗旨，更为茗悦在业内和消费者之间树立了良好口碑。不懈的努力是对文化的专注，严苛的自我要求是对您的负责。",
        english:"Ming Yue's art was established in 2009, mainly engaged in China generation and promotion of tea culture and related products, owns the Ming Yue tea training center, handmade tea, tea was slow space design center industry organization. In addition to the tea tea, tea related training seminars, tea ceremony and tea products, Ming Yue also has the guqin, incense, Ikebana, calligraphy and other traditional culture training. Excellent learning environment, strong team of teachers, professional service concept, in the entire industry exemplary; professional and efficient, enthusiastic person to work for the purpose, Ming Yue between the industry and consumers establish a good reputation. Unremitting efforts are the focus of culture, demanding self responsibility is responsible for you."
    }
]
ReactDOM.render(<Q_value Q_list={Q_list}/>, document.getElementById("Q_left"));
//ReactDOM.render(<Q_title Q_tea={Q_tea}/>, document.getElementById("Q_right"));