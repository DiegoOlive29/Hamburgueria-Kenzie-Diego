import "./CampTotal.css"

function CampTotal ({currentSale,setCurrentSale}) {
    return (
       
      
        <div className="CampTotal">
            <div className="CampPrice">
                <span>Total</span>  <span> R$ {Math.floor(currentSale.reduce((a,b)=> a + (b.price * b.cont),0))}</span>
            </div>

            <button className="btnRemove" onClick={()=> setCurrentSale([])} >Remover Todos</button>
        </div>
        
    )


}

export default CampTotal