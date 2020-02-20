import {useEffect , useState} from 'react';

export default () => {
    const [lat,setlat] = useState(null);
  const [errorMessage, seterrorMessage] = useState('');

  useEffect(()=>{
    window.navigator.geolocation.getCurrentPosition(
      position => setlat(position.coords.latitude),
      err => seterrorMessage(err.message)
    );
  },[]);

  return [lat,errorMessage];
}