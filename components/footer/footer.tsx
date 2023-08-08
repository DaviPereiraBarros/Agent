import Image from "next/image"
import Logo from '../../assets/agência.svg'
import Link from "next/link"
import IconInstagram from '../../assets/Icon awesome-instagram.svg'
import IconLinkedin from '../../assets/Icon awesome-linkedin.svg'
import IconYoutube from '../../assets/Icon awesome-youtube.svg'
import IconFacebook from '../../assets/Icon awesome-facebook-f.svg'

export default function Footer(){
    return(
        <div className="grid grid-cols-4 bg-purple-footer px-44 py-[58px]" id="containerFooter">
            <div className="">
                <Image src={Logo} alt="logoFooter"></Image>
                <h1 className="mt-4 text-xl font-bold">0800 800 800</h1>
                <p className="mt-4 text-lg">comercial@agencia.com.br</p>
            </div>

            <div className="mt-[4.5rem]">
                <h1 className="text-green-color text-2xl font-bold">MENU</h1>
                <p className="text-lg">Quem somos</p>
                <p className="text-lg">Cases</p>
            </div>

            <div className="mt-[4.5rem]">
                <h1 className="text-green-color text-2xl font-bold">CONTEÚDO</h1>
                <p className="text-lg">E-books</p>
                <p className="text-lg">Fórmulas prontas</p>
            </div>

            <div className="mt-[4.5rem]">
                <h1 className="text-green-color text-2xl font-bold">SOCIAL</h1>
                <div className="grid grid-cols-4">
                <Link className="mt-3" href="/"><Image src={IconInstagram} alt="Icon Instagram"></Image></Link>
                <Link className="mt-3" href="/"><Image src={IconLinkedin} alt="Icon Linkedin"></Image></Link>
                <Link className="mt-3" href="/"><Image src={IconFacebook} alt="Icon Facebook"></Image></Link>
                <Link className="mt-3" href="/"><Image src={IconYoutube} alt="Icon Youtube"></Image></Link>
                </div>
            </div>

            <div className="col-span-4 font-semibold text-center text-gray-color mt-20 ml-12">
                <p>©2022 AGENCIA - Todos os direitos reservados.</p>
            </div>
        </div>
    )
}