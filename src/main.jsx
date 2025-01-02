import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/output.css'
import './assets/style.css'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <main>
      <section className="hero container mx-auto flex justify-between items-center py-16">
        <div className="personal-description flex flex-col gap-y-4">
          <h6 className='sec-title py-3 px-6 color-main-100 w-max rounded-2xl bg-main-500'>👋 Saudações!</h6>
          <h1>Gabriel Pessoa</h1>
          <h6 className='font-normal'>Full Strack Developer | Junior</h6>
          <ul className="flex gap-x-4 items-center justify-self-start">
            <li><a className="social-links w-max h-max" href="https://github.com/Gabriel-P-Freitas" target="_blank"><i className="text-4xl align-middle transition-ease-in fa-brands fa-github"></i></a></li>
            <li><a className="social-links" href="https://www.linkedin.com/in/gabriel-pessoa-27239427b/" target="_blank"><i className="text-4xl align-middle transition-ease-in rounded-full fa-brands fa-linkedin"></i></a></li>
          </ul>
        </div>
        
        <picture>
          <source srcSet='src/assets/imgs/avatar-mobile.svg'
           media='(max-width: 576px)'/>
          <source srcSet='src/assets/imgs/avatar-tablet.svg' media='(max-width: 992px)'/>
          <img src="src/assets/imgs/avatar-desktop.svg" alt="Avatar Gabriel" />
        </picture>

        <div className="buttons-contact flex flex-col gap-y-4 items-end">
          <button className='bg-main-500 rounded-2xl w-max'>
            <a className='color-main-300 px-10 flex items-center py-3' href="#" target='_blank'>Baixar CV <i className="text-xl/none ms-2 fa-regular fa-circle-down"></i></a>
          </button>
          <button className='border-main-300 rounded-2xl w-max'>
            <a className='color-main-300 flex items-center px-4 py-3' href="#" target='_blank'><i className="text-2xl/none me-2 fa-brands fa-whatsapp"></i> Vamos conversar</a>
          </button>

        </div>

      </section>

      <section className='bg-main-500 py-16'>
        <div className="content container mx-auto flex items-center gap-x-6">
          <picture>
            <source srcSet='src/assets/imgs/perfil-responsive.svg' media="(max-width: 992px)" />
          
            <img src="src/assets/imgs/perfil-desktop.svg" alt="Meu perfil" />
          </picture>
          
          <div className="sobre-mim w-7/12 flex flex-col gap-y-4">
            <h6 className='sec-title py-3 px-6 color-main-100 w-max rounded-2xl bg-main-500'>🧐 Sobre mim</h6>
            <h2>Gabriel Pessoa</h2>
            <dl className='flex flex-col gap-y-3'>
              <dd>
                <p className='fs-large'>👋 Me chamo Gabriel Pessoa de Queiroz Freitas, mas pode me chamar apenas de Gabriel. Prazer!</p>
              </dd>
              <dd>
                <p className='fs-large'>👨‍💻 Há mais de 3 anos desenvolvo interfaces com JavaScript, CSS e HTML.</p>
              </dd>
              <dd>
                <p className='fs-large'>🎓 Cursando o último período do curso Informática para Internet integrado ao ensino médio no Instituto Federal de Ciências e Tecnologia do Rio Grade do Norte (IFRN).</p>
              </dd>
              <dd>
                <p className='fs-large'>💡 Interesses em desenvolvimento Front-end com JavaScript, React e TailwindCSS.</p>
              </dd>
              <dd>
                <p className='fs-large'>🚀 Buscando ser um pouquinho melhor do que ontem todos dias.</p>
              </dd>
            </dl>

          </div>
        </div>


      </section>

      <section className='py-16 border-end-main-300'>
        <div className="my-experience container mx-auto flex flex-wrap justify-center gap-6">
          <button className='border-main-300 w-80 rounded-2xl px-1 py-6 flex flex-col items-center gap-y-2'>
            <img src="src/assets/imgs/codeIcon.svg" alt="Ícone de código" />
            <p>3 anos de</p>
            <h5>Programação</h5>
          </button>

          <button className='border-main-300 w-80 rounded-2xl px-1 py-6 flex flex-col items-center gap-y-2'>
            <img src="src/assets/imgs/projectsIcon.svg" alt="Ícone Kanban" />
            <p>2 anos de</p>
            <h5>Expêriencia Profissional</h5>
          </button>

          <button className='border-main-300 color-main-100 bg-main-500 w-80 flex-auto rounded-2xl px-1 py-6 flex flex-col items-center gap-y-2'>
            <h4 className='color-main-100'>Full Stack</h4>
            <p className='fs-large'>Desenvolvedor</p>
          </button>

          <button className='border-main-300 color-main-100 bg-main-500 w-80 flex-auto rounded-2xl px-1 py-6 flex flex-col items-center gap-y-2'>
            <h4 className='color-main-100'>Experiência</h4>
            <p className='fs-large'>Em dezenas de projetos</p>
          </button>
        </div>

        
      </section>

      <section className='sec-praticas-projetos container mx-auto py-16'>
        <div className="header-praticas flex justify-between items-end mb-12">
          <div className="description-sec">
            <h6 className='sec-title py-3 px-6 color-main-100 w-max rounded-2xl bg-main-500 mb-2'>🔗 Portfólio</h6>
            <h2>Práticas e projetos</h2>
          </div>
          <div className="filter-praticas flex items-center gap-x-8">
            <button className="flex items-center gap-x-2 hover-main-400 transition-ease-in py-3 px-6 border-main-300 rounded-2xl">
              <img src="src/assets/imgs/projects.svg" alt="" />
              <h6 className="font-semibold color-main-300">Projetos</h6>
            </button>

            <button className="flex items-center gap-x-2 hover-main-400 transition-ease-in py-3 px-6 border-main-300 rounded-2xl">
              <img src="src/assets/imgs/praticasIcon.svg" alt="" />
              <h6 className="font-semibold color-main-300">Práticas</h6>
            </button>
          </div>
        </div>

        <ul className='grid grid-cols-3 gap-6'>
          <li>
            <button className='card-pratica text-start hover-main-400 transition-ease-in flex flex-col justify-between h-96 p-6 border-main-300 rounded-2xl'>
              <div>
                <h6 className="mb-4">TYPOGRAPH</h6>
                <p className="mb-2">Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.</p>
                <dl className="flex gap-2 color-main-100">
                  <dd className="fs-xsmall font-extrabold bg-main-500 py-1 px-2 rounded">HTML</dd>
                  <dd className="fs-xsmall font-extrabold bg-main-500 py-1 px-2 rounded">CSS</dd>
                  <dd className="fs-xsmall font-extrabold bg-main-500 py-1 px-2 rounded">SCSS</dd>
                  <dd className="fs-xsmall font-extrabold bg-main-500 py-1 px-2 rounded">BootStrap</dd>
                </dl>
              </div>
              <div className="bottom-pratica">
                <img className='mb-4' src="src/assets/imgs/typograph-pratica.svg" alt="image project or pratica" />
                <nav className="flex items-center gap-x-4">
                  <a className='anchor-projects github-anchor color-main-300' href="https://github.com/Gabriel-P-Freitas/TYPOGRAPH" target='_blank'><i className="text-5xl align-baseline transition-ease-in fa-brands fa-github"></i></a>
                  <a className='anchor-projects figma-anchor bg-main-400 px-2 py-1 color-main-200 rounded-full transition-ease-in' href="https://www.figma.com/design/8HL0mnmzdKAiNl4RDDiqad/Tipograph?node-id=1-113&t=TTbyZs7mUX5ZITNw-0" target='_blank'><i className="w-8 h-8 align-middle text-center fa-brands fa-figma"></i></a>
                </nav>
              </div>

            </button>
          </li>
          <li>
            <a className='card-pratica hover-main-400 transition-ease-in flex flex-col justify-between h-96 p-6 border-main-300 rounded-2xl' href="" target='_blank'>
              <div>
                <h6 className="mb-4">Move.it</h6>
                <p className="mb-2">Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.</p>
                <dl className="flex gap-2 color-main-100">
                  <dd className="fs-xsmall font-extrabold bg-main-500 py-1 px-2 rounded">HTML</dd>
                  <dd className="fs-xsmall font-extrabold bg-main-500 py-1 px-2 rounded">HTML</dd>
                  <dd className="fs-xsmall font-extrabold bg-main-500 py-1 px-2 rounded">HTML</dd>
                </dl>
              </div>
              <img src="src/assets/imgs/project-pratica.svg" alt="image project or pratica" />
            </a>
          </li>
          <li>
            <a className='card-pratica hover-main-400 transition-ease-in flex flex-col justify-between h-96 p-6 border-main-300 rounded-2xl' href="" target='_blank'>
              <div>
                <h6 className="mb-4">Move.it</h6>
                <p className="mb-2">Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.</p>
                <dl className="flex gap-2 color-main-100">
                  <dd className="fs-xsmall font-extrabold bg-main-500 py-1 px-2 rounded">HTML</dd>
                  <dd className="fs-xsmall font-extrabold bg-main-500 py-1 px-2 rounded">HTML</dd>
                  <dd className="fs-xsmall font-extrabold bg-main-500 py-1 px-2 rounded">HTML</dd>
                </dl>
              </div>
              <img src="src/assets/imgs/project-pratica.svg" alt="image project or pratica" />
            </a>
          </li>
          <li>
            <a className='card-pratica hover-main-400 transition-ease-in flex flex-col justify-between h-96 p-6 border-main-300 rounded-2xl' href="" target='_blank'>
              <div>
                <h6 className="mb-4">Move.it</h6>
                <p className="mb-2">Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.</p>
                <dl className="flex gap-2 color-main-100">
                  <dd className="fs-xsmall font-extrabold bg-main-500 py-1 px-2 rounded">HTML</dd>
                  <dd className="fs-xsmall font-extrabold bg-main-500 py-1 px-2 rounded">HTML</dd>
                  <dd className="fs-xsmall font-extrabold bg-main-500 py-1 px-2 rounded">HTML</dd>
                </dl>
              </div>
              <img src="src/assets/imgs/project-pratica.svg" alt="image project or pratica" />
            </a>
          </li>
          <li>
            <a className='card-pratica hover-main-400 transition-ease-in flex flex-col justify-between h-96 p-6 border-main-300 rounded-2xl' href="" target='_blank'>
              <div>
                <h6 className="mb-4">Move.it</h6>
                <p className="mb-2">Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.</p>
                <dl className="flex gap-2 color-main-100">
                  <dd className="fs-xsmall font-extrabold bg-main-500 py-1 px-2 rounded">HTML</dd>
                  <dd className="fs-xsmall font-extrabold bg-main-500 py-1 px-2 rounded">HTML</dd>
                  <dd className="fs-xsmall font-extrabold bg-main-500 py-1 px-2 rounded">HTML</dd>
                </dl>
              </div>
              <img src="src/assets/imgs/project-pratica.svg" alt="image project or pratica" />
            </a>
          </li>
          <li>
            <a className='card-pratica hover-main-400 transition-ease-in flex flex-col justify-between h-96 p-6 border-main-300 rounded-2xl' href="" target='_blank'>
              <div>
                <h6 className="mb-4">Move.it</h6>
                <p className="mb-2">Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.</p>
                <dl className="flex gap-2 color-main-100">
                  <dd className="fs-xsmall font-extrabold bg-main-500 py-1 px-2 rounded">HTML</dd>
                  <dd className="fs-xsmall font-extrabold bg-main-500 py-1 px-2 rounded">HTML</dd>
                  <dd className="fs-xsmall font-extrabold bg-main-500 py-1 px-2 rounded">HTML</dd>
                </dl>
              </div>
              <img src="src/assets/imgs/project-pratica.svg" alt="image project or pratica" />
            </a>
          </li>
        </ul>



      </section>

    </main>

    <Footer />
  </StrictMode>,
)
