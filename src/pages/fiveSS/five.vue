<template>
    <div>
        <a @click="link">link</a>
    </div>
</template>

<script>
    function typeOf(obj) {
        const toString = Object.prototype.toString;
        const map = {
            '[object Boolean]'  : 'boolean',
            '[object Number]'   : 'number',
            '[object String]'   : 'string',
            '[object Function]' : 'function',
            '[object Array]'    : 'array',
            '[object Date]'     : 'date',
            '[object RegExp]'   : 'regExp',
            '[object Undefined]': 'undefined',
            '[object Null]'     : 'null',
            '[object Object]'   : 'object'
        };
        return map[toString.call(obj)];
    }
    function deepCopy(data) {
        const t = typeOf(data);
        let o;

        if (t === 'array') {
            o = [];
        } else if ( t === 'object') {
            o = {};
        } else {
            return data;
        }

        if (t === 'array') {
            for (let i = 0; i < data.length; i++) {
                o.push(deepCopy(data[i]));
            }
        } else if ( t === 'object') {
            for (let i in data) {
                o[i] = deepCopy(data[i]);
            }
        }
        return o;
    }
    export default {
        name:"five",
        data(){
            return {
                
            }
        },
        methods:{
            link(){
                window.open("https://www.cnblogs.com/momo798/p/6025777.html");
            }
        },
        mounted(){
            var a=[1,2,3]
            var b=deepCopy(a);
            a.push(4);
            console.log(a);
            console.log(b);
        }
    }
</script>
