import { NextComponentType } from "next";

interface HeaderIconProps{
    icon: any;
    active: boolean;
}

 const HeaderIcon  = (props:HeaderIconProps)=>{
    
    return (
        <div className='flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group' >
            {/*h-5 group-hover: text-blue-500  sm:-7 mx-auto text-gray-500*/}
            <div className='h-5 '>
            {
             props.icon   
            }
            </div> 
        </div> 
    );
}


export default HeaderIcon;