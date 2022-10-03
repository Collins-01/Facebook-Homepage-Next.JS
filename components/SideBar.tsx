
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import GroupsIcon from '@mui/icons-material/Groups';
import SideBarRow from './SideBarRow';
import { Calendar, ChevronDown, Clock, DesktopComputer } from 'heroicons-react';
import { useSession } from 'next-auth/react';

const SideBar =()=>{
    const {data: session, status} = useSession();
    return (
        <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px]'>
            
            {/* <SideBarRow  icon={null} src={'/photo-1664387572569-2a95ee67c60f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80'} title=''/> */}
            <SideBarRow  icon={<GroupsIcon className='h-8 w-8 text-blue-500' />} src={null} title='Friends'/>
            <SideBarRow  icon={<GroupsIcon className='h-8 w-8 text-blue-500' />} src={null} title='Groups'/>
            <SideBarRow  icon={<ShoppingBagIcon className='h-8 w-8 text-blue-500' />} src={null} title='Marketplace'/>
            <SideBarRow  icon={<DesktopComputer className='h-8 w-8 text-blue-500' />} src={null} title='Watch'/>
            <SideBarRow  icon={<Calendar className='h-8 w-8 text-blue-500' />} src={null} title='Events'/>
            <SideBarRow  icon={<Clock className='h-8 w-8 text-blue-500' />} src={null} title='Memories'/>
            <SideBarRow  icon={<ChevronDown className='h-8 w-8 text-blue-500' />} src={null} title='See More'/>
        </div>
    );
}

export default SideBar;