const React=require("react")
const ReactDOM=require("react-dom")
const Navbox=require("./nav.jsx")
import { Card } from 'antd';
import { Button,Icon } from 'antd';
class Page extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
        this.add=this.add.bind(this);
        this.del=this.del.bind(this);
        this.change=this.change.bind(this);
        this.changea=this.changea.bind(this);
    }
    componentDidMount(){
        var url="/admin/school_all"
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
        fetch('/admin/min/add',{credentials:'same-origin'}).then((res)=>res.json()).then((data)=>{
            if(data){
                this.setState((ps)=>({data:[{cat_id:data,cat_china:this.china.value,cat_english:this.english.value,cat_url:'t_bg01.png'}].concat(ps.data)}))
            }
        })
    }

    del(id){
        fetch(`/admin/min/del/${id}`,{credentials: 'same-origin'})
            .then((res)=>res.json()).then((data)=>{
            if(data){
                this.setState((ps)=>({data:ps.data.filter((v)=> v.cat_id!=id)}));
            }
        })
    }
    change(obj){
        const aa=obj.parentNode.parentNode;
        const values={cat_id:aa.id,cat_china:obj.value};
        fetch('/admin/min/update',{
            credentials: 'same-origin',
            method:'post',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(values)})
            .then((res)=>res.json()).then((data)=>{
            if(data){
                this.setState((ps)=>({data:ps.data.map((v)=>{
                    if(v.cat_id==values.cat_id){
                        v.cat_china=values.cat_china;
                    }
                    return v;
                })}));
            }
        })
    }
    changea(obj){
        const aa=obj.parentNode.parentNode;
        const values={cat_id:aa.id,cat_english:obj.value};
        fetch('/admin/min/update',{
            credentials: 'same-origin',
            method:'post',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(values)})
            .then((res)=>res.json()).then((data)=>{
            if(data){
                this.setState((ps)=>({data:ps.data.map((v)=>{
                    if(v.cat_id==values.cat_id){
                        v.cat_english=values.cat_english;
                    }
                    return v;
                })}));
            }
        })
    }
    render(){
        const cards=this.state.data.map((v,i)=>
            <Card style={{ width: 240 ,float:'left',padding:20,margin:30}} bodyStyle={{ padding: 0 }} key={i}>
                <div className="custom-image">
                    <img alt="example" width="100%" src={`/public/images/${v.cat_url}`} />
                </div>
                <div className="custom-card" id={v.cat_id}>
                    <h3>
                        <input style={{border:0,outline:'none'}} ref={(el)=>{this.china=el}}  onChange={(e)=>this.change(e.currentTarget)} name="cat_china" type="text" value={v.cat_china}/>
                    </h3>
                    <p>
                        <input style={{border:0,outline:'none'}} ref={(el)=>{this.english=el}} onChange={(e)=>this.changea(e.currentTarget)} name="cat_english" type="text" value={v.cat_english}/>
                    </p>
                    <Button style={{width:'100%'}} type="default" onClick={()=>this.del(v.cat_id)}>
                        <Icon type="delete" />
                    </Button>
                </div>
            </Card>
        )
        return (
            <div>
                <Button style={{width:'100%'}} type="dashed" onClick={this.add}><Icon type="plus" /></Button>
                {cards}
            </div>
        )
    }
}
ReactDOM.render(
    <Navbox.Nav>
        <Page></Page>
    </Navbox.Nav>,document.querySelector("#page")
)

