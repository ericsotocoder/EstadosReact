import { useState } from "react";
import { Lista} from "./data/gallery";
import "./App.css";

const App = () => {
  const [index, setIndex] = useState(0); //index=0
  const [show, setShow] = useState(false);

  const siguienteImg = () => {
    if (index + 1 < Lista.length) {
      setIndex(index + 1);
    }
  };

  const anteriorImg = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="container">
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button
          className="button"
          onClick={anteriorImg}
          disabled={index === 0}
        >
          {"<<"}
        </button>
        <button
          className="button"
          onClick={siguienteImg}
          disabled={index + 1 === Lista.length}
        >
          {">>"}
        </button>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <h1>{Lista[index].Titulo}</h1>
        <span>
          {index + 1} of {Lista.length}
        </span>
      </div>
      <div>
        <img
          style={{
            width: "250px",
            height: "250px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
          src={Lista[index].url}
        />
        <div style={{ marginTop: "15px" }}>
          <button
            className="button"
            style={{ marginBottom: "10px" }}
            onClick={() => setShow(!show)}
          >
            {show ? "Hide description" : "Show description"}
          </button>
          {show && (
            <p style={{ textAlign: "justify" }}>
              {Lista[index].descripcion}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default App;
