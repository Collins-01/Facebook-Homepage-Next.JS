
import { NextComponentType } from 'next';
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import HeaderIcon from './HeaderIcon';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GroupsIcon from '@mui/icons-material/Groups';
import GridViewIcon from '@mui/icons-material/GridView';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChatIcon from '@mui/icons-material/Chat';



 const Header: NextComponentType =()=>{
        return (
            <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'>
                {/* Header Left */}
                <div className='flex items-center'>
                <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
                    <SearchIcon className='h-6 text-gray-600'/>
                    <input type='text' placeholder='Search Facebook'  className='hidden md:inline-flex   ml-2 items-center bg-transparent outline-none placeholder-gray-500'/>
                </div>
                </div>
                {/* Header Center  */}
                <div className= 'flex justify-center flex-grow' >
                    <div className='flex space-x-6 md:space-x-2'>
                         <HeaderIcon icon={<HomeIcon/>} active={true}/>
                         <HeaderIcon icon={<FlagIcon/>} active={false}/>
                         <HeaderIcon icon={<PlayArrowIcon/>} active={false}/>
                         <HeaderIcon icon={<ShoppingCartIcon/>} active={false} />
                         <HeaderIcon icon={<GroupsIcon/>} active={false} />
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