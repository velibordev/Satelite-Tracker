import FetchListting from "./Fetch.jsx";
import Reload from "./Reset.jsx";
export default function App() {
  return (
    <>
      <div className="container">
        <h1 className="header_text">ISS Satelite Data</h1>
        <FetchListting></FetchListting>
        <Reload></Reload>
        <p>Auto data refresh every 5 seconds.</p>
      </div>
    </>
  );
}
