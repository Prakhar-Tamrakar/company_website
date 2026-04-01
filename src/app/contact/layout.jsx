import ContactForm from './form';
import Getintouch from './Getintouch';
import Bookconsaltant from './Bookconsultant';
import Contactpage from '../../temp/contactPage';
export default function ContactRootLayout({ children }) {
  return (
    <>
   {children}
   <ContactForm/>
    {/* <Contactpage/> */}
   <Getintouch/>
   <Bookconsaltant/>
    </>
  );
}
