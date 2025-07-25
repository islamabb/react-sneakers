function Drawer ({ onClose, onRemove, items = [] }) {
  return (
        <div className="overlay">
          <div className="drawer">
          <h2 className="d-flex justify-between mb-30 mr-15">Корзина
            <img onClick={onClose} className="removeBtn cu-p" src="/img/sneakers/button3.svg"></img>
          </h2>

          

          {
            items.length > 0 ? (
              <div>
                <div className="items"> 
            {items.map((obj) => (
          <div className="cartItem d-flex align-center mr-15">
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
              <button className="btn">Оформить заказ<img src="/img/sneakers/arrow.svg" alt="Arrow"></img></button>
            </div>
              </div>
            ): <div className="cartEmpty d-flex align-center justify-center flex-column flex"> 
            <img className="mb=20" width={120} height={120} src="/img/sneakers/epmty-cart.png" alt="123"></img>
            <h2>Корзина пустая</h2>
            <p className="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ</p>
            <button onClick={onClose} className="greenButton">
              <img src="/img/sneakers/arrow.svg" alt="Arrow"/>Вернуться назад
            </button>
          </div>
          }

          
    </div>
    </div>
  );
}

export default Drawer