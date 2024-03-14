import { createSlice } from "@reduxjs/toolkit";


const initialState={status:"logout",notification:null}
const ui=createSlice({
    name:"ui",
    initialState,
    reducers:{
        logOut(state){
           return {...state,status: "hide" }
        },
        logIn(state){
            return  {...state,status: "show"}
        },
        showNotifications(state,action){
            return {
             ...state,
             notification:{
                status:action.payload.status,
                title:action.payload.title,
                message:action.payload.message
             }
            }
        },
        replaceCart(state,action){
          state.items=action.payload.items
        }
    }
})


export const fetchData=()=>{

 return async (dispatch)=>{
    const getData=async ()=>{

        
        const response=await fetch('https://redux-35f03-default-rtdb.firebaseio.com/cart.json')
        if(!response.ok){
            throw new Error('something went wrong')
        }
        return response.json()

    }


    try{
      const items=await getData()
      dispatch(ui.actions.replaceCart({items}))
    }
    catch(error){
        dispatch(showNotifications({
            status:'error',
            title:'ERROR!',
            message:'fetching data data failed'
           }))
    }
 }
   

} 


export const sendCartData= (items)=>{

    return  async (dispatch)=>{
console.log('in rreturnung')
        dispatch(ui.actions.showNotifications(
            {
                status:'pending',
                title:'sending...',
                message:'sending cart data'
               }))
try{
       await sendRequest(items)
               dispatch(showNotifications({
                status:'success',
                title:'SUCCESS!',
                message:'Sent Cart Data successfully'
               }))}
               catch(error){
                dispatch(showNotifications({
                    status:'error',
                    title:'ERROR!',
                    message:'Sending cart data failed'
                   }))}
               }
              
    }


export const  sendRequest= async (items)=>{
    const response=await fetch('https://redux-35f03-default-rtdb.firebaseio.com/cart.json',{
        method:'PUT',
        body:JSON.stringify(items)
      })
      if(!response.ok){
      throw new Error('Sending cart data failed')
      }
      
}
export const {logOut,logIn,showNotifications} =ui.actions
export const authReducers=ui.reducer