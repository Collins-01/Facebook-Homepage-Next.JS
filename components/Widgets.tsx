import { DotsHorizontal, Search, VideoCamera } from "heroicons-react";
import Contact from "./Contact";


const Widget = ()=>{
    const contacts = [
        {name: "Collins", url : "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"}
    ]
    return (
        <div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
            <div className='flex justify-between items-center text-gray-500 mb-5'>
                <h2 className='text-xl'>Contacts</h2>
                <div className='flex space-x-2'>
                    <VideoCamera className='h-6'/>
                    <Search className='h-6'/>
                    <DotsHorizontal className='h-6'/>
                </div>
            </div>
            {
                contacts.map((e)=>(<Contact image={e.url} name={e.name}/>))
            }
        </div>
    );
}

export default Widget;