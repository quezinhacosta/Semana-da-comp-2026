import Image from "next/image";
import "./globals.css"; 

export default function Home() {
  return (
    <main className="main-container">
      <div className="creative-card">
        
        <header className="header-section">
          <h1>Quezia Costa</h1>
          <p className="subtitle"><strong>Bem-vindos ao último dia da semana da tecnologia!</strong></p>
          <p className="description">Entenda o processo de aplicação e como usar a IA a seu favor.</p>
        </header>

        <section className="profile-section">
          <div className="photo-wrapper">
            <img 
              src="/minha-foto.png" 
              alt="Quezia Costa" 
            />
          </div>
          
          <ul className="info-list">
            <li>Futura cientista da computação</li>
            <li>Bolsista PIBIC: Apps gamificados para alfabetização</li>
            <li>Estagiária Fullstack com foco em IA no CIA/FASA</li>
            <li>Mãe de gata tricolor </li>
            <li>Liderança no projeto Padawan</li>
          </ul>
        </section>

        <div className="button-wrapper">
          <a 
            href="LINK_DO_SEU_REPOSITORIO_AQUI" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-desafio"
          >
             Veja o desafio
          </a>
        </div>
      </div>
    </main>
  );
}