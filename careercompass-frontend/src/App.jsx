import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [health, setHealth] = useState(null);
  const [error, setError] = useState("");

  // useEffect with [] runs once when the page first loads
  useEffect(() => {
    axios
      .get("/api/health")
      .then((res) => setHealth(res.data))
      .catch(() => setError("Cannot reach the backend. Is it running on port 8080?"));
  }, []);

  return (
    <div className="container" style={{ paddingTop: 60 }}>
      <div className="card">
        <h1>CareerCompass</h1>
        <p>Skill-gap analysis, career guidance and opportunity matching.</p>

        {health && (
          <p>
            Backend status: <span className="badge ok">{health.status}</span>
          </p>
        )}
        {error && <p className="badge bad">{error}</p>}
        {!health && !error && <p>Checking backend...</p>}

        <button className="btn" onClick={() => window.location.reload()}>
          Re-check
        </button>
      </div>
    </div>
  );
}
