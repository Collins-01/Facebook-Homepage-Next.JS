import { NextPage } from "next";
import InputBox from "./InputBox";
import Posts from "./Posts";
import Stories from "./Stories";

const Feed =()=>{
    return (
        <div className='flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide'>
           <div className="mx-auto max-w-md: max-w-lg lg:max-w-2xl">
             {/* Stories */}
             <Stories/>
            {/* Input Box */}
            <InputBox/>
            {/* Posts */}
            <Posts/>
           </div>
        </div>
    );
}

export default Feed;

