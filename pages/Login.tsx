import { NextPage } from "next";
import Image from "next/image";



const Login :NextPage =()=>{
    const handleSignIn= ()=>{}
    return (
        <div className='grid place-items-center'>
            <Image  src={'https://imgs.search.brave.com/vnYEUGQwhx5GJre7zzm2e4Qrb7xBTJ0eDQWOnBsg36U/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9wbmdn/cmlkLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wNS9G/YWNlYm9vay1sb2dv/LTIwMjEucG5n'}
            height={300}
            width={300}
            objectFit='contain'
            />
            <h1 className='rounded-full text-white bg-blue-500 p-5 text-center cursor-pointer mt-10' onClick={handleSignIn}>Login with Facebook</h1>
        </div>
    );
}

export default Login;