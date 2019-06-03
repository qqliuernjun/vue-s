/**
 *@author       刘文军
 *@date         2019/5/31 14:38
 *@Copyright    天源迪科信息技术股份有限公司
 *@Description
 */
function ChildNodes(h,ctx){
    let child=ctx.props.children;
    if(child&&child.childType){
        return child.childData.map(item=>{
            return h(child.childType,{
                props:item
            })
        })
    }
    return []
}
export default {
    functional:true,
    props:{
        type:{
            type:String,
            default:''
        },
        on:{
            type:Object,
            default(){
                return {}
            }
        },
        children:{
            type:Object,
            default() {
                return {}
            }
        }
    },
    render:(h,ctx)=>{
        console.log(ctx);
        let props=_.assign({},ctx.props),
            data=_.assign({},ctx.data);
        return h(ctx.props.type,{
            ...(_.merge(props,data))
        },ChildNodes(h,ctx))
    }
}
