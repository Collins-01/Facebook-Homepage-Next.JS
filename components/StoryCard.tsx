import Image from "next/image";
import StoryModel from "../models/story_model";





const StoryCard =(props:StoryModel)=>{
    return (
        <div className='relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer p-3 overflow-x-scroll transition duration-200 transform ease-in hover:scale-105 '>
            {/* Small Avatar */}
            {
                <Image src={props.profile} height={40} width={40} layout='fixed' objectFit='cover'  priority
                className='absolute opacity-0 lg:opacity-100 z-50 top-10 rounded-full'/>
            }
            {/* Bigger Image */}
             {
                <Image src={props.src}  layout='fill' 
                className='object-cover filter brightness-75 rounded-full lg:rounded-3xl'/>
            }
        </div>
    );
}
export default StoryCard;