export default function App() {
  return (
    <>
      <div className="container">
        <h1 className="header_text">Track ISS Satelite Data</h1>
        <div className="square_data">
          <div>
            <p>Latitude</p>
            <span>123.2213</span>
          </div>
          <div>
            <p>Longitude</p>
            <span>123.2213</span>
          </div>
          <div>
            <p>Altitude</p>
            <span>123.2213</span>
          </div>
          <div>
            <p>Units</p>
            <span>123.2213</span>
          </div>
          <div>
            <p>Velocity</p>
            <span>123.2213</span>
          </div>
          <div>
            <p>Visibility</p>
            <span>123.2213</span>
          </div>
        </div>
        <div id="map"></div>
      </div>
    </>
  );
}
