import Image from "next/image";
import React from 'react';

interface SideBarRowProps{
    icon: React.ReactElement | null;
    title:string;
    src: string | null;
}

const SideBarRow =(props: SideBarRowProps)=>{
    return (
        <div className='flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer'>
           {
          props.src &&  (<Image src={props.src} width={30} height={30} layout='fixed' />)
           } 
           { 
            props.icon && props.icon
           }
           <p className='hidden sm:inline-flex font-medium'>{props.title}</p>
        </div>
    );
    
}


export default SideBarRow;