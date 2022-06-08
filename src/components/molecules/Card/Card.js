// import { requestHotelApi } from "./request.js";
import { selectedFlags } from "../../../utils/flags";
import { hotelsPrices } from "../../../utils/price";
import "./Card.css"



export const Card =  ({name, country,rooms,price,description, photo}) => {
    return(
        <div id="card" className="card" style={{backgroundImage: `url(${photo})`}}>       
          <div id="card__contents" className="card__contents">
            <div className="card__more">
              <span>&nbsp; + &nbsp;</span>
            </div>
            <div id="lowerText">
              <h2>{name}</h2>
              <img src={selectedFlags(country)} alt="Hotel Name"/> <span>{country}</span>
              <p>{rooms} Habitaciones - {hotelsPrices(price)}</p>
              <p className="description">{description}</p>
            </div>
            <div className="card__Bookit">
              <p>Book it!</p>
            </div>
          </div>
        </div>
      )
  }
