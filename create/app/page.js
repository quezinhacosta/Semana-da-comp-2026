import Image from "next/image";
import "./globals.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className="main-container">
      <div className="creative-card">
        
        <div className="header-title">Quezia Costa</div>

        <p className="header-text">
          <strong>Criação de uma aplicação web: do planejamento à implementação com uso de IA</strong>
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
          href="https://github.com/quezinhacosta/Jarvis-Minicurso" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-action"
        >
          Veja o desafio
        </a>

        <div className="meus-links">
        <nav>
          <br></br>
          <Link href="https://www.linkedin.com/in/quezia-costa-5195342b3/">Linkedin</Link>
          <Link href="https://github.com/quezinhacosta">Github</Link>
        </nav>
      </div>
      </div>
    </main>
  );
}