import type { Dispatch, SetStateAction } from "react"

export type TipOptiom= {
    id:string
    value:number 
    label:string
}
const tipOptions:TipOptiom[] = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]
type TipPercentageFormProps={
    setTip: Dispatch<SetStateAction<number>>
    tip: number
}

const TipPercentageForm = ({setTip, tip}: TipPercentageFormProps) => {
  return (
    <div>
        <h3 className=" font-semibold text-xl">Propina</h3>
        <form>
            {tipOptions.map(tipOp=>
                <div key={tipOp.id} className="flex gap-2">
                    <label htmlFor={tipOp.id}>{tipOp.label}</label>
                    <input
                        id={tipOp.id}
                        type="radio"
                        value={tipOp.value}
                        name='Tip'
                        onChange={e=>setTip(+e.target.value)}
                        checked={tipOp.value===tip}
                    />
                </div>    
            )}
        </form>
    </div>
  )
}

export default TipPercentageForm