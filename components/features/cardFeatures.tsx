import Image from 'next/image'
import Icon from '../../assets/Outline.svg'

export default function CardFeature(){
    return(
        <div className='max-sm:w-[300px] font-bold w-[509px] py-[32px] px-[35px] h-[347px] rounded-md bg-white' id="card">
            <Image className='text-center' src={Icon} alt='icon'/>
            <h1 className='text-[41px] w-auto text-left text-purple-color text-6xl font-bold mt-5'>Digital Strategy</h1>
            <p className='max-sm:text-base max-sm:w-64 w-auto text-left text-gray-500 opacity-70 text-xl mt-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna.
            </p>
        </div>

    )
}