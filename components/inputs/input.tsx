interface PropsInput{
   type:string,
   placeholder:string,
   pattern:string,
   required:boolean
}

export default function Input({type, placeholder,pattern,required}:PropsInput){
     return(
        <div>
            <input className="w-[100%] mt-[23px] text-sm font-semibold border-none py-[22px] px-[17px] bg-#f7f7f7f7 text-black" 
            type={type} 
            placeholder={placeholder}
            pattern={pattern} 
            required={required}/>
        </div>
     )
}