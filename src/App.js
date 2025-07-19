import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  return (
    <div className="wrapper clear">
      <div style={{display: 'none'}} className="overlay">
        <Drawer />
      </div>
      <Header />
      <div className="content p-40">
          <div className="d-flex align-center justify-between mb-40">
            <h1 >Все кроссовки</h1>
            <div className="search-block d-flex">
              <img src="/img/search.png" alt="Search" ></img>
              <input placeholder="Поиск..."></input>
            </div>
          </div>
        <div className="d-flex">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
