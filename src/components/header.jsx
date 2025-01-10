import React, { useState } from 'react';
function Header() {
  
function menuToggle(){
  const [foiClicado, setFoiClicado] = useState(false);

  const handleClick = () => {
    console.log('Botão foi clicado')
    setFoiClicado(true)
  }
}

// let mobileMenu = document.getElementsByClassName('mobile-menu')
//   let toggleMenu = document.getElementsByClassName('toogle-menu')
//   console.log('menutoggle', mobileMenu, toggleMenu)
//   if (toggleMenu.addEventListener('click', () => {
//     return 'fui clicado'
//   }));

  
  return (
    
    <header className="header-portfolio bg-main-500 py-3">
      <div className="header-content container mx-auto flex items-center justify-between">
        <a className="min-w-max" href=""><img src="/src/assets/imgs/logo.svg" alt="" /></a>
        <nav className="nav-header">
          <ul className="desktop-menu flex items-center gap-x-6 transition-ease-in">
            <li><a className="header-link p-1 color-main-100" href="">Home</a></li>
            <li><a className="header-link transition-ease-in p-1" href="">Sobre mim</a></li>
            <li><a className="header-link p-1" href="">Portfólio</a></li>
            <li><a className="header-link p-1" href="">Skills</a></li>
            <li><a className="header-link p-1" href="">Carreira</a></li>
            <li><a className="header-link p-1" href="">Recomendações</a></li>
            <li><a className="header-link p-1" href="">Contato</a></li>
            
          </ul>
          
        </nav>
        <button onClick={menuToggle} className="px-3 py-2 toogle-menu hidden rounded-full hover-main-400 hover-color-100 transition-ease-in" ><i className=" text-2xl/none fa-solid fa-bars"></i></button>
        <nav className="mobile-menu hidden py-4 flex-col gap-4 transition-ease-in">
          <a className="header-link p-1 color-main-100" href="">Home</a>
          <a className="header-link p-1" href="">Sobre mim</a>
          <a className="header-link p-1" href="">Portfólio</a>
          <a className="header-link p-1" href="">Skills</a>
          <a className="header-link p-1" href="">Carreira</a>
          <a className="header-link p-1" href="">Recomendações</a>
          <a className="header-link p-1" href="">Contato</a>
          
        </nav>
      </div>
    </header>
  )
}

export default Header
