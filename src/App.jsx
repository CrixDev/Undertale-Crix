import { useState } from "react"
import panel from ".//BattlePanel.png"
import crix from "./CrixSans.png"

function App() {

  const Text = [
     "hola Soy Crix",
     "Bienvenido a refactor web de Undertale",
     "Esta es una experiencia basada en el juego y como trato de representar su estetica, arte y diseño grafico al mundo web.",
     "De igual manera en esta experiencia te mostrare partes de la historia, curiosidades y analisis interesantes de este juego. Disfruta",
    
  ]

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () =>{
    if (currentIndex < Text.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }
  


  return (
    <body className="bg-black cursor-Corazon">
      
    <div className="bg-black md:px-20" >

      {/*HERO*/}    
    
      <div className="flex p-3 bg-black space-x-3 h-[500px]">

      <div className=" hidden md:flex justify-center bg-transparent w-1/2 h-full" >
          <img className="w-full h-full" src={panel} alt="" />
          </div>
          <div className="flex justify-center bg-transparent md:w-1/2 h-full" >
          <img className="w-96 h-full" src={crix} alt="" />
          
          </div>
          <div className="hidden md:flex justify-center bg-transparent w-1/2 h-full" >
          <img className="scale-x-[-1] w-full h-full " src={panel} alt="" />
          </div>
      </div>

      
      {/*HERO*/}    
         
      <div className="flex flex-col justify-between bg-Black md:h-72 border-[14px]  px-5 " >
      
      <h1 className=" text-white text-start text-wrap text-2xl">
      {Text[currentIndex]}
      </h1>
      
      <div className="flex bg-transparent  w-full justify-end py-5 px-1">

      <button
       onClick={handleNext}
       disabled={currentIndex === Text.length - 1}
      className=" px-2 py-2 bg-black text-white border-[5px] hover:border-[#ffff00] hover:text-[#ffff00] antialiased hover:cursor-Corazon">
        SIGUIENTE
      </button>
  
      </div>
      </div>

      <div className="h-2 py-28">
        <div></div>
              <div></div>
      </div>
    
    </div>
    
    </body>
  )
}

export default App
