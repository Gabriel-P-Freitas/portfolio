import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/output.css";
import "./assets/styles/style.css";

import Header from "./components/header.jsx";
import Main from "./components/main.jsx";
import Footer from "./components/footer.jsx";

// function OnToggleClickMenu(){
//   let = menuToggle =
//   if (menuToggle.addEventListener('click', () => {
//     // Adiciona ou remove a classe 'active' no elemento mobileMenu
//     mobileMenu.classList.add('active');
//   }));
//   else{
//     mobileMenu.classList.remove('active');
//   }
// }

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />

    <Main />

    <Footer />
  </StrictMode>
);
