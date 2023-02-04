import { Modal, ModalFooter, ModalHeader, ModalBody } from 'reactstrap';
import {BiX} from "react-icons/bi";
import './ContactUs.scss';

const ContactUs = (props) =>{
    const {handleOnCloseCustomerService} = props;
    const handleOnSendMail = () =>{
        window.location = 'mailto:rameshmanepalli14@gmail.com'
    }


    return(
        <div>
          <Modal isOpen={true} centered className='customerServiceModalContainer'>
              <ModalHeader className='customerServiceModalHeader'>
                  <span>Are you Facing Problems ?</span>
                  <BiX size={24} className='customerServiceCloseIcon' onClick={handleOnCloseCustomerService}/>
              </ModalHeader>
              <ModalBody>
                  Don't Worry Please Send Us a Mail
              </ModalBody>
              <ModalFooter>
                  <button onClick={handleOnSendMail}> Send Mail</button>
                  <button onClick={handleOnCloseCustomerService}>Cancel</button>
              </ModalFooter>
          </Modal>
        </div>
    )
}

export default ContactUs;