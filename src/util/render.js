export default {
    name: 'render',
    functional: true,
    props: {
        render: Function,
        data:{
            type:Array,
            default(){
                return []
            }
        }
    },
    render: (h, ctx) => {
        return ctx.props.render(h,{val:'被渲染出来的',data:ctx.props.data});
    }
};
