import { MapPin, Phone, Mail, Globe,Linkedin, X, Newspaper } from 'lucide-react';
const cards = [
    {
        id: 1,
        headIcon: MapPin,
        heading: 'US Headquarters',
        subHeading: '103 Carnegie Center, Suite #300 Princeton, NJ 08540',
        // NEW STRUCTURE: Array of objects with 'icon' and 'text' paired together
        details: [
            { icon: Phone, text: '+1 609-474-0093'},
            { icon: Mail, text: 'info@i-connectresources.com',
              reflink :'mailto:info@i-connectresources.com'

             }
        ]
    },
    {
        id: 2,
        headIcon: MapPin,
        heading: '  India Delivery Center',
        subHeading: ' STPI Nehru Nagar (East), Bhilai-490020, Chhattisgarh',
        details: [
             { icon: Phone, text: '+91 9893079653'},
            { icon: Mail, 
                text: 'info@i-connectresources.com',
                reflink :'mailto:info@i-connectresources.com'
            }
        ]
    },
    {
        id: 3,
        headIcon: Globe,
        heading: 'Follow Us',
        subHeading: 'Stay connected with our insights and industry trends',
        details: [
            { icon:Linkedin, text: 'Linkedin',
                 reflink:'https://www.linkedin.com/company/i-connectresources-inc'
             },
         
        ]
    }
];

export default cards;