import LogoCoroa from "../assets/logo-coroa.png";
function HeaderDark() {
  return (
    <nav className="menu-desktop">
      <div className="links-menu">
        <a href="#Inicio">
          <img src={LogoCoroa} alt="" />
        </a>
        <a href="#Sobre">Sobre</a>
        <a href="#Diferencial">Diferencial</a>
        <a href="">Skills</a>
        <a href="">Projetos</a>
        <a href="">Contato</a>
      </div>

      <div className="menu-icons">
        <i className="fa-regular fa-circle-user"></i>
        <i className="fa-solid fa-search"></i>
        <i className="fa-solid fa-bars"></i>
      </div>
    </nav>
  );
}

export default HeaderDark;
