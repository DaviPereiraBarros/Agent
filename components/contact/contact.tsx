import Link from "next/link";
import Button from "../button/button";
import Input from "../inputs/input";
import Select from "../select/select";

export default function Contact(){
    return(
        <div className="grid grid-cols-2 items-start justify-between gap-x-24 px-[11.25rem] mb-32 bg-[url('../../assets/fundoWelcome.svg')] h-[100vH] bg-no-repeat bg-cover" id="containerContact">
           <div className="" id="texts">
                <span className="text-3xl text-green-color font-semibold">ENTRE EM CONTATO</span>
                <h1 className="font-bold text-6xl mt-8">Aumente seu resultado de vendas e performance</h1>
                <p className="text-3xl opacity-70 mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                   sed do eiusmod tempor incididunt ut labore et dolore magna</p>
            </div>

            <div className="bg-white rounded-md border-solid border-#c9c9c9 py-[38px] px-[31px]" id="form">
                <form className="flex flex-col">
                  <h1 className="text-purple-color font-bold text-4xl">Fale com um especialista</h1>
                  <Input type="text" placeholder="Nome completo" pattern="" required/>
                  <Input type="email" placeholder="E-mail profissional" pattern="" required/>
                  <Input type="text" placeholder="Celular/Whatsapp" pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$" 
                  required/>
                  <Input type="text" placeholder="Site" pattern="" required/>
                  <Select placeholder="Orçamento para mídia" options={[
                    {label: "Instagram", value:"instagram"},
                    {label: "Facebook",  value:"facebook"},
                    {label: "Linkedin",  value:"linkedin"},
                    {label: "Twitter",   value:"twitter"}
                  ]} required/>
                  
                  <Button title="Enviar" kind="bg-green-color"/>
                  
                </form>
            </div>
            <div className="col-start-2 text-center mb-[200px] text-xl px-5">
                <p>
                  Ao enviar esse formulário, você reconhece que leu e concorda 
                  com a nossa <Link href="/"><span className="font-bold">Política de Privacidade.</span></Link>    
                </p>
            </div>
        </div>
    )
}