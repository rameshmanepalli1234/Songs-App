import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {BiArrowBack, BiX} from "react-icons/bi";
import {Button} from "react-bootstrap";
// import dailyVerse from '../Images/dailyVerse.jpeg';
import yspm from '../Images/yspm.jpeg';
import '../DailyVerse/DailyVerses.scss';
import {useEffect, useState} from "react";

const DailyVerses = (props) => {

    const { handleOnCloseDailyVerse,verse } = props;
    const [time, setTime] = useState('');

    useEffect(() => {
        setTimeout(()=>{
            let timeUpdate = new Date().toLocaleTimeString();
            setTime(timeUpdate);
        },1000);
    },[time]);

    return (
        <div>
            <Modal isOpen={true} centered className='dailyVerseModal'>
                <ModalHeader className='customerServiceModalHeader'>
                    <img src={yspm} alt='daily verse' height={40} width={40} className='yspm_image'/>
                    <span className='text_verse_of_the_day'>Verse of the Day </span>
                    <br/>
                    <div className='dateTime_daily_verse'>
                        <span>{new Date().toLocaleDateString()}</span>
                        <span className='time_daily_verse'>{time}</span>
                    </div>
                    <BiX size={24} className='close_icon_daily_verse' onClick={handleOnCloseDailyVerse}/>
                </ModalHeader>
                <ModalBody>
                    <div>
                        {verse.teluguVerse}
                        <br/>
                        <br/>
                        <div>
                            {verse.teluguChapter}
                        </div>
                        <br/>
                        <div>
                            {verse.englishVerse}
                        </div>
                        <br/>
                        <div>
                            {verse.englishChapter}
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={handleOnCloseDailyVerse}> <BiArrowBack/> Back</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default DailyVerses;