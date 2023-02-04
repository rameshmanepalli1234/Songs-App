import './Dashboard.scss';
import MusicLyricIcon from '../Images/MusicLyricIcon.webp';
import {Songs} from "../jsFiles/Songs";
import {useEffect, useState} from "react";
import {BiX, BiPlay, BiPause} from 'react-icons/bi';
import ContactUs from "../contactUs/ContactUs";
import ContactUsIcon from '../Images/ContactUsIcon.png';
import YoutubeIcon from '../Images/YoutubeIcon.png';


const Dashboard = () => {

    const [searchText, setSearchText] = useState('');
    const [filteredSongsList, setFilteredSongsList] = useState([]);
    const [isCustomerServiceOpen, setIsCustomerServiceOpen] = useState(false);
    const [isPlayButtonOpen , setIsPlayButtonOpen] = useState(true);
    const [isPauseButtonOpen, setIsPauseButtonOpen] = useState(false);

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
        console.log('hello');
    }


    return (
        <>
            <h1 className='DashboardHeading'>
                <img src={MusicLyricIcon} className='MainLogo' alt='MusicLogo' onClick={handleOnMainLogo}/>
                <span className='Heading_text'>Music Lyrics </span>
                <span className='contactUs'> <img src={ContactUsIcon} alt='customerServiceLogo' className='contactUsIcon' onClick={handleOnCustomerService}/> </span>
                {searchText ? <span className='searchResults'>{`Search Results - ${filteredSongsList.length} `}</span> : <span  className='searchResults'>{`Total Results - ${filteredSongsList.length}`}</span>}
                <input className='input_dashboard' placeholder='Search...' onChange={handleOnSearchSongs} value={searchText}/>
                { searchText && <BiX className='crossSearchIcon' size={24} onClick={handleOnRemoveSearchText}/>}
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
                            <span className='songTitle'> {song.title} </span>
                            <button className='viewLyricButton' onClick={handleOnLyric}>View</button>
                            {isPlayButtonOpen && <BiPlay className='playButton' size={25} onClick={()=>{handleOnPlayButton(song.title)}}/> }
                            {isPauseButtonOpen && <BiPause className='pauseButton' size={25} onClick={handleOnPauseButton}/> }
                            <img src={YoutubeIcon} alt='youtube link' className='youtubeButton' />
                        </div>
                    )
                })
                }
            </div>
        </>
    );
}

export default Dashboard;