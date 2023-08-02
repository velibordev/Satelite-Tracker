import FetchListting from "./Fetch.jsx";
import Reload from "./Reset.jsx";
export default function App() {
  return (
    <>
      <div className="container">
        <h1 className="header_text">Track ISS Satelite Data</h1>
        <FetchListting></FetchListting>
        <Reload></Reload>
      </div>
    </>
  );
}
