const React = require('react');
class WangEditor extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.editor = new window.wangEditor(this.e);
        this.editor.config.uploadImgUrl = this.props.url;
        this.editor.config.menus=$.map(wangEditor.config.menus,function (item,key) {
            if(item==='location'){
                return null;
            }
            return item;
        })
        this.editor.create();
        if(this.props.content){
            // 初始化内容
            this.editor.$txt.html(this.props.content);
        }
    }


    render() {
        return (
            <div>
                <div ref={(el)=>{this.e=el}} style={this.props.style}></div>
                <div style={{width:200,height:20,background:'#2b26dd',margin:'20px auto',textAlign:'center',color:'#fff'}} onClick={()=>{this.props.save(this.editor.$txt.html())}}>点击获取内容</div>
            </div>
        );
    }
}
exports.WangEditor=WangEditor;