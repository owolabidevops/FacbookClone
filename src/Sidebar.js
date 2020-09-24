
import userEvent from '@testing-library/user-event'
import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './Stateprovider';

function Sidebar() {
    const [{user}, dispatch] =useStateValue();
    return (
        <div className="side-bar">
            <SidebarRow src={user.photoURL} title= {user.displayName}  />
            <SidebarRow Icon={LocalHospitalIcon} title="Covid-19 Information center"
            />
               <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
               <SidebarRow Icon={PeopleIcon} title="Friends"/>
               <SidebarRow Icon={ChatIcon} title="Messanger"/>
               <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
               <SidebarRow Icon={VideoLibraryIcon} title="Video"/>
               <SidebarRow Icon={ExpandMoreIcon} title="Marketplace"
            />

        </div>
    )
}

export default Sidebar
