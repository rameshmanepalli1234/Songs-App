import './Dashboard.scss';
import yspm from '../Images/yspm.jpeg';
import {Songs} from "../jsFiles/Songs";
import React, {useEffect, useState} from "react";
import {BiX, BiPlay, BiPause} from 'react-icons/bi';
import ContactUs from "../contactUs/ContactUs";
import ContactUsIcon from '../Images/ContactUsIcon.png';
import YoutubeIcon from '../Images/YoutubeIcon.png';
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import menuBar from '../Images/menuBar.png';


const Dashboard = () => {

    const [searchText, setSearchText] = useState('');
    const [filteredSongsList, setFilteredSongsList] = useState([]);
    const [isCustomerServiceOpen, setIsCustomerServiceOpen] = useState(false);
    const [isPlayButtonOpen , setIsPlayButtonOpen] = useState(true);
    const [isPauseButtonOpen, setIsPauseButtonOpen] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleOnMainLogo = () => {
         window.location.reload();
    }

    useEffect(() => {
        const filteredSongs = Songs.filter(song => song['title'].toLowerCase().includes(searchText));
        setFilteredSongsList([...filteredSongs])
    }, [searchText])


    const handleOnSearchSongs = (event) => {
        setSearchText(event.target.value.toLowerCase());
    }

    const handleOnRemoveSearchText = () => {
        setSearchText('');
    }

    const handleOnCustomerService = () => {
        setIsCustomerServiceOpen(true);
    }

   const handleOnCloseCustomerService = () => {
        setIsCustomerServiceOpen(false);
    }

    const handleOnPlayButton = (songTitle) => {
        console.log('songTitle =>',songTitle);
        setIsPauseButtonOpen(true);
        setIsPlayButtonOpen(false);
    }

    const handleOnPauseButton = () => {
        setIsPlayButtonOpen(true);
        setIsPauseButtonOpen(false);
    }

    const handleOnLyric = () => {
          alert('app is in development, kindly wait for update');
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <>
            <h1 className='DashboardHeading'>
                <img src={yspm} className='MainLogo' alt='MusicLogo' onClick={handleOnMainLogo}/>
                <span className='Heading_text'>YSPM Ministries </span>
                <span className='contactUs'> <img src={ContactUsIcon} alt='customerServiceLogo' className='contactUsIcon' onClick={handleOnCustomerService}/> </span>
                {searchText ? <span className='searchResults'>{`Search Results - ${filteredSongsList.length} `}</span> : <span  className='searchResults'>{`Total Results - ${filteredSongsList.length}`}</span>}
                <input className='input_dashboard' placeholder='Search...' onChange={handleOnSearchSongs} value={searchText}/>
                { searchText && <BiX className='crossSearchIcon' size={21} onClick={handleOnRemoveSearchText}/>}


                <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                 <img src={menuBar} alt='menuBarIcon' height={22} width={22} className='menuIcon'/>
                </Button>
                <Menu
                    keepMounted
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    open={Boolean(anchorEl)}
                >
                    <MenuItem onClick={handleClose}>My Account</MenuItem>
                    <MenuItem onClick={handleClose}>Settings</MenuItem>
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
                
            </h1>
            <hr/>
            {isCustomerServiceOpen &&
                <div className='ContactUsModal'>
                <ContactUs handleOnCloseCustomerService={handleOnCloseCustomerService}/>
                </div>
            }
            <div className='songTitles'>
                {filteredSongsList.map((song, index) => {
                    return (
                        <div key={index} className='card'>
                            <span className='songTitle'> {song.teluguTitle} </span>
                            <button className='viewLyricButton' onClick={handleOnLyric}>View</button>
                            {isPlayButtonOpen && <BiPlay className='playButton' size={25} onClick={()=>{handleOnPlayButton(song.title)}}/> }
                            {isPauseButtonOpen && <BiPause className='pauseButton' size={25} onClick={handleOnPauseButton}/> }
                            <img src={YoutubeIcon} alt='youtube link' className='youtubeButton'/>
                        </div>
                    )
                })
                }
            </div>
        </>
    );
}

export default Dashboard;