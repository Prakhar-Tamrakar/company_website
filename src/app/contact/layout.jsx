import ContactForm from './form';
import Getintouch from './Getintouch';
import Bookconsaltant from './Bookconsultant';
export default function ContactRootLayout({ children }) {
  return (
    <>
   {children}
   <ContactForm/>
   <Getintouch/>
   <Bookconsaltant/>
    </>
  );
}
