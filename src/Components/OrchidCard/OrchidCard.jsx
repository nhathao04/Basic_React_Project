import './OrchidCard.scss'
import { Link } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
function OrchidCard({ orchid }) {
  // onst [api, setAPI] = useState([]);
  // const baseURL = 'https://67072be1a0e04071d2294a60.mockapi.io/players';
  // const categories = [
  //     {id: 'Dendrobium', name: 'Dendrobium'},
  //     {id: 'Brassavola', name: 'Brassavola'},
  //     {id: 'Cattleya', name: 'Cattleya'}
  // ];

  // const fetchAPI = () => {
  //     fetch(baseURL)
  //         .then(resp => resp.json())
  //         .then(data => setAPI(data))
  //         .catch(err => console.error(err))
  // }
  return (
    <div className="orchid-card">
      <div className="image-block">
        <img className=" content orchid-image" src={orchid.image} alt="flower image" />
      </div>
      <div className="content-block">
        <strong className="content orchid-name">{orchid.name}</strong>
        <strong className="content orchid-origin">{orchid.origin}</strong>
      </div>
      <div className="link-block">
        <Link to={`/orchid/${orchid.id}`} className='content orchid-detail'>Detail</Link>
      </div>
    </div>
  );
}

export default OrchidCard;