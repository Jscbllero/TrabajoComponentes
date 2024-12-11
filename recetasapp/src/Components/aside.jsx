import chef from "./../assets/chef.png";

export default function Aside() {
  return (
    <div className="col-sm-4">
      <h2>About Me</h2>
      <h5>Photo of me:</h5>
      <div className="fakeimg">
        <img src={chef} width="100%" />
      </div>
      <p>Alta culinaria y sabores a tu gusto, ven a describir sus matices.

        8 años degustando paladares a tu placer.
      </p>
      <h3 className="mt-4">Categorias de sabor</h3>
      <p>Lorem ipsum dolor sit ame.</p>
      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          <a className="nav-link active" href="#">Descubrimiento</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pasiones</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Intesos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Sabores globales</a>
        </li>
      </ul>
      <hr className="d-sm-none"/>
    </div>
  )
}
