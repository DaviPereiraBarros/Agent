interface Option {
    value: string;
    label: string;
  }

interface PropsSelect{
   placeholder:string,
   required:boolean,
   options: Option[]
}

export default function Select({placeholder, required, options}:PropsSelect){
    return(
        <select className="w-[100%] mt-[23px] text-sm font-semibold border-none py-[22px] px-[17px] bg-#f7f7f7f7 text-black" required={required}>
            <option className="text-start" value="">{placeholder}</option>
            {options?.map((option,index) => (
                <option key={index} value={option.value}>{option.label}</option>
            ))}
        </select>
    )
}