import '../styles/home.scss';

// Components
import Gallery from '../components/Gallery';

function Accueil() {
    return (
        <div className='homeContainer'>
            <div className="bannerContainer">
                <div className='homeImg' alt="Un paysage cotier avec son écume de mer" />
                <p>Chez vous, partout ailleurs</p>
            </div>
            <Gallery />
        </div>
    );
}

export default Accueil;
