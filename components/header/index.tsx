import Image from 'next/image'
import Logo from '../../assets/agência.svg'
import Link from 'next/link'
import Button from '../button/button'

export default function Header(){
    return(
    <div className='max-sm:px-[1rem] max-sm:py-[1rem] flex items-center justify-between px-44 py-8 bg-purple-color w-[100%] border-b border-x-gray-color' id='container'>
        
        <div className='max-sm:w-28' id='logotipo'>
            <Image src={Logo} alt='Logo'/>
        </div>

        <div className='text-lg max-sm:text-base max-sm:flex items-center max-sm:text-pink-300' id='menu'>
            <Link href="/" className='ml-9'>Home</Link>
            <Link href="/" className='ml-9'>O que Fazemos</Link>
            <Link href="/" className='ml-9'>Cases</Link>
        </div>

        <div className='max-sm:hidden' id='action'>
            <Link href={'/#contact'}><Button title='Fale conosco' kind='bg-green-color' type={''}></Button></Link>
        </div>

    </div>
    )
}