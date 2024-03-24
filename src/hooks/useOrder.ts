import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"


const useOrder= ()=> {
    const[order, setOrder]=useState<OrderItem[]>([])
    
    const addItem=(item: MenuItem)=>{
        const itemExists = order.find(orderItem=> orderItem.id === item.id)
        if(itemExists){
            const newOrder =order.map(orderItem=>orderItem.id===item.id ? {...orderItem, quantity:orderItem.quantity +1} :orderItem)
            setOrder(newOrder)
        }else{    
            const newItem: OrderItem = {...item, quantity: 1}
            setOrder([...order, newItem])}
    }
    return{
        order,
        addItem
    }

}
export default useOrder
