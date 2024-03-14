import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { logIn, logOut } from '../../store/ui-slice';

const CartButton = (props) => {
  const {items}=useSelector(state=>state.cart)
  const {status}=useSelector(state=>state.ui)
  const dispatch = useDispatch()
  console.log(items,'in cart')
  return (
    <button className={classes.button} onClick={()=>{
    status==="show"?dispatch(logOut()): dispatch(logIn())
    }}>
      <span>My Cart</span>
      <span className={classes.badge}>{items.length}</span>
    </button>
  );
};

export default CartButton;
