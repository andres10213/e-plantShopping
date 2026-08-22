import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // 2. Manejador para continuar comprando (regresar al catálogo de plantas)
  const handleContinueShopping = (e) => {
    e.preventDefault();
    onContinueShopping(e);
  };

  // 3. Incrementar la cantidad de un tipo de planta en 1
 const handleIncrement = (item) => {
    // Despacha updateQuantity sumando 1 a la cantidad actual
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    // Si la cantidad es mayor a 1, simplemente resta 1
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      // De lo contrario (si es 1 y se resta, quedaría en 0), elimina el artículo por completo
      dispatch(removeItem(item.name));
    }
  };

  // 5. Eliminar un tipo de planta por completo del carrito
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // 6. Calcular el subtotal para un tipo específico de planta según su cantidad
  const calculateTotalCost = (item) => {
    const itemCost = parseFloat(item.cost.substring(1));
    return itemCost * item.quantity;
  };
  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let total = 0; // Inicializa la variable total
    
    cart.forEach((item) => { // Itera sobre el array cart
      // Convierte la cadena cost a número usando substring(1) y multiplica por la cantidad
      const itemCost = parseFloat(item.cost.substring(1));
      const subtotal = itemCost * item.quantity;
      
      // Agrega el valor resultante a total
      total += subtotal; 
    });
    const calculateTotalCost = (item) => {
    const itemCost = parseFloat(item.cost.substring(1));
    return itemCost * item.quantity;
  };
    return total; // Devuelve la suma final
  };
  
  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1">Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;