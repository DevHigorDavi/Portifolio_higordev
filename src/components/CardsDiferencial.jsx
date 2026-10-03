function CardDescricao({ imagem, titulo, subtitulo, descricao }) {
  return (
    <div className="card">
      <img src={imagem} alt="" />
      <div className="content-card">
        <h1>{titulo}</h1>
        <p>{subtitulo}</p>
        <span>{descricao}</span>

        <div className="button-card">
          <p>VEJA MAIS</p>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </div>
  );
}

export default CardDescricao;
