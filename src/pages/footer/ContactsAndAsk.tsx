import React from 'react';
import './styles/ContactsAndAsk.css'
import {ContactsFooter} from "./components/Contacts";
import {AskQuestionFooter} from "./components/AskQuestionFooter";

export const ContactsAndAsk = () => {
    return (
        <div id="contacts" key='contacts' className='col-12 d-flex justify-content-center main-form-frame'>
            <div className='main-form'>
                <div className='row'>
                    <ContactsFooter/>
                    <AskQuestionFooter/>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2565.2053429975654!2d36.24867599629517!3d49.98875951017257!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a092e6348827%3A0xaf2b56c5bd388dde!2z0JzQvtGB0LrQvtCy0YHRjNC60LjQuSDQv9GA0L7RgdC_0LXQutGCLCA1MSwg0KXQsNGA0LrRltCyLCDQpdCw0YDQutGW0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNjEwMDA!5e0!3m2!1suk!2sua!4v1629707973202!5m2!1suk!2sua"
                    width="100%" height="100%" style={{border: 0, borderRadius: 30}} allowFullScreen={true}
                    loading="lazy">
                </iframe>
                <div className='footer d-flex justify-content-center'>2021 © Все права защищены «Ситам»</div>
            </div>
        </div>
    );
};
