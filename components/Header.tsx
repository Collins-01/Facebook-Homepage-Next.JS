
import { NextComponentType } from 'next';
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import HeaderIcon from './HeaderIcon';
import GridViewIcon from '@mui/icons-material/GridView';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChatIcon from '@mui/icons-material/Chat';
import { Flag, Home, Play, ShoppingCart, UserGroup } from 'heroicons-react';



 const Header: NextComponentType =()=>{
        return (
            <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'>
                {/* Header Left */}
                <div className='flex items-center'>
                    <Image src='https://imgs.search.brave.com/vnYEUGQwhx5GJre7zzm2e4Qrb7xBTJ0eDQWOnBsg36U/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9wbmdn/cmlkLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wNS9G/YWNlYm9vay1sb2dv/LTIwMjEucG5n' 
                    height={40}
                     width={40} 
                     layout='fixed' />
                <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
                    <SearchIcon className='h-6 text-gray-600'/>
                    <input type='text' placeholder='Search Facebook'  className='hidden md:inline-flex   ml-2 items-center bg-transparent outline-none placeholder-gray-500'/>
                </div>
                </div>
                {/* Header Center  */}
                <div className= 'flex justify-center flex-grow' >
                    <div className='flex space-x-6 md:space-x-2'>
                         <HeaderIcon icon={<Home/>} active={true}/>
                         <HeaderIcon icon={<Flag/>} active={false}/>
                         <HeaderIcon icon={<Play/>} active={false}/>
                         <HeaderIcon icon={<ShoppingCart/>} active={false} />
                         <HeaderIcon icon={<UserGroup/>} active={false} />
                    </div>
                </div>
                {/* Header Right */}
                <div className='flex items-center sm:space-x-2 justify-end'>
                    {/* Profile Picture */}
                    <p className='whitespace-nowrap font-semibold pr-3'>Oriakhi Collins</p>
                    <GridViewIcon className='icon'/>
                    <ChatIcon className='icon'/>
                    <NotificationsIcon className='icon'/>
                    <ExpandMoreIcon className='icon'/>

                </div>
            </div>
        );
}

export default Header;