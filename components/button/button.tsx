
interface bttnProps {
    title:string,
    kind:string
}

export default function Button({title, kind}:bttnProps)
{
    const generationClassByKind = () => {
        if(kind ==="bg-gray-color") return "bg-gray-color";

        return "bg-green-color"
    }

    return(
        <button className={`py-[15px] px-12 rounded-md text-base font-bold ${generationClassByKind()}`}>{title}</button>
    )
}