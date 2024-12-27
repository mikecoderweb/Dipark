import React from 'react';
import styled from 'styled-components';

const MapSection = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
`;

const MapFrame = styled.iframe`
  width: 90%;
  height: 80%;
  border-radius: 20px;
  margin-left: 50px;
`;

const ContactForm = () => {
  return (
    <MapSection>
      <MapFrame 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.0329042666726!2d69.27521661542348!3d41.32201497927055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b534175ed31%3A0x52a8f9d9414a2ad8!2sSamarqand%20Darvoza!5e0!3m2!1sen!2s!4v1640433993099!5m2!1sen!2s"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Location Map"
      />
    </MapSection>
  );
};

export default ContactForm;
