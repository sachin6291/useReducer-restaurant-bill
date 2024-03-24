import { formatCurrency } from "../helpers"
import type { OrderItem } from "../types"

type OrderContentsProps={
    order:OrderItem[]
}

const OrderContents = ({order}: OrderContentsProps) => {   
    
  return (
    <div>
        <h2 className="text-3xl font-semibold">Consumo</h2>
        <div className="space-y-3 mt-7">
            {order.length===0?
                <p className=" text-center">Puede pedier algo de la lista del menú</p>:(
                    order.map(item=>(
                        <div key={item.id}
                        className="flex justify-between items-center border-t last-of-type:border-b border-gray-200 py-3"
                        >
                            <div>
                                <p className=" text-lg ">
                                    {item.name} - { formatCurrency(item.price)}
                                </p>
                                <p className=" font-semibold">
                                    Cantidad: {item.quantity} - {formatCurrency(item.price* item.quantity)}
                                </p>
                            </div>
                            <button
                            className=" bg-red-500 h-6 w-6 rounded-full text-white font-semibold"
                            >
                                X
                            </button>
                        </div>
                    ))
                )
            }
        </div>
    </div>
  )
}

export default OrderContents