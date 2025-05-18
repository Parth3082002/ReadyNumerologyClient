import styled from '@emotion/styled'
import { FaUser, FaPhone, FaEnvelope, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa'

const ContactContainer = styled.div`
  margin-top: 3rem;
  padding: 2rem;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
`

const ContactTitle = styled.h2`
  color: #6a1b9a;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  text-align: center;
  position: relative;
  padding-bottom: 0.5rem;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(to right, #6a1b9a, #9c27b0);
    border-radius: 2px;
  }
`

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

const ContactItem = styled.div`
  text-align: center;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 10px;
  border: 1px solid #e9ecef;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: ${props => props.clickable ? 'pointer' : 'default'};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  }
`

const ContactIcon = styled.div`
  font-size: 2rem;
  color: #6a1b9a;
  margin-bottom: 1rem;
`

const ContactValue = styled.div`
  color: #6a1b9a;
  font-weight: 500;
  line-height: 1.6;
`

const AddressContainer = styled.div`
  max-width: 800px;
  margin: 3rem auto 0;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 10px;
  border: 1px solid #e9ecef;
  text-align: center;
`

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 1.5rem;
`

const ContactSection = () => {
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/prajwalkumarjitendrajadhav', '_blank')
  }

  const handleMapClick = () => {
    window.open('https://www.google.com/maps/place/Shree+Ganesh+Complex,+Kolhapur,+Maharashtra+416003', '_blank')
  }

  return (
    <ContactContainer>
      <ContactTitle>Contact Us</ContactTitle>
      <ContactGrid>
        <ContactItem>
          <ContactIcon>
            <FaUser />
          </ContactIcon>
          <ContactValue>Prajwalkumar Jadhav</ContactValue>
        </ContactItem>
        <ContactItem>
          <ContactIcon>
            <FaPhone />
          </ContactIcon>
          <ContactValue>+91 9527274541</ContactValue>
        </ContactItem>
        <ContactItem>
          <ContactIcon>
            <FaEnvelope />
          </ContactIcon>
          <ContactValue>contact@numerology.com</ContactValue>
        </ContactItem>
        <ContactItem clickable onClick={handleInstagramClick}>
          <ContactIcon>
            <FaInstagram />
          </ContactIcon>
          <ContactValue>@prajwalkumarjitendrajadhav</ContactValue>
        </ContactItem>
      </ContactGrid>

      {/* <AddressContainer>
        <ContactIcon>
          <FaMapMarkerAlt />
        </ContactIcon>
        <ContactValue>
          Office No. 1, First Floor, Shree Ganesh Complex, Near Bus Stand,<br />
          Kolhapur - 416003,<br />
        </ContactValue>
        <MapContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15377.123456789!2d74.2297!3d16.7058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQyJzIwLjkiTiA3NMKwMTMnNDYuOSJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </MapContainer>
      </AddressContainer> */}
    </ContactContainer>
  )
}

export default ContactSection 