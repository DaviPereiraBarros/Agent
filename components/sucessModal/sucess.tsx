import {FiCheckCircle} from "react-icons/fi"
import Button from "../button/button"

interface ModalProps{
    closeModal: () => void
}


export default function SucessModal({closeModal}:ModalProps){
    return(
    <div className="inset-0 flex fixed items-center justify-center top-0 bottom-0 right-0 left-0 z-[1]" onClick={closeModal}>
        <div className="absolute inset-0 bg-slate-200 opacity-80"></div>
        <div className="bg-white  w-[100%] max-w-[720px] flex flex-col justify-center items-center relative text-center py-8 px-12 rounded-2xl shadow-md">
            <div className="text-7xl text-green-500">
            <FiCheckCircle></FiCheckCircle>
            </div>
            <p className="text-3xl mt-6 text-gray-400">Email enviado com sucesso!</p>
            <div className="w-full mt-[56px] w-max[304px] h-16:" onClick={closeModal}>
                <Button title={"fechar"} kind={""} type={""}></Button>
            </div>
        </div>
    </div>
    )
}