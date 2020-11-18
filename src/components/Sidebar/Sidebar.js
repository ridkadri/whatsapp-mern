import React from 'react';
import './Sidebar.css';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Avatar, IconButton} from '@material-ui/core';


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar_header'>
                <Avatar src='https://avatars1.githubusercontent.com/u/18399349?s=460&u=c74e78a6dbceede1040a5682f1341e169669c0fb&v=4'/>
                <div className='sidebar_headerRight'>
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
