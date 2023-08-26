interface Option {
    value: string;
    label: string;
  }

interface PropsSelect{
   placeholder:string,
   required:boolean,
   options: Option[],
   name: string,
   id: string,
   onChange: React.ChangeEventHandler<HTMLSelectElement>,
   value: string
}

export default function Select({placeholder, required, options, onChange, name, id, value}:PropsSelect){
    return(
        <select className="w-[100%] mt-[23px] text-sm font-semibold border-none py-[22px] px-[17px] bg-#f7f7f7f7 text-black" 
        required={required}
        onChange={onChange}
        name={name}
        id={id}
        value={value}
        >
            <option className="text-start" value="">{placeholder}</option>
            {options?.map((option,index) => (
                <option key={index} value={option.value}>{option.label}</option>
            ))}
        </select>
    )
}