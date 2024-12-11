import logo from "../assets/descarga.png";


export default function Header () {
  return (
    <div className="p-5 bg-primary text-white text-center">
    <h1> <img src={logo} width="100px" />Recetas Dom</h1>
    <p>The best in the country</p> 
    </div>
  )
}
