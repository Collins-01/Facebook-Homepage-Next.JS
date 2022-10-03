import { Camera, VideoCamera } from "heroicons-react";
import Image from "next/image";
import React, { ChangeEvent, LegacyRef, MouseEvent, useRef, useState } from "react";
import {collection, addDoc, serverTimestamp, setDoc,getDoc, doc} from 'firebase/firestore';
import {db,storage} from '../firebase_app';
import {getDownloadURL, ref,uploadBytesResumable,uploadString} from 'firebase/storage';



const InputBox = ()=>{
    const inputRef: React.RefObject<HTMLInputElement> = React.createRef();
    const [imageToPost , setImageToPost] = useState<string | null | ArrayBuffer | undefined>(null);
    const fileRef = React.createRef<HTMLInputElement>();

    // Send Post to DB
    const sendPost = async (e:any)=>{
        e.preventDefault();
        if(inputRef.current?.value === null || inputRef.current?.value.length ===0)
        {
            console.log("User did not add any input");
            return;
        }
          else{
            try {
                const collectionRef = collection(db, "Posts");
                const response =   await addDoc(collectionRef, {
                       message: inputRef.current?.value,
                       name: 'Oriakhi Collins',
                       email: 'collins.oriakhi.dev@gmail.com',
                       image: 'https://images.unsplash.com/photo-1610859874384-c97e0ff5b433?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
                       timestamp: serverTimestamp(),
                       postImage: null
                   });
                   
                   
                //    if(imageToPost){
                //     const storageRef = ref(storage,`Posts/${response.id}`);
                //     const uploadTask = uploadBytesResumable(storageRef,imageToPost as ArrayBuffer)
                //     uploadTask.on('state_changed',(snapshot)=>{
                //         setInput(null)
                //     },(err)=>{
                //         console.log(`An Error occured:::: ${err}`)
                //     }, ()=>{
                //         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
                //             console.log(`Download URL :::: ${downloadURL}`)
                //             // setDoc(collectionRef, {
                //             //     postImage: downloadURL,
                                
                //             // })
                //         });
                //     });
                    
                //     // const uploadResult = await uploadString(storageRef, imageToPost!.toString(), 'data_url');
                //    }
              } catch (error) {
                console.log(`Error::::: ${error}`)
                alert(error);
              }
          }
    }

    // Add Image to post

    const addImageToPost = (event: ChangeEvent<HTMLInputElement>)=>{
        const reader =  new FileReader()
            if(event.target.files){
                reader.readAsDataURL(event.target.files[0]);
            }
            reader.onload = (readerEvent)=>{
                setImageToPost(readerEvent.target?.result);
            }
    }

        const removeImage=()=>{
            setImageToPost(null);
        }

    return (
       <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
         <div className='flex space-x-4 p-4 items-center'>
                <Image 
                className='rounded-full'
                height={40} width={40}
                layout='fixed'
                 src={'https://images.unsplash.com/photo-1610859874384-c97e0ff5b433?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80'}/>

                 <form className='flex flex-1' >
                    <input ref={inputRef} 
                    className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none'
                    type='text' placeholder={`Whats's on your mind,Collins ?`}/>
                    <button  hidden onClick={sendPost}>Submit</button>
                 </form>
                 {/* Display Image to post */}
                 {
                    imageToPost && (
                        <div onClick={removeImage} className='flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer'>
                        <img  src={imageToPost.toString()} alt='' className='h-10 object-contain'/>    
                        <p className='text-xs text-red-500 text-center'>Remove</p>
                         </div>
                                )
                 }
        </div>
        {/* Activities */}
        <div className='flex justify-evenly p-3 border-t'>
            {/* div 1 */}
            <div className='inputIcon'>
                <VideoCamera className='h-7 text-red-500 '/>
                <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
            </div>
            {/* div 2 */}
            <div className='inputIcon'  onClick={()=>fileRef.current?.click()} >
                <Camera className='h-7 text-green-500 ' />
                <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
            </div>
            {/* div 3 */}
            <div className='inputIcon'>
                <Camera className='h-7 text-yellow-500 '/>
                <p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p>
                {/* TODO: Add Ref to File picker */}
                <input  type='file' hidden onChange={addImageToPost}  ref={fileRef} />
            </div>

        </div>

       </div>
    );
}

export default InputBox;