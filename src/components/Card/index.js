import React from 'react';
import styles from './Card.module.scss';

function Card({ onFavority, imageUrl, title, price, onClickPlus }) {
   const [isAdded, setIsAdded] = React.useState(false);
   const [isFavorite, setIsFavorite] = React.useState(false);
   
   const handleClickPlus = () => {
      onClickPlus(title, imageUrl, price); 
      setIsAdded(!isAdded); 
   };
   const onClickFavority = () => {
      onFavority(title, imageUrl, price);
      setIsFavorite(!isFavorite);
   }

   return (
   <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavority}>
         <img src={isFavorite ? '/img/sneakers/heart1.svg' : '/img/sneakers/heart0.svg'} alt="Unliked" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
         <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>{price} руб.</b>
         </div>
         <img 
            className={styles.plus} 
            onClick={handleClickPlus}
            src={isAdded ? "/img/sneakers/button0.svg" : "/img/sneakers/button1.svg"} 
            alt="Add to cart" 
         />
      </div>
      </div>
   );
}

export default Card;