import "./Resultsearch.css"

function ResultSearch ({search,setSearch}){

    return(
        (search !== ""?(
        <div className="resultSearch">
        <span>
            Resultado para: {search} 

        </span><button onClick={()=> setSearch('')}>Voltar</button>
        </div>):
        ("")
        )
    )

}
export default ResultSearch