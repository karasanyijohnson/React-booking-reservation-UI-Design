import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBed, faPlane, faCar, faTaxi} from '@fortawesome/free-solid-svg-icons'
import './header.css'
const Header =()=>{
    return(
        <div className="header">
            <div className="headerContainer">
            <div className="headerList">
                <div className="headerListItem active">
                <FontAwesomeIcon icon={faBed} />
                <span>Stays</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faPlane} />
                <span>Flights</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faCar} />
                <span>Car Rentals</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faBed} />
                <span>Attractions</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faTaxi} />
                <span>Airport Taxis</span>
                </div>
            </div>
            <h1 className="headerTitle">A life of Discount? it's Genius</h1>
            <p className="headerDesc">
                Get rewarded for your travel- unlock instant savings of 10% with free JohnsonBooking Account
            </p>
            <button className="headerBtn">Sign In/Register</button>
            </div>
        </div>
    )
}
export default Header