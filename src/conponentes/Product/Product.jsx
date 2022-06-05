import "./Products.css";
function Product({ api, handleClick }) {
  return (
    <div className="CardProduct">
      <div className="CampImg">
        <img className="imgProduct" src={api.img} alt={api.name} />
      </div>

      <span className="title">{api.name}</span>
      <span className="type">{api.category}</span>

      <span className="price">R$: {api.price}</span>

      <button onClick={() => handleClick(api.id)}>adicionar</button>
    </div>
  );
  // category: "Sanduíches"
  // id: 1
  // img: "https://i.imgur.com/Vng6VzV.png"
  // name: "Hamburguer"
  // price: 14
}

export default Product;
