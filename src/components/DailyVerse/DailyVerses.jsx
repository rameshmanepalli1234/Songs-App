import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {BiX} from "react-icons/bi";
import {Button} from "react-bootstrap";
import dailyVerse from '../Images/dailyVerse.jpeg';
import '../DailyVerse/DailyVerses.scss';

const DailyVerses = (props) => {

    const { handleOnCloseDailyVerse,verse } = props;

    return (
        <div>
            <Modal isOpen={true} centered className='dailyVerseModal'>
                <ModalHeader className='customerServiceModalHeader'>
                    <img src={dailyVerse} alt='daily verse' height={100} width={100}/>
                    <span>Verse of the Day, for {verse.date} </span>
                    <BiX size={24} className='customerServiceCloseIcon' onClick={handleOnCloseDailyVerse}/>
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
                    <Button className='cancel_button_customer_service' onClick={handleOnCloseDailyVerse}>Back</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default DailyVerses;