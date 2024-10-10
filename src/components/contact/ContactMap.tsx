import React from 'react';

const ContactMap = () => {
    return (
        <div className="bd-google__map-area pb-125">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-10 col-xl-11">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2756.2241854722997!2d23.7385342!3d46.305385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474957ff6638df69%3A0xfd3a08337162c8c8!2s4garden%20-%20Ciumbrud%20Plant!5e0!3m2!1sen!2sro!4v1728333725169!5m2!1sen!2sro" width="600" height="450" style={{border:0}}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMap;