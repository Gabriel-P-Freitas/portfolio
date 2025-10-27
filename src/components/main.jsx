function Main() {
  return (
    <main>
      <section className="hero-saudacoes container mx-auto flex justify-between flex-wrap items-center py-16">
        <div className="personal-description flex flex-col gap-y-4">
          <h6 className="sec-title py-3 px-6 color-main-100 w-max rounded-2xl bg-main-500">
            👋 Saudações!
          </h6>
          <h1>Gabriel Pessoa</h1>
          <h6 className="font-normal">Full Stack Developer | Junior</h6>
          <ul className="flex gap-x-4 items-center justify-self-start">
            <li>
              <a
                className="social-links w-max h-max"
                href="https://github.com/Gabriel-P-Freitas"
                target="_blank"
              >
                <i className="text-4xl align-middle transition-ease-in fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a
                className="social-links"
                href="https://www.linkedin.com/in/gabriel-pessoa-27239427b/"
                target="_blank"
              >
                <i className="text-4xl align-middle transition-ease-in rounded-full fa-brands fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>

        <picture className="avatar-gabriel">
          <source
            srcSet="././imgs/avatar-mobile.svg"
            media="(max-width: 576px)"
          />
          <source
            srcSet="././imgs/avatar-tablet.svg"
            media="(max-width: 1280px)"
          />
          <img src="././imgs/avatar-desktop.svg" alt="Avatar Gabriel" />
        </picture>

        <div className="buttons-contact flex flex-col gap-4 items-end">
          <button className="bg-main-500 w-max rounded-2xl">
            <a
              className="color-main-300 rounded-2xl hover-main-400 hover-color-100 transition-ease-in px-10 flex items-center py-3"
              href="./imgs/CV - Gabriel Pessoa (Portfólio).pdf"
              download={"CV - Gabriel Pessoa (Portfólio).pdf"}
            >
              Baixar CV{" "}
              <i className="text-xl/none ms-2 fa-regular fa-circle-down"></i>
            </a>
          </button>
          <button className="border-main-300 w-max rounded-2xl">
            <a
              className="color-main-300 rounded-2xl hover-main-400 hover-color-100 transition-ease-in flex items-center px-4 py-3"
              href="https://api.whatsapp.com/send/?phone=5584991700480&text&type=phone_number&app_absent=0"
              target="_blank"
            >
              <i className="text-2xl/none me-2 fa-brands fa-whatsapp"></i> Vamos
              conversar
            </a>
          </button>
        </div>
      </section>

      <section className="sec-sobre-mim bg-main-500 py-16">
        <div className="sobre-mim-content container mx-auto flex items-center gap-6">
          <picture>
            <source
              srcSet="./imgs/perfil-responsive.svg"
              media="(max-width: 992px)"
            />
            <img src="imgs/perfil-gabriel-removebg.svg" alt="Meu perfil" />
          </picture>

          <div className="sobre-mim w-7/12 flex flex-col gap-y-4">
            <h6 className="sec-title py-3 px-6 color-main-100 w-max rounded-2xl bg-main-500">
              🧐 Sobre mim
            </h6>
            <h2>Gabriel Pessoa</h2>
            <dl className="flex flex-col gap-y-3">
              <dd>
                <p className="fs-large">
                  👋 Olá, meu nome é Gabriel Pessoa de Queiroz Freitas, mas pode
                  me chamar apenas de Gabriel. Prazer!
                </p>
              </dd>
              <dd>
                <p className="fs-large">
                  👨‍💻 Há mais de 3 anos desenvolvo interfaces com JavaScript,
                  CSS, HTML, Python, Flask...
                </p>
              </dd>
              <dd>
                <p className="fs-large">
                  🎓 Sou formado no ensino médio integrado ao curso Informática
                  para Internet ofertado pelo Instituto Federal de Ciências e
                  Tecnologia do Rio Grade do Norte (IFRN). Com duração de 4 anos
                  e uma carga horária total de 3995 horas.
                </p>
              </dd>
              <dd>
                <p className="fs-large">
                  💡 Interesses em desenvolvimento Front-end com JavaScript,
                  React e TailwindCSS.
                </p>
              </dd>
              <dd>
                <p className="fs-large">
                  🚀 Caminhando calmamente e incessantemente a cada dia.
                  Buscando ser um pouquinho melhor do que fui ontem.
                </p>
              </dd>
            </dl>
          </div>
        </div>
      </section>

      <section className="py-16 border-end-main-300">
        <div className="my-experience container mx-auto flex flex-wrap justify-center gap-6">
          <button className="border-main-300 w-80 rounded-2xl px-1 py-6 flex flex-col items-center gap-y-2">
            <img src="././imgs/codeIcon.svg" alt="Ícone de código" />
            <p>4 anos de</p>
            <h5>Programação</h5>
          </button>

          <button className="border-main-300 w-80 rounded-2xl px-1 py-6 flex flex-col items-center gap-y-2">
            <img src="././imgs/projectsIcon.svg" alt="Ícone Kanban" />
            <p>2 anos de</p>
            <h5>Expêriencia Profissional</h5>
          </button>

          <button className="border-main-300 color-main-100 bg-main-500 w-80 flex-auto rounded-2xl px-1 py-6 flex flex-col items-center gap-y-2">
            <h4 className="color-main-100">Full Stack</h4>
            <p className="fs-large">Desenvolvedor</p>
          </button>

          <button className="border-main-300 color-main-100 bg-main-500 w-80 flex-auto rounded-2xl px-1 py-6 flex flex-col items-center gap-y-2">
            <h4 className="color-main-100">Experiência</h4>
            <p className="fs-large">Em vários projetos</p>
          </button>
        </div>
      </section>

      <section className="sec-praticas-projetos container mx-auto py-16">
        <div className="header-praticas flex justify-between items-end gap-y-6 mb-12">
          <div className="description-sec">
            <h6 className="sec-title py-3 px-6 color-main-100 w-max rounded-2xl bg-main-500 mb-2">
              🔗 Portfólio
            </h6>
            <h2>Práticas e projetos</h2>
          </div>
          <div className="filter-praticas flex flex-wrap items-center gap-x-8 gap-y-6">
            <button className="flex items-center gap-x-2 hover-main-400 transition-ease-in py-3 px-6 border-main-300 rounded-2xl">
              <img src="././imgs/projects.svg" alt="" />
              <h6 className="font-semibold color-main-300">Projetos</h6>
            </button>

            <button className="flex items-center gap-x-2 hover-main-400 transition-ease-in py-3 px-6 border-main-300 rounded-2xl">
              <img src="././imgs/praticasIcon.svg" alt="" />
              <h6 className="font-semibold color-main-300">Práticas</h6>
            </button>
          </div>
        </div>

        <ul className="list-praticas py-4 grid grid-cols-3 gap-6">
          <li className="">
            <a
              href="https://gabriel-p-freitas.github.io/TYPOGRAPH/"
              target="_blank"
              className="card-pratica text-start hover-main-400 transition-ease-in flex flex-col justify-between h-96 p-6 border-main-300 rounded-2xl"
            >
              <div>
                <h6 className="mb-4">TYPOGRAPH</h6>
                <p className="mb-2">
                  A prática Typograph foi o meu primeiro site responsivo, em que
                  pude realmente aprender e entender o uso dos medias queries
                  nas CSS e o uso do valor "clamp()" para tamanhos flexíveis.
                </p>
                <dl className="flex flex-wrap gap-2 color-main-100 mb-2">
                  <dd className="fs-xsmall font-extrabold bg-main-500 py-1 px-2 rounded">
                    HTML
                  </dd>
                  <dd className="fs-xsmall font-extrabold bg-main-500 py-1 px-2 rounded">
                    CSS Responsivo
                  </dd>
                  <dd className="fs-xsmall font-extrabold bg-main-500 py-1 px-2 rounded">
                    SCSS
                  </dd>
                  <dd className="fs-xsmall font-extrabold bg-main-500 py-1 px-2 rounded">
                    BootStrap
                  </dd>
                  <dd className="fs-xsmall w-max font-extrabold bg-main-500 py-1 px-2 rounded">
                    Git e GitHub
                  </dd>
                </dl>
              </div>
              <div className="bottom-pratica flex flex-col gap-y-4">
                <img
                  className=""
                  src="././imgs/typograph-pratica.svg"
                  alt="image project or pratica"
                />
                <nav className="flex items-center gap-x-4">
                  <a
                    className="anchor-projects github-anchor color-main-300"
                    href="https://github.com/Gabriel-P-Freitas/TYPOGRAPH"
                    target="_blank"
                  >
                    <i className="text-5xl align-baseline transition-ease-in fa-brands fa-github"></i>
                  </a>
                  <a
                    className="anchor-projects figma-anchor bg-main-400 px-2 py-1 color-main-200 rounded-full transition-ease-in"
                    href="https://www.figma.com/design/8HL0mnmzdKAiNl4RDDiqad/Tipograph?node-id=1-113&t=TTbyZs7mUX5ZITNw-0"
                    target="_blank"
                  >
                    <i className="w-8 h-8 align-middle text-center fa-brands fa-figma"></i>
                  </a>
                </nav>
                <a
                  href="https://gabriel-p-freitas.github.io/TYPOGRAPH/"
                  target="_blank"
                  className="color-cod-50 hover-color-100 transition-ease-in font-medium"
                >
                  Conhecer prática
                  <span className="ps-2 fa-solid fa-arrow-up-right-from-square"></span>
                </a>
              </div>
            </a>
          </li>
          <li className="">
            <a
              href="https://gabriel-p-freitas.github.io/StructCode-CodeBoost/"
              target="_blank"
              className="card-pratica text-start hover-main-400 transition-ease-in flex flex-col justify-between h-96 p-6 border-main-300 rounded-2xl"
            >
              <div>
                <h6 className="mb-4">StructBoost</h6>
                <p className="mb-2">
                  O StructBoost foi um projeto feito através do curso Introdução
                  ao FrontEnd ofertado pela CodeBoost. Tive o privilégio de me
                  aprofundar tanto no HTML quanto nas CSS. Criando uma aplicação
                  responsiva e animada.
                </p>
                <dl className="flex flex-wrap gap-2 color-main-100 mb-2">
                  <dd className="fs-xsmall font-extrabold bg-main-500 py-1 px-2 rounded">
                    HTML
                  </dd>
                  <dd className="fs-xsmall font-extrabold bg-main-500 py-1 px-2 rounded">
                    CSS Responsivo
                  </dd>
                  <dd className="fs-xsmall font-extrabold bg-main-500 py-1 px-2 rounded">
                    Git e GitHub
                  </dd>
                </dl>
              </div>
              <div className="bottom-pratica flex flex-col gap-y-4">
                <img
                  className=""
                  src="././imgs/structboost-project.svg"
                  alt="image project or pratica"
                />
                <nav className="flex items-center gap-x-4">
                  <a
                    className="anchor-projects github-anchor color-main-300"
                    href="https://github.com/Gabriel-P-Freitas/StructCode-CodeBoost"
                    target="_blank"
                  >
                    <i className="text-5xl align-baseline transition-ease-in fa-brands fa-github"></i>
                  </a>
                  <a
                    className="anchor-projects figma-anchor bg-main-400 px-2 py-1 color-main-200 rounded-full transition-ease-in"
                    href="https://www.figma.com/design/W6LAZ1sDyDYS1nakb5vVRa/Struct-Boost-%7C-Codeboost?node-id=1-12&t=TpUOHHOhLBgNdT5z-1"
                    target="_blank"
                  >
                    <i className="w-8 h-8 align-middle text-center fa-brands fa-figma"></i>
                  </a>
                </nav>
                <a
                  href="https://gabriel-p-freitas.github.io/StructCode-CodeBoost/"
                  target="_blank"
                  className="color-cod-50 hover-color-100 transition-ease-in font-medium"
                >
                  Conhecer projeto
                  <span className="ps-2 fa-solid fa-arrow-up-right-from-square"></span>
                </a>
              </div>
            </a>
          </li>
          <li className="">
            <a
              href="https://gabriel-p-freitas.github.io/spotify-alura/"
              target="_blank"
              className="card-pratica text-start hover-main-400 transition-ease-in flex flex-col justify-between h-96 p-6 border-main-300 rounded-2xl"
            >
              <div>
                <h6 className="mb-4">Spotify Alura</h6>
                <p className="mb-2">
                  Esse projeto foi feito a partir da imersão Front-End da Alura,
                  o qual criei a página desktop e tablet do spotify, e integrei
                  uma API de artistas com JavaScript para serem renderizados nos
                  resultados da pesquisa.
                </p>
                <dl className="flex flex-wrap gap-2 color-main-100 mb-2">
                  <dd className="fs-xsmall font-extrabold bg-main-500 py-1 px-2 rounded">
                    HTML
                  </dd>
                  <dd className="fs-xsmall font-extrabold bg-main-500 py-1 px-2 rounded">
                    CSS
                  </dd>
                  <dd className="fs-xsmall font-extrabold bg-main-500 py-1 px-2 rounded">
                    JavaScript
                  </dd>
                  <dd className="fs-xsmall font-extrabold bg-main-500 py-1 px-2 rounded">
                    API
                  </dd>
                  <dd className="fs-xsmall w-max font-extrabold bg-main-500 py-1 px-2 rounded">
                    Git e GitHub
                  </dd>
                </dl>
              </div>
              <div className="bottom-pratica flex flex-col gap-y-4">
                <img
                  className=""
                  src="././imgs/spotify-alura-project.svg"
                  alt="image project or pratica"
                />
                <nav className="flex items-center gap-x-4">
                  <a
                    className="anchor-projects github-anchor color-main-300"
                    href="https://github.com/Gabriel-P-Freitas/spotify-alura"
                    target="_blank"
                  >
                    <i className="text-5xl align-baseline transition-ease-in fa-brands fa-github"></i>
                  </a>
                </nav>
                <a
                  href="https://gabriel-p-freitas.github.io/spotify-alura/"
                  target="_blank"
                  className="color-cod-50 hover-color-100 transition-ease-in font-medium"
                >
                  Conhecer projeto
                  <span className="ps-2 fa-solid fa-arrow-up-right-from-square"></span>
                </a>
              </div>
            </a>
          </li>
        </ul>
      </section>

      <section className="sec-videos container mx-auto py-16">
        <h2 className="mb-2">Projetos em vídeos</h2>
        <p className="text-sec-project w-7/12 fs-xlarge mb-6">
          Aqui são exibidos alguns videos curtos de projetos que tive o prazer
          de trabalhar, conquistar novas experiências e saberes. Alguns deles
          contei com excelentes equipes.
        </p>

        <ul className="list-videos py-4 flex gap-x-6 mb-8">
          <li className="w-1/3">
            <a
              className="card-video hover-main-400 transition-ease-in pb-4 border-main-300 rounded-2xl"
              href="https://www.youtube.com/playlist?list=PLIfEkQw-gAsgThFwCQ7UJNsGeqkPBm2wh"
              target="_blank"
            >
              <figure className="relative mb-4">
                <img
                  className="rounded-t-2xl"
                  src="././imgs/portfolio-video.svg"
                  alt="portfolio"
                />
                <span className="absolute center-x-y bg-main-300 px-5 py-4 rounded-full">
                  <i className="text-2xl/none color-cod-50 fa-solid fa-play"></i>
                </span>
              </figure>
              <div className="content-video px-4">
                <div className="title-video flex justify-between items-center mb-4">
                  <h6>Portfólio</h6>
                  <dl className="flex gap-x-2 color-main-100">
                    <dd className="fs-xsmall font-extrabold bg-main-500 py-1 px-2 rounded">
                      React JS
                    </dd>
                    <dd className="fs-xsmall font-extrabold bg-main-500 py-1 px-2 rounded">
                      CSS Responsivo
                    </dd>
                  </dl>
                </div>
                <div className="description-video flex justify-between items-center fs-large">
                  <p>Como foi feito meu portfólio</p>
                  <button className="">
                    Assistir
                    <i className="color-main-300 ps-2 fa-solid fa-play"></i>
                  </button>
                </div>
              </div>
            </a>
          </li>
        </ul>

        <a
          href="https://www.youtube.com/@Gabriel-Pessoa-Dev/playlists"
          target="_blank"
          className="color-main-100 block text-end fs-xlarge"
        >
          Conhecer mais projetos{" "}
          <i className="ps-2 fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </section>

      <section className="sec-skills py-16 bg-main-500">
        <div className="skills-content container mx-auto flex flex-col items-center gap-y-12 text-center">
          <div className="header-skills">
            <h6 className="sec-title py-3 px-6 color-main-100 w-max rounded-2xl bg-main-500 mb-6 mx-auto">
              👨‍💻 Skills · Habilidades
            </h6>
            <h2 className="">Tecnologias e habilidades</h2>
          </div>

          <div className="tech-dia-dia">
            <h5 className="color-cod-300 font-normal raleway mb-4">
              Tecnologias que uso no dia a dia
            </h5>
            <figure className="tecnologias-content flex flex-wrap gap-12 justify-center">
              <figcaption className="tecnologia-caption">
                <i className="tecnologia text-7xl fa-brands fa-html5"></i>
              </figcaption>

              <figcaption className="tecnologia-caption">
                <i className="tecnologia text-7xl fa-brands fa-css3-alt"></i>
              </figcaption>

              <figcaption className="tecnologia-caption">
                <i className="tecnologia text-7xl fa-brands fa-js"></i>
              </figcaption>

              <figcaption className="tecnologia-caption">
                <i className="tecnologia text-7xl fa-brands fa-react"></i>
              </figcaption>

              <figcaption className="tecnologia-caption">
                <i className="tecnologia text-6xl fa-brands fa-sass"></i>
              </figcaption>

              <figcaption className="tecnologia-caption">
                <i className="tecnologia text-7xl icon-tailwind-css"></i>
              </figcaption>

              <figcaption className="tecnologia-caption">
                <i className="tecnologia text-6xl fa-brands fa-bootstrap"></i>
              </figcaption>

              <figcaption className="tecnologia-caption">
                <i className="tecnologia text-7xl fa-brands fa-github"></i>
              </figcaption>

              <figcaption className="tecnologia-caption">
                <i className="tecnologia text-7xl fa-brands fa-git-alt"></i>
              </figcaption>

              <figcaption className="tecnologia-caption">
                <i className="tecnologia text-7xl fa-brands fa-figma"></i>
              </figcaption>

              <figcaption className="tecnologia-caption">
                <i className="tecnologia text-7xl icon-jira"></i>
              </figcaption>
            </figure>
          </div>

          <div className="tech-recents">
            <h5 className="color-cod-300 font-normal raleway mb-4">
              Outras tecnologias com que já realizei projetos
            </h5>
            <figure className="tecnologias-content flex flex-wrap gap-12 justify-center">
              <figcaption className="tecnologia-caption">
                <i className="tecnologia text-6xl fa-brands fa-node"></i>
              </figcaption>

              <figcaption className="tecnologia-caption">
                <i className="tecnologia text-7xl fa-brands fa-python"></i>
              </figcaption>

              <figcaption className="tecnologia-caption">
                <i className="tecnologia text-7xl icon-mysql"></i>
              </figcaption>

              <figcaption className="tecnologia-caption">
                <i className="tecnologia text-6xl fa-brands fa-php"></i>
              </figcaption>

              <figcaption className="tecnologia-caption">
                <i className="tecnologia text-7xl fa-brands fa-wordpress-simple"></i>
              </figcaption>

              <figcaption className="tecnologia-caption">
                <i className="tecnologia text-7xl fa-brands icon-c"></i>
              </figcaption>

              <figcaption className="tecnologia-caption">
                <i className="tecnologia text-7xl fa-brands fa-vuejs"></i>
              </figcaption>

              <figcaption className="tecnologia-caption">
                <i className="tecnologia text-7xl rounded icon-typescript"></i>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="sec-trajetoria container mx-auto py-16">
        <h6 className="sec-title py-3 px-6 color-main-100 w-max rounded-2xl bg-main-500 mb-4 mx-auto">
          💼 Carreira
        </h6>
        <h2 className="mb-12 text-center">Trajetória até aqui</h2>

        <div className="list-trajetoria flex gap-6">
          <div className="column-trajetoria academica w-1/2 flex flex-col gap-y-6">
            <div className="header-trajetoria text-center">
              <h4 className="mb-2">Acadêmica</h4>
              <h5 className="raleway color-cod-300 font-normal">
                2021 · Atualmente
              </h5>
            </div>

            <ul className="cards-trajetoria py-2 flex flex-col gap-6">
              <li className="card-trajetoria">
                <article className="p-4 border-main-300 hover-main-400 transition-ease-in bg-main-500 rounded-2xl">
                  <header className="mb-2">
                    <h6 className="mb-2">
                      Full Stack Developer, Desenvolvedor de sistemas
                    </h6>
                  </header>
                  <p className="mb-4">
                    • O Full Stack Club (FSC) é uma comunidade de programadores
                    com diversas formações onde estudo e me reuno com os
                    instrutores e estou dando o próximo passo na minha carreira
                    como programador e me tornando um Full Stack Developer
                    melhor a cada dia dominando mais o front end e o back end.{" "}
                    <br />
                    • São mais de 950 aulas no FSC divididas em mais de 90
                    módulos separados em tais formações: CodeStart, Formação em
                    React e em React Pro, Formação em Next.js, Formação Full
                    Stack (Node, PostGreeSQL, Docker, API), Tech Recruiter
                    Skills, Curso UI PRO, Intensivo de Inglês para devs,
                    Bootcamp SaaS, Formação em React Native, Formação em SOLID,
                    Formação em CyberSecurity e MasterClass (Tecnologias atuais
                    no mercado) <br />• Tenho mentoria semanal com a coordenação
                    do FSC e +10 projetos robustos e complexos que estou
                    começando a desenvolvê los, sem contar as práticas e
                    pequenos projetos de cada módulo.
                  </p>
                  <div className="tempo flex flex-wrap justify-between color-main-100 fs-large">
                    <p className="font-bold">+7 meses </p>
                    <p>
                      <time dateTime="2025-03"> Mar/2025</time> - Atualmente
                    </p>
                  </div>
                </article>
              </li>
              <li className="card-trajetoria">
                <article className="p-4 border-main-300 hover-main-400 transition-ease-in rounded-2xl">
                  <header className="mb-2">
                    <h6 className="mb-2">Capacitação em Sistemas Embarcados</h6>
                  </header>
                  <p className="mb-4">
                    O curso Capacitação em Sistemas Embarcados é alinhado ao
                    eixo tecnológico de Informação e Comunicação. O curso
                    abrange as áreas de Informática ou Engenharias à programação
                    e manutenção de sistemas embarcados com tecnologias de
                    Internet das Coisas (IoT), permitindo a criação de soluções
                    inovadoras que conectem dispositivos e possibilitem a
                    automação e o monitoramento em tempo real. <br />• Suporte
                    técnico, manutenção e outros serviços em dispositivos
                    eletrônicos dedicados. <br /> • Possuí carga horária total
                    de 160 horas sendo um curso de formação inicial continuada
                    (FIC) que fiz pelo IFRN.
                  </p>
                  <div className="tempo flex flex-wrap justify-between color-main-100 fs-large">
                    <p className="font-bold">4 meses </p>
                    <p>
                      <time dateTime="2024-11">Nov/2024</time> -
                      <time dateTime="2025-03"> Mar/2025</time>
                    </p>
                  </div>
                </article>
              </li>

              <li className="card-trajetoria">
                <article className="p-4 hover-main-400 transition-ease-in border-main-300 rounded-2xl">
                  <header className="mb-2">
                    <h6 className="mb-2">
                      Formação no ensino médio integrado ao curso técnico em
                      Informática para Internet
                    </h6>
                  </header>
                  <p className="mb-4">
                    Graças a Deus sou formado no ensino médio na modalidade
                    integrada ao curso tecnólogo de Informática para Internet no
                    Instituto Federal de Ciências e Tecnologia do Rio Grande do
                    Norte (IFRN), do qual possuí uma duração total de 4 anos.{" "}
                    <br /> Tive o privilégio de estudar minhas disciplinas
                    propedêuticas (relacionadas ao ensino médio) e técnicas
                    (relacionadas ao curso), as quais foram distribuídas ao
                    longo de 4 anos numa carga horária total de 3995 horas.{" "}
                  </p>
                  <div className="tempo flex flex-wrap justify-between color-main-100 fs-large">
                    <p className="font-bold">4 anos </p>
                    <p>
                      <time dateTime="2021-05">Maio/2021</time> -
                      <time dateTime="2025-01"> Jan/2025</time>
                    </p>
                  </div>
                </article>
              </li>

              <li className="card-trajetoria">
                <article className="p-4 hover-main-400 transition-ease-in border-main-300 rounded-2xl">
                  <header className="mb-2">
                    <h6 className="mb-2">
                      Curso Metodologia da Pesquisa e Orientação de Projetos de
                      Iniciação Científica da empresa
                    </h6>
                  </header>
                  <p className="mb-4">
                    Neste curso aprendi sobre metodologias de pesquisa, como
                    trabalhar em projetos de inovações e como me certificar que
                    ele seja realmente inovador. Com carga horária total de 30
                    horas, pude também ver a essência de um trabalho em equipe
                    num projeto, com um orientador ou coordenador.
                  </p>
                  <div className="tempo flex flex-wrap justify-between color-main-100 fs-large">
                    <p className="font-bold">30 horas</p>
                    <p>
                      <time dateTime="2023-06">Junho/2023</time>
                    </p>
                  </div>
                </article>
              </li>

              <li className="card-trajetoria">
                <article className="p-4 hover-main-400 transition-ease-in border-main-300 rounded-2xl">
                  <header className="mb-2">
                    <h6 className="mb-2">
                      Ministração do Minicurso - Web Design Profissional:
                      Responsividade com HTML e CSS.{" "}
                    </h6>
                  </header>
                  <p className="mb-4">
                    Ministrei o minicurso de Web Design profissional, no qual
                    foi dividido em dois dias com duas horas em cada dia durante
                    o evento da SECIT (Semana de Ciência e Tecnologia) realizado
                    pelo IFRN - Campus Natal Zona Norte, onde estudo atualmente.
                    Esteve em foco no curso: <br />
                    • Desenvolvimento de uma Landing Page com HTML e CSS; <br />
                    • Uso de breaking points para deixa-la responsiva; <br />•
                    Exposição de técnicas de responsividade para facilitar a
                    integração do conteúdo em diferentes layouts (Mobile,
                    Tablet, Notebook...);
                  </p>
                  <div className="tempo flex flex-wrap justify-between color-main-100 fs-large">
                    <p className="font-bold">4 horas</p>
                    <p>
                      <time dateTime="2023-10">Outubro/2023</time>
                    </p>
                  </div>
                </article>
              </li>
            </ul>
          </div>

          <div className="column-trajetoria profissional w-1/2 flex flex-col gap-y-6">
            <div className="header-trajetoria text-center">
              <h4 className="mb-2">Área profissional</h4>
              <h5 className="raleway color-cod-300 font-normal">
                2023 · Atualmente
              </h5>
            </div>

            <ul className="cards-trajetoria py-2 flex flex-col gap-6">
              <li className="card-trajetoria">
                <article className="p-4 hover-main-400 transition-ease-in border-main-300 rounded-2xl">
                  <header className="mb-2">
                    <h6 className="mb-2">Desenvolvedor Web Front-End</h6>
                  </header>
                  <p className="mb-4">
                    • Trabalhei como Desenvolvedor web Front-End e Gestor de
                    Tráfego Pago na Varlik; <br /> • Fiz o desenvolvimento de
                    aplicações com automações e tráfego pago para clientes de
                    micro e médio negócios, e instituições de renome trazendo a
                    tecnologia e a inovação ao cotidiano de cada cliente gerando
                    resultados reais. <br /> • Com o trabalho em equipe em cada
                    demanda, pude aprimorar minhas habilidades ajudando uns aos
                    outros, compartilhando nossas dificuldades, aprendizados e
                    sugestões. Isso foi um grande diferencial para mim, pois
                    conseguimos fazer grandes projetos com ótimos resultados
                    estando em equipe. <br /> • Ao todo foram +10 Projetos
                    desenvolvidos que estão no ar e várias campanhas no Meta ADS
                    escaladas resultando em grandes impactos lucrativos
                    para cada cliente;
                  </p>
                  <div className="tempo flex flex-wrap justify-between color-main-100 fs-large">
                    <p className="font-bold">6 meses</p>
                    <p>
                      <time dateTime="2025-04">Abril/2025</time> -{" "}
                      <time dateTime="2025-10">Outubro/2025</time>
                    </p>
                  </div>
                </article>
              </li>
              <li className="card-trajetoria">
                <article className="p-4 hover-main-400 transition-ease-in border-main-300 rounded-2xl">
                  <header className="mb-2">
                    <h6 className="mb-2">
                      Bolsista do projeto de extensão AWE
                    </h6>
                  </header>
                  <p className="mb-4">
                    Fui bolsista do projeto de extensão Agência Web Escolar no
                    próprio IFRN por 6 meses, em que sou muito feliz por fazer
                    parte desse projeto que transformou minha visão e carreira
                    profissional, capacitando-me para o mercado de trabalho, do
                    qual em breve, se Deus quiser, irei ingressar. <br />
                    Exerci o cargo de Full Stack Develloper | Apprentice onde
                    desenvolvemos aplicações direcionadas para plataformas web,
                    com desenvolvimento do Design de uma aplicação até a sua
                    programação funcional, FrontEnd, BackEnd e até programação
                    mobile (flutter).
                  </p>
                  <div className="tempo flex flex-wrap justify-between color-main-100 fs-large">
                    <p className="font-bold">6 meses</p>
                    <p>
                      <time dateTime="2024-07">Julho/2024</time> -{" "}
                      <time dateTime="2025-01">Janeiro/2025</time>
                    </p>
                  </div>
                </article>
              </li>

              <li className="card-trajetoria">
                <article className="p-4 hover-main-400 transition-ease-in border-main-300 rounded-2xl">
                  <header className="mb-2">
                    <h6 className="mb-2">
                      Voluntário do projeto de extensão AWE
                    </h6>
                  </header>
                  <p className="mb-4">
                    Fui também voluntário no projeto de extensão do IFRN a
                    Agência Web Escolar (AWE), onde obtive muitos conhecimentos
                    profissionais desenvolvendo projetos. Ali, graças a Deus,
                    exerci o cargo de Full Stack Develloper | Apprentice.
                  </p>
                  <div className="tempo flex flex-wrap justify-between color-main-100 fs-large">
                    <p className="font-bold">7 meses</p>
                    <p>
                      <time dateTime="2024-06">Junho/2023</time> -{" "}
                      <time dateTime="2024-01">Janeiro/2024</time>
                    </p>
                  </div>
                </article>
              </li>

              <li className="card-trajetoria">
                <article className="p-4 hover-main-400 transition-ease-in border-main-300 rounded-2xl">
                  <header className="mb-2">
                    <h6 className="mb-2">
                      Tutor de aprendizagem de laboratório (TAL)
                    </h6>
                  </header>
                  <p className="mb-4">
                    No início do ano letivo de 2023 (Quando eu estava no
                    terceiro ano) me inscrevi no edital para tutores do IFRN,
                    especificamente para a disciplina técnica de Design Web e
                    Arquitetura da Informação ofertada no segundo ano. Do qual,
                    graças a Deus, fui aprovado em entrevista e tive uma
                    experiência de 8 meses auxiliando o professor na disciplina.
                  </p>
                  <div className="tempo flex flex-wrap justify-between color-main-100 fs-large">
                    <p className="font-bold">8 meses</p>
                    <p>
                      <time dateTime="2024-05">Maio/2023</time> -{" "}
                      <time dateTime="2024-01">Janeiro/2024</time>
                    </p>
                  </div>
                </article>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="sec-depoimentos container mx-auto py-16 ">
        <div className="header-depoimentos flex flex-wrap justify-between gap-y-4 mb-12">
          <div className="description-sec">
            <h6 className="sec-title py-3 px-6 color-main-100 w-max rounded-2xl bg-main-500 mb-2">
              💬 Recomendações
            </h6>
            <h2>Em depoimento</h2>
          </div>
          <div className="filter-praticas flex self-end items-center gap-x-6 color-main-300">
            <button className="flex items-center gap-x-2 hover-main-400 transition-ease-in py-4 px-5 border-main-300 rounded-2xl">
              <i className="text-3xl/none fa-solid fa-chevron-left"></i>
            </button>

            <button className="flex items-center gap-x-2 hover-main-400 transition-ease-in py-4 px-5 border-main-300 rounded-2xl">
              <i className="text-3xl/none fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>

        <div className="slide-depoimentos flex py-2 gap-x-6">
          <blockquote className="bloco-depoimento hover-main-400 transition-ease-in w-1/3 border-main-300 p-4 rounded-2xl">
            <i className="text-3xl/none color-main-300 fa-solid fa-quote-right mb-2"></i>
            <p className="mb-4">
              <q>
                Gabriel foi o companheiro mais prestativo que tive, sempre
                preocupado se seus colegas de trabalho estão com alguma
                impedimento ou dificuldade, além de sempre procurar a melhor
                qualidade e clareza de seu código, sempre em busca da evolução.
              </q>
            </p>
            <a
              href="https://www.linkedin.com/in/filipi-rafael-de-ara%C3%BAjo-cruz-673aa727a/"
              target="_blank"
            >
              <figure className="autor flex items-center gap-x-4">
                <img src="././imgs/Filipe.svg" alt="imagem do autor" />
                <div className="info-autor">
                  <h6>Filipi Rafael</h6>
                  <figcaption className="color-main-300 font-medium">
                    Full Stack Developer
                  </figcaption>
                </div>
              </figure>
            </a>
          </blockquote>
        </div>
      </section>

      <section className="sec-contact container mx-auto py-16 flex flex-col gap-y-8 items-center">
        <div className="header-contact">
          <h6 className="sec-title py-3 px-6 color-main-100 w-max rounded-2xl bg-main-500 mb-4 mx-auto">
            📬 Contatos
          </h6>
          <h2 className="">Vamos conversar!</h2>
        </div>

        <div className="contact-content flex flex-wrap justify-center w-full gap-6 color-main-300 mb-4">
          <a
            href="https://api.whatsapp.com/send/?phone=5584991700480&text&type=phone_number&app_absent=0"
            target="_blank"
            className="btn-contact flex-1 border-main-300 w-6/12 flex items-center gap-x-2 hover-main-400 hover-color-100  transition-ease-in rounded-2xl py-3 px-8"
          >
            <i className="text-5xl fa-brands fa-whatsapp"></i>
            <p className="w-full text-contact font-bold text-center fs-xlarge">
              Vamos conversar
            </p>
          </a>
          <a
            href="mailto:gabriel.pessoa.dev@gmail.com"
            target="_blank"
            className="btn-contact flex-1  border-main-300 w-6/12 flex flex-wrap items-center justify-center gap-2 hover-main-400 hover-color-100 transition-ease-in rounded-2xl py-5 px-4"
          >
            <p className="text-contact text-center fs-xlarge">
              <span className="font-bold">E-mail:</span>{" "}
              <span className="color-cod-300">
                gabriel.pessoa.dev@gmail.com
              </span>
            </p>
            <i className="text-3xl/none fa-regular fa-paper-plane"></i>
          </a>
          <a
            className="btn-contact w-6/12 bg-main-500 color-main-300 rounded-2xl hover-main-400 hover-color-100 transition-ease-in flex justify-center items-center py-5 fs-xlarge font-semibold"
            href="./imgs/CV - Gabriel Pessoa (Portfólio).pdf"
            download={"CV - Gabriel Pessoa (Portfólio).pdf"}
          >
            Baixar CV{" "}
            <i className="text-2xl/none ms-2 fa-regular fa-circle-down"></i>
          </a>
        </div>

        <a
          href=""
          className="fs-xlarge color-main-300 hover-color-100 transition-ease-in"
        >
          <i className="text-4xl/none pe-2 align-middle fa-solid fa-arrow-up-long"></i>
          Voltar ao topo
        </a>
      </section>
    </main>
  );
}
export default Main;
