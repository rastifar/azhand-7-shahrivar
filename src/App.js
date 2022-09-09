// import MyRouting from "./routing/MyRouting";
// import "primereact/resources/themes/arya-green/theme.css";

// import "primereact/resources/themes/md-dark-indigo/theme.css"
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./App.css";

import FirstC from "./components/FirstC";
import ScoppedCss from "./components/ScoppedCss";
import DatatableExample from "./components/DatatableExample";
import DropdownExample from "./components/DropdownExample";
import SecondC from "./components/SecondC";
import GridLA from "./testCss/GridLA";
import Login from "./testCss/Login";

function App() {
  return (
    <div className="App">
      {/* <MyRouting /> */}
      {/* <FirstC /> */}
      {/* <ScoppedCss /> */}
      {/* <DatatableExample /> */}
      {/* <DropdownExample/> */}
      {/* <SecondC/> */}
      {/* <GridLA /> */}
      <Login/>
    </div>
  );
}

export default App;
