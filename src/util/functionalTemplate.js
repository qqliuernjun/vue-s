/**
 *@author       刘文军
 *@date         2019/5/31 14:38
 *@Copyright    天源迪科信息技术股份有限公司
 *@Description
 */

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
        }
    },
    render:(h,ctx)=>{
        console.log(ctx);
        return h(ctx.props.type,{
            ...ctx.props,
            ...ctx.data
        })
    }
}
