import "./CartIten.css"

function CartIten({item,removeItem}){
    return (
            <>
            <div className="CardItem">
                <img src={item.img} alt={item.name} />
                <div className="boxText">

                    <span className="title">{(item.name.length >9 ? item.name.slice(0,9) : item.name)}</span>
                    
                    <span className="type">{item.category}</span>


                </div>
                    <span> X {item.cont}</span>
                <button onClick={()=>removeItem(item.id)} className="buttonRemove">Remover</button>
            
            </div>

            </>
    
            )

}
export default CartIten