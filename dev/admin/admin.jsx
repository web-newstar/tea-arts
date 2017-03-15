const React=require("react")
const ReactDOM=require("react-dom")
const Navbox=require("./nav.jsx")
import { Card,Icon } from 'antd';
import { Button } from 'antd';
class Page extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
        this.add=this.add.bind(this);
        this.del=this.del.bind(this);

    }
    componentDidMount(){
        var url="/admin/banner_all"
        fetch(url,{
            credentials:"same-origin"
        }).then((res)=>res.json())
            .then((data)=>{
                this.setState({
                    data:data
                })
            })
    }
    add(e){
        fetch('/admin/banner/add',{credentials:'same-origin'}).then((res)=>res.json()).then((data)=>{
            if(data){
                this.setState((ps)=>({data:[{ban_img:'lt_1.png'}].concat(ps.data)}))
            }
        })
    }
    del(id){
        fetch(`/admin/banner/del/${id}`,{credentials: 'same-origin'})
            .then((res)=>res.json()).then((data)=>{
            if(data){
                this.setState((ps)=>({data:ps.data.filter((v)=> v.ban_id!=id)}));
            }
        })
    }
    render(){
        const banner=this.state.data.map((v,i)=>
            <Card style={{ width: 240 ,float:'left',padding:20,margin:30}} bodyStyle={{ padding: 0 }} key={i}>
                <div className="custom-image">
                    <img alt="example" width="100%" src={`/public/images/${v.ban_img}`} />
                </div>
                <div className="custom-card" onClick={()=>this.del(v.ban_id)}>
                    <Button style={{width:'100%'}} type="default"><Icon type="delete"/></Button>
                </div>
            </Card>
        )
        return (
            <div>
                <Button style={{width:'100%'}} type="dashed" onClick={this.add}>点击添加一张banner图</Button>
                {banner}
            </div>

        )
    }
}
ReactDOM.render(
    <Navbox.Nav>
        <Page></Page>
    </Navbox.Nav>,document.querySelector("#page")
)