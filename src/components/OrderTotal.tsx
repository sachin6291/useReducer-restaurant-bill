import { useMemo, Dispatch } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"
import type { OrderActions } from "../reducer/orderReducer"

type OrderTotalProps={
    order:OrderItem[]
    tip:number
    dispatch: Dispatch<OrderActions>
}

const OrderTotal = ({order, tip, dispatch}: OrderTotalProps) => {

    const subtotalAmount=useMemo (()=>order.reduce((total, item)=>total+(item.price*item.quantity),0),[order])
    const tipAmount= useMemo(()=>subtotalAmount*tip,[tip, order])
    const totalAmount= useMemo(()=>subtotalAmount+tipAmount,[tip, order])
    return (
        <>
            <div className=" space-y-3">
                <h2 className=" font-semibold text-xl">Total y Propina:</h2>
                <p>Subtotal a pagar: {''}
                    <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
                </p>
                <p>Propina: {''}
                    <span className="font-bold">{formatCurrency(tipAmount)}</span>
                </p>
                <p>Total a pagar: {''}
                    <span className="font-bold">{formatCurrency(totalAmount)}</span>
                </p>
            </div>
            <button
                className=" w-full  border-2 border-black font-semibold p-2 text-xl hover:bg-black hover:text-white "
                onClick={()=>dispatch({type:'palceOrder'})}
            >
                Guardar Orden
            </button>
        </>
  )
}

export default OrderTotal