import type { MenuItem } from "../types";

type MenuItemProps={
    item: MenuItem,
    addItem: (item: MenuItem) => void
}
const MenuItem = ({item, addItem}: MenuItemProps) => {
    const{name, price}=item
    
  return (
    <button 
      className=" border-2 border-teal-400 p-2 w-full flex justify-between hover:bg-teal-300"
      onClick={()=>addItem(item)}  
    >
        <p>{name}: </p>
        <p className="font-bold">${price}</p>
    </button>
  )
}

export default MenuItem