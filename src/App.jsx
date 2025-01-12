import panel from ".//BattlePanel.png"
import crix from "./CrixSans.png"

function App() {

  return (
    <div className="bg-black px-20" >

      {/*HERO*/}    
    
      <div className="flex p-3 bg-black space-x-3 h-[500px]">

      <div className="flex justify-center bg-transparent w-1/2 h-full" >
          <img className="w-full h-full" src={panel} alt="" />
          </div>
          <div className="flex justify-center bg-transparent w-1/2 h-full" >
          <img className="w-96 h-full" src={crix} alt="" />
          
          </div>
          <div className="flex justify-center bg-transparent w-1/2 h-full" >
          <img className="scale-x-[-1] w-full h-full " src={panel} alt="" />
          </div>
      </div>

      
      {/*HERO*/}    
         
      <div className="bg-Black h-72 border-[14px] " >
      
      <h1 className="text-start text-4xl">Hola Soy Crix</h1>
      
   
      </div>

      <div className="h-2 py-28">

      </div>
      <button class="btn-primary">
        Hola
    </button>
    <button className="font-medium bg-black text-white border-[5px] hover:border-[#ffff00] hover:text-[#ffff00] ">
        adios
      </button>
  
    </div>
  )
}

export default App
