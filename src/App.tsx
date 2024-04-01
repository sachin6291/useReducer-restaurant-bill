import { menuItems } from "./data/db"
import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotal from "./components/OrderTotal"
import TipPercentageForm from "./components/TipPercentageForm"
import { useReducer } from "react"
import { initialState, orderReducer } from "./reducer/orderReducer"

function App() {

 

  const[state, dispatch]=useReducer( orderReducer, initialState)

  

  return (
    <>
      <header className=" bg-teal-400 py-5">
        <h1 className=" text-center text-4xl font-bold">Calculadora de Consumo y Propinas</h1>
      </header>

      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className=" p-5">
          <h2 className=" text-3xl font-semibold">Menú</h2>
          <div className=" space-y-3 mt-7">
            {menuItems.map(item=>(
              <MenuItem
                key={item.id}
                item={item}
                dispatch={dispatch}
                
                />
            ))}
          </div>
        </div>
        <div className=" border border-dashed border-slate-300 p-5 space-y-10 ">
          {state.order.length ?(
            <>
              <OrderContents
              order={state.order}
              dispatch={dispatch}
              />
              <TipPercentageForm
              dispatch={dispatch}
              tip={state.tip}
              />
              <OrderTotal          
              order={state.order}
              tip={state.tip}
              dispatch={dispatch}
              />
            </>
          ):(
            <p className=" text-center">Puede pedier algo de la lista del menú</p>
          )}
        </div>
      </main>
  
    </>
  )
}

export default App
