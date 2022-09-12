import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";
import ResidentInfo from "./components/ResidentInfo";

function App() {
  const [location, setLocation] = useState({});
  const [typeId, setTypeId] = useState("");

  useEffect(() => {
    const randomLocationId = Math.floor(Math.random() * 125) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomLocationId}`)
      .then((res) => setLocation(res.data));
  }, []);

  console.log(location);

  const searchType = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${typeId}`)
      .then((res) => setLocation(res.data));
  };

  return (
    <>
      <div className="App">
        <div className="mainHeader">
          <div class="inputBox">
            <label for="">Please, insert a number from 1 to 126:  </label> <br/>
            <input type="text" value={typeId} onChange={(e) => setTypeId(e.target.value)}/>
            <button onClick={searchType}>Search</button>
          </div>

          <div class="infobanner">
            <table>
            <tr>
              <th>Location</th>
              <th>Type</th>
              <th>Dimension</th>
              <th>Population</th>
            </tr>
            <tr>
              <td>{location?.name}</td>
              <td>{location?.type}</td>
              <td>{location.dimension}</td>
              <td>{location.residents?.length}</td>
            </tr>
            </table>
          </div>
          <h2>Residents</h2>
        </div>
        <div className="characterContainer">
      
        {location.residents?.map((local) => (
          <ResidentInfo
            url={local}
            residents={location.residents}
            key={local}
          />
        ))}
         </div>
      </div>
    </>
  );
}

export default App;
