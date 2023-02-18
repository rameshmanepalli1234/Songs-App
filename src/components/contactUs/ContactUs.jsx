import {Modal, ModalFooter, ModalHeader, ModalBody} from 'reactstrap';
import {BiX} from "react-icons/bi";
import './ContactUs.scss';
import {Button} from "react-bootstrap";

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
                  Don't worry please send us an email
              </ModalBody>
              <ModalFooter>
                  <div className='cancel_button_customer_service' onClick={handleOnCloseCustomerService}>Cancel</div>
                  <Button onClick={handleOnSendMail}>Send Mail</Button>
              </ModalFooter>
          </Modal>
        </div>
    )
}

export default ContactUs;