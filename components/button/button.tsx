interface bttnProps {
    title:string,
    kind:string,
    type: "button" | "submit" | "reset"
    
}

export default function Button({title, kind, type}:bttnProps)
{
    const generationClassByKind = () => {
        if(kind ==="bg-gray-color") return "bg-gray-color";

        return "bg-green-color"
    }

    return(
        <button className={`max-sm:whitespace-nowrap max-sm:mt-[15px] py-[15px] px-12 rounded-md text-base font-bold ${generationClassByKind()}`} type={type} >{title}</button>
    )
}