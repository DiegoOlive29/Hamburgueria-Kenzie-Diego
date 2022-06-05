import Header from "./conponentes/Header/Header";
import ProductsList from "./conponentes/ProductsList/ProductsList";
import CartEmpty from "./conponentes/Cart/Cart";
import ResultSearch from "./conponentes/ResultSearch/ResultSearch";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [api, setApi] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [search, setSearch] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setApi(response))
      .catch((err) => console.log(err));
  }, []);

  function showProducts(productName) {
    setSearch(productName);
    setFilteredProducts(
      api.filter((item) => item.name.toUpperCase().includes(productName.toUpperCase()))
    );
    setValue('')
  }

  function handleClick(productId) {
    
    const verificar = currentSale.findIndex((item) => item.id === productId);
    let novo =[]
    if (verificar === -1) {
       novo = api.find((item) => item.id === productId);

      novo.cont = 1;
      setCurrentSale([...currentSale, novo]);
    } else {
      currentSale[verificar].cont ++;
   
      if(currentSale.length === 0){
        console.log(currentSale)
        setCartTotal((novo.price*novo.cont))
      }else{
        console.log(currentSale)
        setCartTotal(currentSale.reduce((item, itemB) => (item + (itemB.price * itemB.cont)) ,0))
    }
  }
  }
  
  return (
    <>
      <Header
        showProducts={showProducts}
        search={search}
        setSearch={setSearch}
        value={value}
        setValue={setValue}
      />
      <ResultSearch 
        search={search}
        setSearch={setSearch}
        />
      <main>
       
        <ProductsList
          search={search}
          api={api}
          filteredProducts={filteredProducts}
          handleClick={handleClick}
        />

        <CartEmpty 
        currentSale={currentSale}
        cartTotal={cartTotal}
        setCurrentSale={setCurrentSale} 
        setCartTotal={setCartTotal}/>
      </main>
    </>
  );
}

export default App;
