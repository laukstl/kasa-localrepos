import '../styles/logement.scss';
import dataFile from "../assets/logements.json";
import { useParams } from 'react-router-dom';

// Components
import DropdownButton from "../components/DropdownButton";
import Carrousel from "../components/Carrousel";
import Tags from "../components/Tags";
import Error from '../components/Error';
import StarRating from '../components/StarRating';
import HostCard from '../components/HostCard';

function Logement () {

    const { id } = useParams();

    const data = dataFile.find((item) => item.id === id.toString());

    if (!data) {
        return <Error />;
    }

    return (
        <div className='pageContainer'>
            <div className='propertiesContainer'>
                <div className='carrouselContainer'>
                    <Carrousel pictures={data.pictures} title={data.title} />
                </div>
                <div className='blockContainer'>
                    <div className='leftBlock'>
                        <div className='title'>{data.title}</div>
                        <div className='lieu'>{data.location}</div>
                        <div className='tagsContainer'>
                            {data.tags.map((item, index)=>
                                <Tags key={index} tagText={item} />
                            )}
                        </div>
                    </div>
                    <div className='rightBlock'>
                        <div className='hostCardContainer'>
                            <HostCard hostName={data.host.name} hostPicture={data.host.picture} />
                        </div>
                        <div className='starRatingContainer'>
                            <StarRating rating={data.rating} />
                        </div>
                    </div>
                </div>
                <div className='dropdownContainer'>
                    <DropdownButton buttonText="Description" text={data.description} />
                    <DropdownButton buttonText="Equipements" text={<ul>{data.equipments.map((item) => <li key={item}>{item}</li>)}</ul>} />
                </div>
            </div>
        </div>
    )
}

export default Logement;
