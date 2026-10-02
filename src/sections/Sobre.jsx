import HeaderDark from "../components/HeaderDark"
import FotoSobre from "../assets/foto-sobre.png"
import AssinaturaDecoracao from "../assets/decoracao-sobre.png"
function Sobre() {
    return (
        <section className="Sobre" id="Sobre">
            <HeaderDark />

            <div className="content-sobre">
                <div className="informacoes-RSobre">
                <div className="title-sobre">
                    <p>QUEM SOU EU?</p>
                </div>

                <div className="subtitle-sobre">
                    <p>HÍGOR DAVI</p>
                    <span>DESENVOLVEDOR / DESIGNER / CRIATIVO</span>
                </div>

                <div className="text-descricao">
                    <p>"Quebrando barreiras, aprimorando minha perspectiva e criando causas novas."</p>
                </div>
                </div>
                

                <div className="imagem-sobre">
                    <img src={FotoSobre} alt="" />
                </div>


                <div className="decoracoes-sobre">
                    <div className="informacoes-LSObre">
                    {/* <div className="frases-efeito">
                        <span>
                            Estiloso
                            Inovador
                            Diferente
                        </span>
                    </div> */}
                    <img src={AssinaturaDecoracao} alt="" />
                </div>

                <div className="informacoes-sobre">
                    <p>2009</p>
                    <span>BRASIL</span>
                </div>

                <div className="motivacoes-sobre">
                    <p>Sonhos Grandes</p>
                        <p>Planos reais</p>
                        <p>Em construção...</p>
                    
                </div>
                    </div>
            </div>

        </section>
    )
}

export default Sobre