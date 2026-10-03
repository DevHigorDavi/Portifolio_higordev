import HeaderDark from "../components/HeaderDark";
import DesignImagem from "../assets/design-imagem.png";
import CodigoImagem from "../assets/codigo-imagem.png";
import IdentidadeImagem from "../assets/identidade-imagem.png";
import CardDescricao from "../components/CardsDiferencial";

function Diferencial() {
  return (
    <section className="Diferencial" id="Diferencial">
      <HeaderDark />
      <div className="content-diferencial">
        <div className="title-diferencial">
          <p>NÃO É SÓ CÓDIGO.</p>
          <span>É VISÃO.</span>
        </div>

        <div className="cards-diferencial">
          <CardDescricao
            imagem={DesignImagem}
            titulo="DESIGN"
            subtitulo="PENSAMENTO VISUAL"
            descricao="Transformo ideias em composições que comunicam, com foco em estética, tipografia e experiência"
          />

          <CardDescricao
            imagem={CodigoImagem}
            titulo="CÓDIGO"
            subtitulo="IDEIA + EXPERIÊNCIA"
            descricao=" Unindo ideias e transformando conceitos em código limpo, funcional e escalável."
          />

          <CardDescricao
            imagem={IdentidadeImagem}
            titulo="IDENTIDADE"
            subtitulo="FAZER DIFERENTE"
            descricao="Busco minha própria estética, misturando referências, cultura e trazendo originalidade para criar algo com personalidade."
          />
        </div>
      </div>
    </section>
  );
}

export default Diferencial;
