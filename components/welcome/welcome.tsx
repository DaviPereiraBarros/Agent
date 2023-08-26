import Iamge from "next/image"
import Button from "../button/button";
import CardWelcome from '../../assets/cardWelcome.svg'

export default function Welcome()
{
    return(
        <div className="max-sm:bg-auto max-sm:grid-cols-1 grid grid-cols-2 px-44 pt-[190px] bg-[url('../../assets/fundoWelcome.svg')] h-[100vH] bg-no-repeat bg-cover" id="container">
            <div className="my-10" id="text">
                <h1 className="max-sm:mt-[-4rem] max-sm:text-3xl max-sm:w-[300px] max-sm:ml-[-110px] max-sm:my-0 my-6 font-bold text-6xl">Melhor agência de marketing do RJ</h1>
                <p className="max-sm:w-[300px] max-sm:break-words max-sm:ml-[-110px] max-sm:text-base my-6 text-2xl opacity-[0.8]">Somos uma agência de perfomance digital, aceleramos vendas e
                    aquisição de leads para grande marcas.
                </p>
                
                <div className="max-sm:ml-[-100px]">
                <Button title="Aumentar vendas" kind="bg-gray-color" type={"button"}/>
                </div>

            </div>
            <div className="max-sm:mt-[-170px] max-sm:row-start-1 max-sm:w-96 max-sm:ml-[-192px] text-end pl-14" id="image">
             <Iamge src={CardWelcome} alt="CardWelcome"></Iamge>
            </div>
        </div>
    )
}