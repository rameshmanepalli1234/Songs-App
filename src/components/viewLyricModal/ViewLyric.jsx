import { Modal, ModalFooter, ModalHeader, ModalBody } from 'reactstrap';
import {BiX} from "react-icons/bi";

const ContactUs = (props) =>{
    const {handleOnCloseViewLyricModal, mySong} = props;


    return(
        <div>
            <Modal isOpen={true} centered className='customerServiceModalContainer'>
                <ModalHeader className='customerServiceModalHeader'>
                    <span>{mySong.teluguTitle}</span>
                    <BiX size={24} className='customerServiceCloseIcon' onClick={handleOnCloseViewLyricModal}/>
                </ModalHeader>
                <ModalBody>
                    {mySong.teluguLyric}
                </ModalBody>
                <ModalFooter>
                    <button onClick={handleOnCloseViewLyricModal}>Go Back</button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default ContactUs;