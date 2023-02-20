import './Dashboard.scss';
import yspm from '../Images/yspm.jpeg';
import dailyVerse from '../Images/dailyVerse.jpeg';
// import {Songs} from "../jsFiles/Songs";
// import {teluguSongs} from "../jsFiles/teluguSongs";
import {songsTelugu} from '../jsFiles/songsTelugu';
import React, {useEffect, useState} from "react";
import {BiX} from 'react-icons/bi';
import ContactUs from "../contactUs/ContactUs";
import ContactUsIcon from '../Images/ContactUsIcon.png';
// import YoutubeIcon from '../Images/YoutubeIcon.png';
import { MenuItem, Menu, Button } from '@mui/material';
import menuBar from '../Images/menuBar.png';
import ViewLyric from "../viewLyricModal/ViewLyric";
import {dailyVerses} from '../jsFiles/dailyVerses';
import DailyVerses from '../DailyVerse/DailyVerses';
import {yspmSongs} from "../jsFiles/yspmSongs";


const Dashboard = () => {

    const [searchText, setSearchText] = useState('');
    const [filteredSongsList, setFilteredSongsList] = useState([]);
    const [isCustomerServiceOpen, setIsCustomerServiceOpen] = useState(false);
    // const [isPlayButtonOpen , setIsPlayButtonOpen] = useState(true);
    // const [isPauseButtonOpen, setIsPauseButtonOpen] = useState(false);
    // const [language, setLanguage] = useState('Telugu');
    const [viewLyricOpen, setViewLyricOpen] = useState(false);
    const [mySong, setMySong]=useState({});
    const [anchorEl, setAnchorEl] = useState(null);
    const [isDailyVerseOpen, setIsDailyVerseOpen]=useState(false);
    const [verse, setVerse] = useState('');
    const [songsType, setSongsType] = useState('yspm');

    const handleOnMainLogo = () => {
         // window.location.reload();
    }

    useEffect(() => {
        const filteredSongs = songsType==='yspm' ? yspmSongs : songsTelugu.filter(song => song['title'].toLowerCase().includes(searchText));
        setFilteredSongsList([...filteredSongs])
    }, [searchText, songsType])


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

    // const handleOnPlayButton = (songTitle) => {
    //     // console.log('songTitle =>',songTitle);
    //     setIsPauseButtonOpen(true);
    //     setIsPlayButtonOpen(false);
    // }

    // const handleOnPauseButton = () => {
    //     setIsPlayButtonOpen(true);
    //     setIsPauseButtonOpen(false);
    // }

    const handleOnLyric = (song) => {
        setViewLyricOpen(true);
        setMySong(song);
    }

    const handleOnSelectLanguage = (event) => {
         // setLanguage(event.target.value);
    }

    const handleOnCloseViewLyricModal = () => {
        setViewLyricOpen(false);
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleOnDailyVerse = () => {
        setIsDailyVerseOpen(true);
           const date = new Date().toLocaleDateString();
           dailyVerses.forEach(verse => {
              if(verse.date === date) {
                setVerse(verse);
              }
           })
    }

    const handleOnCloseDailyVerse = () => {
        setIsDailyVerseOpen(false);
    }

    const handleOnAllSongs = () => {
        setSongsType('all');
    }

    const handleOnYSPMSongs = () => {
        setSongsType('yspm');
    }

    return (
        <>
            <h1 className='DashboardHeading'>
                <img src={yspm} className='MainLogo' alt='MusicLogo' onClick={handleOnMainLogo}/>
                <span className='Heading_text'>YSPM Ministries </span>
                <img src={dailyVerse} className='dailyVerseImage' alt='Daily Verse' onClick={handleOnDailyVerse} />
                <span className='contactUs'> <img src={ContactUsIcon} alt='customerServiceLogo' className='contactUsIcon' onClick={handleOnCustomerService}/> </span>
                {searchText ? <span className='searchResults'>{`Search Results - ${filteredSongsList.length} `}</span> : <span  className='searchResults'>{`Total Results - ${filteredSongsList.length}`}</span>}
                <input className='input_dashboard' placeholder='Search in Telugu...' onChange={handleOnSearchSongs} value={searchText}/>
                { searchText && <BiX className='crossSearchIcon' size={21} onClick={handleOnRemoveSearchText}/>}


                <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                    className='menuBarButton'
                >
                 <img src={menuBar} alt='menuBarIcon' height={22} width={22} />
                </Button>
                <Menu
                    keepMounted
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    open={Boolean(anchorEl)}
                >
                    <MenuItem onClick={handleClose}>YSPM Songs</MenuItem>
                    <MenuItem onClick={handleClose}>Visit Youtube</MenuItem>
                    <MenuItem onClick={handleClose}>FaceBook</MenuItem>
                    <MenuItem onClick={handleClose}>Read Bible</MenuItem>
                </Menu>
            </h1>
            { !+process.env.REACT_APP_HIDE_SELECT_LANGUAGE_DROPDOWN &&
                 <select className='selectLanguage' onChange={handleOnSelectLanguage} disabled={true}>
                     <option value='Telugu'>Telugu</option>
                     {/*<option value='English'>English</option>*/}
                 </select>
            }
            <hr/>
            {  songsType === 'yspm' ?
                <Button className='all_songs_option' onClick={handleOnAllSongs}>All Songs</Button> :
                <Button className='all_songs_option' onClick={handleOnYSPMSongs}>Yspm Songs</Button>
            }

            {isCustomerServiceOpen &&
                <div className='ContactUsModal'>
                <ContactUs handleOnCloseCustomerService={handleOnCloseCustomerService}/>
                </div>
            }
            <div className='songTitles'>
                {filteredSongsList.map((song, index) => {
                    return (
                        <div key={index} className='card'>
                            <span className='songTitle'> {song.title} </span>
                            <button className='viewLyricButton' onClick={()=> handleOnLyric(song)}>View</button>
                            {/*{isPlayButtonOpen && <BiPlay className='playButton' size={25} onClick={handleOnPlayButton}/> }*/}
                            {/*{isPauseButtonOpen && <BiPause className='pauseButton' size={25} onClick={handleOnPauseButton}/> }*/}
                            {/*<img src={YoutubeIcon} alt='youtube link' className='youtubeButton'/>*/}
                        </div>
                    )
                })
                }
            </div>
            { viewLyricOpen &&
                <div>
                    <ViewLyric handleOnCloseViewLyricModal={handleOnCloseViewLyricModal} mySong={mySong}/>
                </div>
            }

            {
                isDailyVerseOpen && <div>
                <DailyVerses handleOnCloseDailyVerse={handleOnCloseDailyVerse} verse={verse}/>
                </div>
            }
        </>
    );
}

export default Dashboard;