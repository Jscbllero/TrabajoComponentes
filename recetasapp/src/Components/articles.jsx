import Sancocho from "./../assets/Sancocho.png";

export default function articles(props) {
    console.log(props);
    let {recipes} = props;
  return (

    <>
    <h2>{recipes.titulo}</h2>
      <h5>{recipes.subtitulo}</h5>
      <div className="fakeimg">
        <img src={ recipes.imagenes[0] } height="500px" width="70%" />
        </div>
      <p>{recipes.texto}</p>
      <button className="btn btn-primary">Receta:</button>
      </>
  )
}
