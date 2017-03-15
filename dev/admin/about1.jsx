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
        var url="/admin/about_all"
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
                this.setState((ps)=>({data:[{about_id:data,about_china:this.china.value,about_english:this.english.value,about_url:'t_bg01.png'}].concat(ps.data)}))
            }
        })
    }
    del(id){
        fetch(`/admin/min/del/${id}`,{credentials: 'same-origin'})
            .then((res)=>res.json()).then((data)=>{
            if(data){
                this.setState((ps)=>({data:ps.data.filter((v)=> v.about_id!=id)}));
            }
        })
    }
    change(obj){
        const aa=obj.parentNode.parentNode;
            const values={about_id:aa.id,about_china:obj.value};
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
                        if(v.about_id==values.about_id){
                            v.about_china=values.about_china;
                        }
                        return v;
                    })}));
                }
            })
    }
    changea(obj){
        const aa=obj.parentNode.parentNode;
        const values={about_id:aa.id,about_english:obj.value};
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
                    if(v.about_id==values.about_id){
                        v.about_english=values.about_english;
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
                    <img alt="example" width="100%" src={`/public/images/${v.about_url}`} />
                </div>
                <div className="custom-card" id={v.about_id}>
                    <h3>
                        <input style={{border:0,outline:'none'}} ref={(el)=>{this.china=el}}  onChange={(e)=>this.change(e.currentTarget)} name="about_china" type="text" value={v.about_china}/>
                    </h3>
                    <p>
                        <input style={{border:0,outline:'none'}} ref={(el)=>{this.english=el}} onChange={(e)=>this.changea(e.currentTarget)} name="about_english" type="text" value={v.about_english}/>
                    </p>
                    <Button style={{width:'100%'}} type="default" onClick={()=>this.del(v.about_id)}>
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

