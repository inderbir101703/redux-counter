import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Notification from './components/UI/Notification';
import { fetchData, sendCartData, sendRequest, showNotifications } from './store/ui-slice';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';

let isInitial=true;
function App() {
  const dispatch=useDispatch()
  const {status,notification}=useSelector((state)=>state.ui)
  const {items}=useSelector((state)=>state.cart)

 useEffect(()=>{
dispatch(fetchData())
 },[dispatch])

  useEffect(()=>{
  if(isInitial){
  isInitial=false
  return
 }

 console.log('about to enter dipatch')
//redux toolkit also diaptch functions as actions as well here sendcardData return a function
dispatch(sendCartData(items))

  },[items,dispatch])
  return (
 <>
  {notification &&  <Notification 
  status={notification.status} 
  title={notification.title} 
  message={notification.message}/>}
    <Layout>

      {status==="show" && <Cart />}
      <Products />
    </Layout>
    </>
    
  );
}

export default App;
