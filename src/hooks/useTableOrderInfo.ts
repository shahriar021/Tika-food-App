
const useTableOrderInfo=(info,cId)=>{
     const waiters=info?.data?.waiters
     const foodCategory=info?.data.categories
     const customers=info?.data.guests
     let foods;
     if(cId){
      foods= info?.data?.products.filter((item)=>item.category_id==cId)}

    return {waiters,foodCategory,foods,customers}
}

export default useTableOrderInfo;