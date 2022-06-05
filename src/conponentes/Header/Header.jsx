
import "./Header.css";

function Header({ showProducts,value, setValue  }) {
  

  return (
    <header>
      <div className="campHeader">
        <span className="burguer" onClick={()=> showProducts("")}>
          Burguer <span className="kenzie">Kenzie</span>
        </span>

        <div className="campSearch">
          <input
            className="inputSearch"
            placeholder="Digitar Pesquisa "
            type="text"
            value={value}
            onChange={(ev) => setValue(ev.target.value)}
          />
          <button onClick={()=> showProducts(value)}>Pesquisar</button>
        </div>
      </div>
    </header>
  );
}
export default Header;
