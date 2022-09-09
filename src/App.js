import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [genderDetails, setGenderDetails] = useState([]);
  const [nationalityDetails, setNationalityDetails] = useState([]);
  const [searchdata, setSearchData]  = useState("");
  const GENDER_API = `https://api.genderize.io/?name=${searchdata}`
  const NATIONALITY_API = `https://api.nationalize.io/?name=${searchdata}`


  const handleSubmit = () => {
    fetch(GENDER_API).then(response => response.json()).then(response => setGenderDetails(response))
    fetch(NATIONALITY_API).then(response => response.json()).then(response => setNationalityDetails(response))
  }
  return (
    <div className="App">
      <header className="App-header">
        
        <div className='w-1/3'>
          <div className='bg-white rounded flex p-4'>
              <input type="text" onChange={(e) => setSearchData(e.target.value)} value={searchdata} className="w-full border p-3 placeholder:text-black text-black" placeholder='Enter your name'/>
              <input type="submit" className="bg-blue-500 text-white p-3" onClick={() => handleSubmit()}/>
          </div>

        {genderDetails.length != 0 && <div className='table  w-full mt-4' >
          <table className='border-collapse border w-full'>
              <tr className='border'>
                <th className='border'>Name</th>
                <td className='border'>{searchdata}</td>
              </tr>
              <tr className='border'>
                <th className='border'>Nationality</th>
                <td className='border'>{nationalityDetails.country.country_id}</td>
              </tr>
              <tr className='border'>
                <th className='border'>Gender</th>
                <td className='border'>{genderDetails.gender}</td>
              </tr>
              <tr className='border'>
                <th className='border'>Name</th>
                <td className='border'>sadique</td>
              </tr>
          </table>
        </div>}

          </div>
      </header>
    </div>
  );
}

export default App;
