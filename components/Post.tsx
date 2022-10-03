import { ChatAlt, Share, ThumbUp } from "heroicons-react";
import Image from "next/image";

interface PostProps{
    name: string;
    message: string;
    postImage: string | null;
    image: string;
    email: string;
    time: number;
}

const Post = (props: PostProps)=>{
    // TODO: useCollections Hook
    return (
        <div className='flex flex-col'>
            <div className='p-5 bg-white mt-5 rounded-t-2xl shadow-sm' >
                {/* Image */}
                <div className='flex  items-center space-x-2' >
                    <img  
                    className='rounded-full'
                    src={props.image} width={40} height={40} alt=''/>
                    <div>
                        <p className='font-medium'>{props.name}</p>
                        <p className='text-xs text-gray-400' >{new Date(props.time).toLocaleDateString()}</p>
                    </div>
                </div>
                <p className='pt-4'>{props.message}</p>
             </div>
             {
                props.postImage && (<div className='relative h-56 md:h-96 bg-white'> 

                    <Image src={props.postImage} objectFit='cover' layout='fill'/>
                </div>)
             }
                {/* Footer */}
             <div className='flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t'>
                {/* 1 */}
                <div className='inputIcon rounded-none rounded-bl-2xl'>
                    <ChatAlt className='h-4'/>
                    <p className='text-xs sm:text-base'>Like</p>
                </div>
                {/* 2 */}
                <div className='inputIcon rounded-none'>
                <Share className='h-4'/>
                    <p className='text-xs sm:text-base'>Like</p>
                </div>
                {/* 3 */}
                <div className='inputIcon rounded-none rounded-br-2xl' >
                <ThumbUp className='h-4'/>
                    <p className='text-xs sm:text-base'>Share</p>
                </div>
             </div>
        </div>
    );
}

export default Post;











