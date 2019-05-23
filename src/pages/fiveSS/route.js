const fiveSS =()=>import('./five');
const six =()=>import('./six');
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
    }
]
