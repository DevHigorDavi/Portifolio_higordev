import { forwardRef } from "react";

const CardBackend = forwardRef(
  (
    {
      IconePython,
      IconePHP,
      IconeSQL,
      NomeFerramenta1,
      NomeFerramenta2,
      NomeFerramenta3,
    },
    ref,
  ) => {
    return (
      <div ref={ref} className="card-backend">
        <div className="bolha-icone">
          <i className="fa-solid fa-server"></i>
        </div>

        <div className="content-ferramentas">
          <h1>BACK-END</h1>

          <div className="icones-ferramentas">
            <div className="card-python">
              <i className={IconePython}></i>
              <p>{NomeFerramenta1}</p>
            </div>

            <div className="card-php">
              <i className={IconePHP}></i>
              <p>{NomeFerramenta2}</p>
            </div>

            <div className="card-sql">
              <i className={IconeSQL}></i>
              <p>{NomeFerramenta3}</p>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

export default CardBackend;
