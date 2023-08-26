'use client';
import { useFormik} from "formik";
import { useState } from "react";
import axios from "axios";
import * as Yup from "yup";

import Link from "next/link";
import Button from "../button/button";
import Input from "../inputs/input";
import Select from "../select/select";
import Loading from "../loading/loading";
import SucessModal from "../sucessModal/sucess";
import FailModal from "../failModal/failModal";

export default function Contact(){

  const [isLoading, setLoading] = useState(false)
  const [isSucessModal, setSucessModal] = useState(false)
  const [isFailModal, setFailModal] = useState(false)

  const formik = useFormik({
    initialValues: {
      name: "",
      email:"",
      phone: "",
      site: "",
      midia: ""
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Campo Obrigatório"),
      email: Yup.string().email("E-mail Inválido").required("Campo Obrigatório"),
      phone: Yup.string().matches(/^\d{11}$/, "Digite um telefone válido"),
      site: Yup.string(),
      midia: Yup.string(),
    }),

    validateOnChange: false,
    validateOnBlur: false,   
    onSubmit: (values) => handleSubmitForm(values),
  });

    const handleSubmitForm = (values) => {
      setLoading(true)
      axios.post('/api/sendemail', {messageBody: `Nome: ${values.name}, Email: ${values.email}, Telefone: ${values.phone}, Site: ${values.site}, Midia: ${values.midia}`})
      .then(()=>{console.log("enviado")
        formik.resetForm();
        setLoading(false)
        setSucessModal(true)
      })
      .catch(()=>{console.log("erro")
        setLoading(false)
        setFailModal(true)
      })
    }

    const closeModal = () => {
      setFailModal(false)
      setSucessModal(false)
    }
    
    return(
      <div id="contact">
        {isSucessModal && <SucessModal closeModal={closeModal}/>}
        {isFailModal && <FailModal closeModal={closeModal}/>}
        {isLoading && <Loading/>}
        <div className="max-sm:grid-cols-1 grid grid-cols-2 items-start justify-between gap-x-24 px-[11.25rem] mb-32 bg-[url('../../assets/fundoWelcome.svg')] h-[100vH] bg-no-repeat bg-cover" id="containerContact">
           <div className="max-sm:col-span-2" id="texts">
                <span className="max-sm:text-xl max-sm:ml-[-7rem] text-3xl text-green-color font-semibold">ENTRE EM CONTATO</span>
                <h1 className="max-sm:text-2xl max-sm:w-[20rem] max-sm:text-center max-sm:ml-[-8.5rem] font-bold text-6xl mt-8">Aumente seu resultado de vendas e performance</h1>
                <p className="max-sm:text-lg max-sm:ml-[-7rem] max-sm:w-[16rem] text-3xl opacity-70 mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                   sed do eiusmod tempor incididunt ut labore et dolore magna</p>
            </div>
            
            <div className="max-sm:mt-12 max-sm:col-span-2 max-sm:w-[310px] max-sm:ml-[-145px] bg-white rounded-md border-solid border-#c9c9c9 py-[38px] px-[31px]" id="form">
                  <h1 className="text-purple-color font-bold text-4xl">Fale com um especialista</h1>
                  <form id="formulario" onSubmit={formik.handleSubmit}>
                  <Input type="input" value={formik.values.name} placeholder="Nome completo" required onBlur={formik.handleBlur} name="name" id={"name"} onChange={formik.handleChange}/>
                  <Input type="email" value={formik.values.email} placeholder="E-mail profissional" required onBlur={formik.handleBlur} id="email" name={"email"} onChange={formik.handleChange}/>
                  <Input type="text" value={formik.values.phone} placeholder="Celular/Whatsapp" 
                  required onBlur={formik.handleBlur} id="phone" name={"phone"} onChange={formik.handleChange}/>
                  <Input type="text" value={formik.values.site} placeholder="Site" required onBlur={formik.handleBlur} id="site" name={"site"} onChange={formik.handleChange}/>
                  <Select placeholder="Orçamento para mídia" value={formik.values.midia} onChange={formik.handleChange} id="midia" name={"midia"} options={[
                    {label: "Instagram", value:"instagram"},
                    {label: "Facebook",  value:"facebook"},
                    {label: "Linkedin",  value:"linkedin"},
                    {label: "Twitter",   value:"twitter"}
                  ]} required/>
                  
                 
                  <Button type="submit" title="Enviar" kind="bg-green-color"/>
                  </form>
            </div>
            <div className="max-sm:w-[12rem] max-sm:col-span-2 col-start-2 text-center mb-[200px] text-xl px-5">
                <p className="max-sm:mt-5 max-sm:text-xs max-sm:ml-[-170px]">
                  Ao enviar esse formulário, você reconhece que leu e concorda 
                  com a nossa <Link href="/"><span className="font-bold">Política de Privacidade.</span></Link>    
                </p>
            </div>
        </div>
        </div>
    )
}

