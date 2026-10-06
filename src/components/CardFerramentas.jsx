import IconeVite from "../assets/vite-icone.svg";
function CardFerramentas({ IconeFigma, NomeFerramenta1, NomeFerramenta2 }) {
  return (
    <div className="card-ferramentas">
      <div className="bolha-icone">
        <i class="fa-solid fa-wrench"></i>
      </div>
      <div className="content-ferramentas">
        <h1>FERRAMENTAS</h1>
        <div className="icones-ferramentas">
          <div className="card-figma">
            <i class={IconeFigma}></i>
            <p>{NomeFerramenta1}</p>
          </div>
          <div className="card-vite">
            <img src={IconeVite} alt="" />
            <p>{NomeFerramenta2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardFerramentas;
