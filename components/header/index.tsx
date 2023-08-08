import Image from 'next/image'
import Logo from '../../assets/agência.svg'
import Link from 'next/link'
import Button from '../button/button'

export default function Header(){
    return(
    <div className='flex items-center justify-between px-44 py-8 bg-purple-color w-[100%] border-b border-x-gray-color' id='container'>
        
        <div id='logotipo'>
            <Image src={Logo} alt='Logo'/>
        </div>

        <div className='text-lg' id='menu'>
            <Link href="/" className='ml-9'>Home</Link>
            <Link href="/" className='ml-9'>O que Fazemos</Link>
            <Link href="/" className='ml-9'>Cases</Link>
        </div>

        <div className='' id='action'>
            <Button title='Fale conosco' kind='bg-green-color'></Button>
        </div>

    </div>
    )
}