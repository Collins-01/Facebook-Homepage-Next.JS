import Image from "next/image";

interface ContactProps{
    name: string;
    image: string;
}
const Contact = (props: ContactProps)=>{
    return (
        <div className='flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl'>
            <Image  src={props.image} height={50} width={50} layout='fixed' objectFit='cover' className='rounded-full'/>
            <p>{props.name}</p>
            <div className='absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full'></div>
        </div>
    );
}

export default Contact;