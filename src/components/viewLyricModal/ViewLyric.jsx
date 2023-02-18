import { Modal, ModalFooter, ModalHeader, ModalBody } from 'reactstrap';
import {BiArrowBack, BiX} from "react-icons/bi";
import './ViewLyric.scss';
import {Button} from "@mui/material";

const ContactUs = (props) =>{
    const {handleOnCloseViewLyricModal, mySong} = props;


    return(
        <div>
            <Modal isOpen={true} centered className='customerServiceModalContainer'>
                <ModalHeader className='customerServiceModalHeader'>
                    <span>{mySong.title}</span>
                    <BiX size={24} className='close_view_lyric_button' onClick={handleOnCloseViewLyricModal}/>
                </ModalHeader>
                <ModalBody className='view_lyric_modal_body'>
                    <pre> {mySong.lyric} </pre>
                </ModalBody>
                <ModalFooter>
                    <Button className='back_button' onClick={handleOnCloseViewLyricModal}> <BiArrowBack className='back_arrow_view_lyric'/> Back</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default ContactUs;