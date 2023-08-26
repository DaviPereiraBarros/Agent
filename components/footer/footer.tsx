import Image from "next/image"
import Logo from '../../assets/agência.svg'
import Link from "next/link"
import IconInstagram from '../../assets/Icon awesome-instagram.svg'
import IconLinkedin from '../../assets/Icon awesome-linkedin.svg'
import IconYoutube from '../../assets/Icon awesome-youtube.svg'
import IconFacebook from '../../assets/Icon awesome-facebook-f.svg'

export default function Footer(){
    return(
        <div className="max-sm:mt-[30rem] max-sm:ml-[-13rem] max-sm:grid-cols-1 grid grid-cols-4 bg-purple-footer px-44 py-[58px]" id="containerFooter">
            <div className="max-sm:col-span-2 max-sm:w-[21.5rem]">
                <div className="max-sm:ml-[9rem]">
                <Image src={Logo} alt="logoFooter"/>
                </div>
                <h1 className="max-sm:ml-[9.5rem] mt-4 text-xl font-bold">0800 800 800</h1>
                <p className="max-sm:ml-[7rem] mt-4 text-lg">comercial@agencia.com.br</p>
            </div>

            <div className="max-sm:col-span-2 mt-[4.5rem]">
                <h1 className="max-sm:ml-[10.5rem] text-green-color text-2xl font-bold">MENU</h1>
                <p className="max-sm:ml-[9.75rem] max-sm:w-[7rem] text-lg">Quem somos</p>
                <p className="max-sm:ml-[9.75rem] text-lg">Cases</p>
            </div>

            <div className="max-sm:col-span-2 mt-[4.5rem]">
                <h1 className="max-sm:ml-[9rem] text-green-color text-2xl font-bold">CONTEÚDO</h1>
                <p className="max-sm:ml-[9.75rem] text-lg">E-books</p>
                <p className="max-sm:ml-[9.75rem] max-sm:w-[10rem] text-lg">Fórmulas prontas</p>
            </div>

            <div className=" max-sm:col-span-2 mt-[4.5rem]">
                <h1 className="max-sm:ml-[10rem] text-green-color text-2xl font-bold">SOCIAL</h1>
                <div className="max-sm:ml-[7rem] max-sm:w-56 grid grid-cols-4">
                <Link className="mt-3" href="/"><Image src={IconInstagram} alt="Icon Instagram"></Image></Link>
                <Link className="mt-3" href="/"><Image src={IconLinkedin} alt="Icon Linkedin"></Image></Link>
                <Link className="mt-3" href="/"><Image src={IconFacebook} alt="Icon Facebook"></Image></Link>
                <Link className="mt-3" href="/"><Image src={IconYoutube} alt="Icon Youtube"></Image></Link>
                </div>
            </div>

            <div className="max-sm:col-span-2 col-span-4 font-semibold text-center text-gray-color mt-20 ml-12">
                <p className="max-sm:ml-[3.5rem] max-sm:w-[14.5rem]">©2023 AGENCIA - Todos os direitos reservados.</p>
            </div>
        </div>
    )
}