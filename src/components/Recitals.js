import React from "react";

function Recitals() {
  return (
    <section style={{ padding: "20px" }}>
      <h2>Past Recitals</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "20px" }}>
        <img src="/images/recital1.png" alt="Recital 1" width="250" />
        <img src="/images/recital2.png" alt="Recital 2" width="250" />
        <img src="/images/recital3.png" alt="Recital 3" width="250" />
      </div>
    </section>
  );
}

export default Recitals;
