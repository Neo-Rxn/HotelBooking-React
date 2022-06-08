import './App.css';
import { Card } from '../molecules/Card/Card'
import { requestHotelApi } from '../../utils/request'
import { useEffect, useState } from 'react';

function App() {
  const [hotel, setHotel] = useState([])


const getHotelData = async() =>{
  await requestHotelApi(setHotel)
}
useEffect(() => {
  getHotelData()
}, []);


  return (
    <>
    {hotel.length > 0 && 
      <div className="App">
      {hotel.map((element) => <Card
        key={element.slug}
        name={element.name}
        country={element.country}
        rooms={element.rooms}
        price={element.price}
        description={element.description}
        photo={element.photo}
      />) }
    </div>}</>
  );
}

export default App;
