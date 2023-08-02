import React from "react";

function Reload() {
  const handleReloadClick = () => {
    window.location.reload();
  };

  return (
    <div>
      <button onClick={handleReloadClick} className="refresh_btn">
        Refresh data
      </button>
    </div>
  );
}

export default Reload;
