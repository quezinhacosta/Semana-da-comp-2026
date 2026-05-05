import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <main className="main-container">
      <div className="creative-card">
        
        <div className="header-title">Quezia Costa</div>
        
        <p className="header-text">
          <strong>Bem-vindos ao último dia da semana da tecnologia!</strong>
        </p>
        
        <p className="header-text">
          Entenda o processo de aplicação e como usar a IA a seu favor.
        </p>

        <div className="profile-wrapper">
          
          
          <ul className="custom-list">
            <li>Futura cientista da computação</li>
            <li>Bolsista PIBIC: Apps gamificados para alfabetização</li>
            <li>Estagiária Fullstack com foco em IA no CIA/FASA</li>
            <li>Mãe de gata tricolor</li>
            <li>Participante da liderança no projeto de extensão Padawan</li>
          </ul>
        </div>

        <a 
          href="LINK_DO_SEU_REPOSITORIO_AQUI" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-action"
        >
          Veja o desafio
        </a>
      </div>
    </main>
  );
}