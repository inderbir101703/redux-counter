import { createSlice } from "@reduxjs/toolkit";



const initialState={
    totalItems:0,
    items:[]
}
const cartStore=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state,action){
            console.log(state.items,action)
            const repeated=state.items.findIndex((element)=>element.id===action.payload.id)

            if(repeated>=0){
                state.items[repeated].quantity=state.items[repeated].quantity+1
               return state
            }

            return {
                totalItems:state.totalItems+1,
                items:[...state.items,{...action.payload,quantity:1}]
             }
        },
        decrement(state,action){
 const index=state.items.findIndex((item)=>item.id===action.payload.id)
   console.log('removing',index,action)
 if( state.items[index].quantity>1)
           {console.log('removing',index)
             state.items[index].quantity-=1
            return state  }
    
              

               return {
                totalItems:state.totalItems-1,
                items:state.items.filter((item)=>item.id!=action.payload.id)
             }
        }
    }
})

export const {addToCart,decrement} = cartStore.actions

export const cartReducers= cartStore.reducer