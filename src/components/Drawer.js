import React from "react";
import Info from "./Info";
import { AppContext } from '../App';
import axios from "axios";

function Drawer ({ onClose, onRemove, items = []}) {
  const {cartItems, setCartItems} = React.useContext(AppContext);
  const[isOrderComplete, setIsOrderComplete] = React.useState(false);
  const[orderId, setOrderId] = React.useState(null);
  
  const onClickOrder = async () => {
    try{
    const{ data } = await axios.post('https://688743f3071f195ca97ffe5d.mockapi.io/orders', 
      {items: cartItems
      })
    setOrderId(data.id);
    setIsOrderComplete(true);
    setCartItems([])
    } catch (error) {
      alert('Не удалось создать заказ!');
    }
  };


  return (
        <div className="overlay">
          <div className="drawer">
          <h2 className="d-flex justify-between mb-30 mr-15">Корзина
            <img onClick={onClose} className="removeBtn cu-p" src="/img/sneakers/button3.svg"></img>
          </h2>
          
          {
            items.length > 0 ? (
              <div className="d-flex flex-column">
                <div className="items"> 
            {items.map((obj) => (
          <div key={obj.id} className="cartItem d-flex align-center mr-15">
            <img src={obj.imageUrl} className='img1'/>
            <div className="mr-20 flex">
              <p className="mb-5">{obj.name}</p>
              <b>{obj.price} руб.</b>
            </div>
            <img onClick={() => onRemove(obj.id)}className="removeBtn"src="/img/sneakers/button3.svg"></img>
          </div>
            ))}
          </div>
          <div>
              <ul className="cartTotalBlock">
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>21 498 руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>1074 руб.</b>
                </li>
              </ul>
              <button onClick={onClickOrder} className="btn">Оформить заказ<img src="/img/sneakers/arrow.svg" alt="Arrow"></img></button>
            </div>
              </div>
            ):
              <Info title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"} 
              description= {isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ"} 
              imageUrl={isOrderComplete ? "/img/sneakers/complete-order.jpg" : "/img/sneakers/epmty-cart.png"}
              />
          }
          
    </div>
    </div>
  );
}

export default Drawer