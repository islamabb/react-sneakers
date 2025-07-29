import React from 'react';
import styles from './Card.module.scss';
import ContentLoader from "react-content-loader"

function Card({ 
   id, 
   onFavority, 
   imageUrl, 
   name, 
   price, 
   onClickPlus, 
   Favorited = false, 
   added, 
   loading 
}) {

   const [isAdded, setIsAdded] = React.useState(added);
   const [isFavorite, setIsFavorite] = React.useState(Favorited);

const handleClickPlus = () => {
   onClickPlus({ id, name, imageUrl, price }); 
   setIsAdded(!isAdded); 
};

const onClickFavority = () => {
   onFavority({ id, name, imageUrl, price });
   setIsFavorite(!isFavorite);
}

return (
   <div className={styles.card}>
      {loading ? (
      <ContentLoader 
         speed={2}
         width={155}
         height={230}
         viewBox="0 0 155 265"
         backgroundColor="#f3f3f3"
         foregroundColor="#ecebeb"
      >
      <rect x="0" y="0" rx="10" ry="10" width="150" height="155" /> 
         <rect x="78" y="144" rx="0" ry="0" width="7" height="5" /> 
         <rect x="0" y="164" rx="5" ry="5" width="150" height="15" /> 
         <rect x="0" y="189" rx="5" ry="5" width="100" height="15" /> 
         <rect x="0" y="234" rx="5" ry="5" width="80" height="25" /> 
         <rect x="124" y="234" rx="10" ry="10" width="32" height="32" />
      </ContentLoader>
      ) : (
      <>
         <div className={styles.favorite} onClick={onClickFavority}>
            <img 
            src={isFavorite ? '/img/sneakers/heart1.svg' : '/img/sneakers/heart0.svg'} 
            alt={isFavorite ? "Liked" : "Unliked"} 
            />
         </div>
         <img width={133} height={112} src={imageUrl} alt="Sneakers" />
         <h5>{name}</h5>
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
      </>
      )}
   </div>
);
}

export default Card;