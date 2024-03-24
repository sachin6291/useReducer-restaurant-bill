import { menuItems } from "./data/db"
import MenuItem from "./components/MenuItem"
import useOrder from "./hooks/useOrder"
import OrderContents from "./components/OrderContents"

function App() {

  const{order ,addItem}=useOrder()

  

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
                addItem={addItem}
                />
            ))}
          </div>
        </div>
        <div className=" border border-dashed border-slate-300 p-5 space-y-10 ">
          <OrderContents
          order={order}
          />
        </div>
      </main>
  
    </>
  )
}

export default App
