const test =()=>import('./test');
const functionalPra =()=>import('./functionalPra');
export default [
    {
      path:'/test',
      name:'test',
      component:test
    },
    {
      path:'/functionalPra',
      name:'functionalPra',
      component:functionalPra
    }
]
