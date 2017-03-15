const React=require("react");
const ReactDOM=require("react-dom");
const Navbox=require('./nav.jsx');
import { Card } from 'antd';
import { Button,Icon } from 'antd';
class Page extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        var url="/admin/class"
        fetch(url,{
            credentials:"same-origin"
        }).then((res)=>res.json())
            .then((data)=>{
                this.setState({
                    data:data
                })
            })
    }
    render(){
        const cards=this.state.data.map((v,i)=>
            <Card style={{ width: 240 ,float:'left',padding:20,margin:30}} bodyStyle={{ padding: 0 }} key={i}>
                <div className="custom-image">
                    <img alt="example" width="100%" src={`/public/images/${v.about_url}`} />
                </div>
                <div className="custom-card">
                    <h3><input style={{border:0,outline:'none'}} type="text" value={v.about_china}/></h3>
                    <p><input style={{border:0,outline:'none'}} type="text" value={v.about_english}/></p>
                    <Button style={{width:'100%'}} type="default"><Icon type="delete" /></Button>
                </div>
            </Card>
        )
        return (
            <div>
                <Button style={{width:'100%'}} type="dashed"><Icon type="plus" /></Button>
                {cards}
            </div>
        )
    }
}
ReactDOM.render(
    <Navbox.Nav>
        <Page />
    </Navbox.Nav>,document.querySelector("#page")
)