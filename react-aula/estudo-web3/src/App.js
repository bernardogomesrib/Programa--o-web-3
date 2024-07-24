import { CContainer, CLink } from '@coreui/react';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './App.css';
function App() {
  
    return (
      <div className='App'>
        <CContainer className='quadradoBranco'>
          <Link className='btn' to="/cardapio">Cardápio</Link>
          <Link className='btn' to="/pratos">Pratos da estação</Link>
          <Link className='btn' to="/espaco">O espaço</Link>
          <Link className='btn' to="/faq">FAQ de delivery</Link>
          <Link className='btn' to="/sobre">Sobre nós</Link>
          <div className='redes'>
            <CLink className='icone' href="https://www.facebook.com"><FontAwesomeIcon className='cemp' icon={faFacebook} /></CLink>
            <CLink className='icone' href="https://www.instagram.com"><FontAwesomeIcon className='cemp' icon={faInstagram} /></CLink>
            <CLink className='icone' href="https://www.twitter.com"><FontAwesomeIcon className='cemp' icon={faTwitter} /></CLink>
          </div>
        </CContainer>
      </div>
    );
}
export default App;
