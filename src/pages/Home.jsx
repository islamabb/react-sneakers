import Card from '../components/Card';

function Home({ 
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddFavority,
  onAddToCart}) {
  return(
    <div className="content p-40">
          <div className="d-flex align-center justify-between mb-40">
            <h1>{searchValue ? `Поиск по запросу: "${searchValue}"`: 'Все кроссовки'}</h1>
            <div className="search-block d-flex">
              
              <img src="/img/search.png" alt="Search"></img>
              <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск...">
              </input>
            {searchValue && <img onClick={() => setSearchValue('')}className="clear1 cu-p" src="/img/sneakers/button3.svg" alt="Clear" ></img>}
            </div>
          </div>
        <div className="d-flex flex-wrap">
          {items.filter(item => item.name && item.name.toLowerCase().includes(searchValue.toLowerCase())).map((obj) => (
        <Card 
        key={obj.id}
        title={obj.name} 
        price={obj.price} 
        imageUrl={obj.imageUrl} 
        onFavority={(obj) => onAddFavority(obj)}
        onClickPlus={() => {
        console.log('Нажали плюс');
        onAddToCart(obj);
    }}
  />
))}
        </div>
      </div>
  )
}

export default Home;