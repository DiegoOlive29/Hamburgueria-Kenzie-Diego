import "./ProductsList.css";
import Product from "../Product/Product";

function ProductsList({api,handleClick,search,  filteredProducts }) {
  return (
    <>
    
    <div className="containerList">
      {search ==="" ? 
      (api.map((item)=>(

        <Product  key={item.id} api={item} handleClick={handleClick}/>
        ))
      )
      :
      (
        filteredProducts.map((item)=>(<>
         
          <Product   key={item.id} api={item} handleClick={handleClick}/>
          </>
          ))
      )
       
    
    }
      
    </div>
  </>
  );
}

export default ProductsList;
