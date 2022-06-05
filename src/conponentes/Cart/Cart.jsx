import "./TextEmpty.css";
import CartIten from "./CartIten";
import TextEmpty from "./TextEmpyt";
import CampTotal from "../CampTotal/CampTotal";


function CartEmpty({ currentSale, cartTotal, setCurrentSale, setCartTotal, }) {
  function removeItem(id){
    const nova = currentSale.filter((item)=> item.id !== id)
    setCurrentSale(nova)

   setCartTotal(currentSale.reduce((a,b)=> a + (b.price * b.cont),0))

  }

  return (
    <div className="CampCart">
      <span>Carrinho de Compras</span>

      {currentSale.length > 0 ? (
        currentSale.map((item)=> <CartIten  key={item.id} item={item} removeItem={removeItem} />  )
        
      ) : (
        <TextEmpty />
      )}
    { currentSale.length > 0  ? <CampTotal currentSale={currentSale} setCurrentSale={setCurrentSale}/>: ''}
      
    </div>
  );
}

export default CartEmpty;
