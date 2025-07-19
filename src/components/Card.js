function Card() {
   return (
   <div className="card">
            <div className="favorite">
            <img src="/img/sneakers/heart0.svg" alt="Unliked"></img>
            </div>
         <img width={133} height={112} src="/img/sneakers/cross 1.jpg" alt= ""></img>
         <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
         <div className="d-flex jusify-between align-center">
            <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>12 999 руб.</b>
            </div>
            <button className="button ml-25">
            <img width={11} height={11} src="/img/plus.svg" alt="Plus"></img>
            </button>
         </div>
      </div>
   );
}

export default Card