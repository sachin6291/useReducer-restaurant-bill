import type { MenuItem } from "../types";
import { Dispatch } from "react";
import type { OrderActions } from "../reducer/orderReducer";

type MenuItemProps={
    item: MenuItem,
    dispatch: Dispatch<OrderActions>
    
}
const MenuItem = ({item, dispatch}: MenuItemProps) => {
    const{name, price}=item
    
  return (
    <button 
      className=" border-2 border-teal-400 p-2 w-full flex justify-between hover:bg-teal-300"
      onClick={()=>dispatch({type:'addItem', payload:{item}})}  
    >
        <p>{name}: </p>
        <p className="font-bold">${price}</p>
    </button>
  )
}

export default MenuItem