import { CImage, CLink } from '@coreui/react';
import './pagis.css';
export default function Faq(){
    return(
        <CLink href="/" className="fullBackground">
            <CImage fluid align="center" className="max" src="FAQ.png" alt="logo"/>
        </CLink>
    );
}