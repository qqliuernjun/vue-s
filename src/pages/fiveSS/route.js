const fiveSS =()=>import('./five');
const six =()=>import('./six');
const seven =()=>import('./seven');
export default [
    {
        path:'/fiveSS',
        name:'fiveSS',
        component:fiveSS
    },
    {
        path:'/six',
        name:'six',
        component:six
    },
    {
        path:'/seven',
        name:'seven',
        component:seven
    }
]
