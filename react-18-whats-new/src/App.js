
import { Suspense } from 'react';
import './App.css';
import { fetchCityListData } from './dataApi/fetchCityListData';

const displayCount = 5


function RenderComponent({ resource }) {

  const cities = resource?.cities.read();

  return (
    <div className="container">
      <h1 className="col-12">React 18 with suspense</h1>
      <ul className="list-group city--list">
        <li className="list-group-item city--header">City List</li>
        {cities.map((rec) => {
          return <li key={rec.id} className="list-group-item list-group-item-action">
            {rec.name}
          </li>
        })
        }
      </ul>
    </div>
  );
}


function App() {
  const resource = fetchCityListData(displayCount)

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RenderComponent resource={resource} />
    </Suspense>
  );
}

export default App;
