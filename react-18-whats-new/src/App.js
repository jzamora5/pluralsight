import { Suspense } from "react";
import "./App.css";
import { CityListStoreProvider } from "./contexts/CityListStoreContext";
import { DisplayCountProvider } from "./contexts/DisplayCountContext";
import CityDisplayCount from "./ui/CityDisplayCount";

import CityList from "./ui/CityList";
import CityDetail from "./ui/CityDetail";

const displayCount = 5;

function App() {
  return (
    <DisplayCountProvider initialDisplayCount={displayCount}>
      <CityDisplayCount />
      <CityListStoreProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <CityList>
            <Suspense fallback={<div>Loading...</div>}>
              <CityDetail />
            </Suspense>
          </CityList>
        </Suspense>
      </CityListStoreProvider>
    </DisplayCountProvider>
  );
}

export default App;
