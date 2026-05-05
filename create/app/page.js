import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 space-y-6">
        
      
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-indigo-600">Quezia Costa</h1>
          <p className="text-xl font-medium text-gray-700">
            Bem-vindos ao último dia da semana da tecnologia!
          </p> 
          <p className="text-gray-500">
            Aqui você vai entender como funciona o processo de aplicação e como usar a Inteligência Artificial a seu favor.
          </p>
        </header>

  
        <div className="flex flex-col md:flex-row gap-8 items-center bg-indigo-50 p-6 rounded-xl">
          <div className="w-32 h-32 relative overflow-hidden rounded-full border-4 border-indigo-200">
          
            <img 
              src="/minha-foto.png" 
              alt="Quezia Costa" 
              className="object-cover w-full h-full"
            />
          </div>
          
          <ul className="space-y-2 text-gray-700 list-disc pl-5">
            <li>Futura cientista da computação</li>
            <li>Bolsista PIBIC: Apps gamificados para alfabetização (Dislexia)</li>
            <li>Estagiária Fullstack com foco em IA no CIA/FASA</li>
            <li>Mãe de gata tricolor</li>
            <li>Liderança no projeto de extensão Padawan</li>
          </ul>
        </div>

       
        <div className="flex justify-center pt-4">
          <a 
            href="LINK_DO_SEU_REPOSITORIO_AQUI" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-indigo-600 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-700 shadow-lg hover:shadow-indigo-200"
          >
           Veja o desafio
          </a>
        </div>
      </div>
    </main>
  );
}