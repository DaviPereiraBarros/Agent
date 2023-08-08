import Image from 'next/image'
import Icon from '../../assets/Outline.svg'
import CardFeature from './cardFeatures'

export default function Features(){
    return(
        <div className='flex flex-col items-center justify-center px-44 mt-12 pb-[255px]' id='containerFeatures'>
            <h1 className='text-5xl font-bold w-[900px] text-center'>Neste estado, não há agência melhor. Garantimos.</h1>
            <p className='text-2xl opacity-70 w-[900px] text-center mb-32'>Lorem psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <div className='grid grid-cols-2 gap-[68px]' id='features'>
                <CardFeature/>
                <CardFeature/>
                <CardFeature/> 
                <CardFeature/>     
            </div>
        </div>
    )
}