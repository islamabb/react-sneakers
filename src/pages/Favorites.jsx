import Card from "../components/Card"; 
import React from "react";
import { AppContext } from "../App";

function Favorites({ onAddFavority }) {
  const { favorites } = React.useContext(AppContext);

  return(
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои закладки</h1>
      </div>
      <div className="d-flex flex-wrap">
        {favorites.map((item) => (
          <Card 
            key={item.id}
            id={item.id}
            Favorited={true}
            onFavority={onAddFavority}
            name={item.name}
            imageUrl={item.imageUrl}
            price={item.price}
          />
        ))}
      </div>
    </div>
  )
}

export default Favorites;