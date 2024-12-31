function Header() {

  return (
    <header className="header-portfolio bg-main-500 py-3">
      <div className="container mx-auto flex items-center justify-between">
        <a href=""><img src="../../assets/imgs/logo.svg" alt="" /></a>
        <nav className="nav-header">
          <ul className="flex items-center gap-x-6 transition-ease-in">
            <li><a className="header-link p-1 color-main-100" href="">Home</a></li>
            <li><a className="header-link transition-ease-in p-1" href="">Sobre mim</a></li>
            <li><a className="header-link p-1" href="">Portfólio</a></li>
            <li><a className="header-link p-1" href="">Skills</a></li>
            <li><a className="header-link p-1" href="">Carreira</a></li>
            <li><a className="header-link p-1" href="">Recomendações</a></li>
            <li><a className="header-link p-1" href="">Contato</a></li>
            <li><a href=""><img className="hidden-menu hidden" src="../../assets/imgs/menu.svg" alt="" /></a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
