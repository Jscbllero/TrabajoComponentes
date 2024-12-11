import Articles from "./articles";
import datos from "./../../public/datos.json";

export default function Content() {
    let recetas = "Bife Chorizo 300gr"
    let { Pastas, Postres, Ensaladas, Arrocesses } = datos;
  return ( 
  <div className="col-sm-8">

    {
        Pastas.map((receta, i) =>(
            <Articles key = {i} recipes={receta} />
        ))
    }
     
    </div>
  )
}
