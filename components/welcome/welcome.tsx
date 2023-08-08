import Iamge from "next/image"
import Button from "../button/button";
import CardWelcome from '../../assets/cardWelcome.svg'

export default function Welcome()
{
    return(
        <div className="grid grid-cols-2 px-44 pt-[190px] bg-[url('../../assets/fundoWelcome.svg')] h-[100vH] bg-no-repeat bg-cover" id="container">
            <div className="my-10" id="text">
                <h1 className="my-6 font-bold text-6xl">Melhor agência de marketing do RJ</h1>
                <p className="my-6 text-2xl opacity-[0.8]">Somos uma agência de perfomance digital, aceleramos vendas e
                    aquisição de leads para grande marcas.
                </p>
                <Button title="Aumentar vendas" kind="bg-gray-color"/>
            </div>
            <div className="text-end pl-14" id="image">
             <Iamge src={CardWelcome} alt="CardWelcome" width={520}></Iamge>
            </div>
        </div>
    )
}