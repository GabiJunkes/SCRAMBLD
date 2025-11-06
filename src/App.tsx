import './App.css'

function App() {

  return (
    <>
      <form className="flex-col items-center w-screen h-screen">

        <div id="categories" className="flex justify-between items-center m-10">     
          <div className="flex items-center gap-2">
            <div className="cat_image" style={{backgroundImage: "url('./src/assets/hkty.jpeg')"}}>categoria 1 </div> 
          </div>
          <div className="h-18 bg-linear-to-r from-green-300 to-pink-500 rounded-2xl px-4 py-2 shadow-md content-center">categoria 2</div>
          <div className="h-18 bg-linear-to-r from-green-300 to-yellow-300 rounded-2xl px-4 py-2 shadow-md content-center">categoria 3</div> 
            {/*imagem no fundo das categorias ou apenas cor e texto?*/}
        </div>
        
        <div className='flex-col justify-center items-center w-screen'>

          <div className='text-8xl px-4 mb-0 md:px-10 md:text-8xl'>SCRAMBLE</div> {/* usar imagem para a logo? */}

          <div className="mb-5r flex flex-col items-center border-2 border-amber-300">
            <input type="text" id="words" className="md:basis-2/5 max-w h-20 p-5 bg-amber-200 text-pink-500 text-m rounded-full hover:border-4 hover:border-amber-600   ]" 
            placeholder="Digite suas palavras!"/>
            <button>aa</button>
          </div>

        </div>
    </form>
    </>
  )
}

export default App
