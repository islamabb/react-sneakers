import Card from '../components/Card';


function Home({ 
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddFavority,
  onAddToCart,
  isLoading
}) {

  const renderItems = () => {
    if (isLoading) {
      return [...Array(12)].map((_, index) => (
        <Card key={`skeleton-${index}`} loading={true} />
      ));
    }

    return items
      .filter(item => item?.name?.toLowerCase().includes(searchValue.toLowerCase()))
      .map(obj => (
        <Card 
          key={obj.id}
          name={obj.name} 
          price={obj.price} 
          imageUrl={obj.imageUrl}
          loading={false}
          onFavority={() => onAddFavority(obj)}
          onClickPlus={() => onAddToCart(obj)}
        />
      ));
  };


  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
        <div className="search-block d-flex">
          <img src="/img/search.png" alt="Search" />
          <input 
            onChange={onChangeSearchInput} 
            value={searchValue} 
            placeholder="Поиск..." 
          />
          {searchValue && (
            <img 
              onClick={() => setSearchValue('')}
              className="clear1 cu-p" 
              src="/img/sneakers/button3.svg" 
              alt="Clear" 
            />
          )}
        </div>
      </div>
      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
}

export default Home;