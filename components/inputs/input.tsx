

interface PropsInput{
   type:string,
   placeholder:string,
   //pattern:string,
   required:boolean,
   onBlur: React.FocusEventHandler<HTMLInputElement>,
   name: string,
   id: string,
   onChange: React.ChangeEventHandler<HTMLInputElement>,
   value: string
}

export default function Input({type, placeholder,required, onBlur, name, id, onChange, value}:PropsInput){
     return(
        <div>
            <input className="w-[100%] mt-[23px] text-sm font-semibold border-none py-[22px] px-[17px] bg-#f7f7f7f7 text-black" 
            type={type} 
            placeholder={placeholder}
            required={required}
            onBlur={onBlur}
            name={name}
            id={id}
            onChange={onChange}
            value={value}
            />
        </div>
     )
}