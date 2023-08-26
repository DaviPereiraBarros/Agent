import CardFeature from './cardFeatures'

export default function Features(){
    return(
        <div className='max-sm:pb-[180px] flex flex-col items-center justify-center px-44 mt-12 pb-[255px]' id='containerFeatures'>
            <h1 className='max-sm:text-3xl max-sm:w-[300px] text-5xl font-bold w-[900px] text-center'>Neste estado, não há agência melhor. Garantimos.</h1>
            <p className='max-sm:text-lg max-sm:mt-[2rem] max-sm:w-[300px] text-2xl opacity-70 w-[900px] text-center mb-32'>Lorem psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <div className='max-sm:grid-cols-1 max-sm:ml-[-138px] grid grid-cols-2 gap-[68px]' id='features'>
                <CardFeature/>
                <CardFeature/>
                <CardFeature/> 
                <CardFeature/>     
            </div>
        </div>
    )
}