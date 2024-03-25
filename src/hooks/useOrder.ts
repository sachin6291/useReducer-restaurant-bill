import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"


const useOrder= ()=> {
    const[order, setOrder]=useState<OrderItem[]>([])
     const[tip, setTip]=useState(0)
    
    const addItem=(item: MenuItem)=>{
        const itemExists = order.find(orderItem=> orderItem.id === item.id)
        if(itemExists){
            const newOrder =order.map(orderItem=>orderItem.id===item.id ? {...orderItem, quantity:orderItem.quantity +1} :orderItem)
            setOrder(newOrder)
        }else{    
            const newItem: OrderItem = {...item, quantity: 1}
            setOrder([...order, newItem])}
    }

    const removeItem=(id: OrderItem['id'])=>{
        const updateOrder=order.filter(orderItem=>orderItem.id !==id)
        setOrder(updateOrder);
    }

    const placeOrder=()=>{
        setOrder([])
        setTip(0)
        
    }

    return{
        order,
        tip, 
        setTip,
        addItem,
        removeItem,
        placeOrder
    }

}
export default useOrder
