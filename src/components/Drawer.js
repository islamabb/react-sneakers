function Drawer () {
  return (
    <div className="drawer">
          <h2 className="d-flex justify-between mb-30 mr-15">Корзина
            <img className="removeBtn cu-p" src="/img/sneakers/button3.svg"></img>
          </h2>
          <div style={{flex:1}}> 
          <div className="cartItem d-flex align-center mr-15 mb-20">
            <img className="mr-20"src="/img/sneakers/cross 1.jpg" alt="Sneakers" width={70} height={70}></img>
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" src="/img/sneakers/button3.svg"></img>
          </div>
          <div className="cartItem d-flex align-center mr-15">
            <img className="mr-20"src="/img/sneakers/cross 1.jpg" alt="Sneakers" width={70} height={70}></img>
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn"src="/img/sneakers/button3.svg"></img>
          </div>
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
  );
}

export default Drawer