function Footer() {

    return (
      <footer className="footer-portfolio bg-main-500 py-6">
        <div className="container mx-auto content-footer gap-y-6 flex items-center justify-between relative">
          <p className="copyright-text flex-auto">Copyright © Gabriel Pessoa · 2024</p>
          <div className="content-mobile flex items-center justify-between ">
            <img className="logo-footer absolute center-x" src="../../assets/imgs/logo.svg" alt="" />
            <ul className="flex gap-x-4 items-center justify-self-start">
              <li><a className="social-links w-max h-max" href="https://github.com/Gabriel-P-Freitas" target="_blank"><i className="text-4xl align-middle transition-ease-in fa-brands fa-github"></i></a></li>
              <li><a className="social-links" href="https://www.linkedin.com/in/gabriel-pessoa-27239427b/" target="_blank"><i className="text-4xl align-middle transition-ease-in rounded-full fa-brands fa-linkedin"></i></a></li>
            </ul>
          </div>
          <span className="separator hidden separator-hidden w-full bg-main-100"></span>


        </div>


      </footer>
    )
  }
  
  export default Footer
  