import Card from '../UI/Card';
import {  useSelector } from 'react-redux';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const {items}=useSelector(state=>state.cart)

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.length>0 &&  items.map((item)=><CartItem key={item.id}
          item={{ title:item.title, quantity:item.quantity , total: item.quantity*item.price, price: item.price ,id:item.id }}
        />)
        }
      </ul>
    </Card>
  );
};

export default Cart;
