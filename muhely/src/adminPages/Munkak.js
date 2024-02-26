import { Munkalapok } from "../model/MunkalapMinta.js";
import "./styles/munkak.css";
import MunkaKartyaContainer from "../component/MunkaKartyaContainer.js";

export default function Munkak() {
  return (
    <>
      <div className="lehetosegek">
        <h2 className="Title">Lehetőségek</h2>
      </div>
      <div className="aktualisMunkak">
        <h2 className="Title">Aktuális Munkák:</h2>
        <div className="card-container">
          <MunkaKartyaContainer
            lista={Munkalapok}
          ></MunkaKartyaContainer>
        </div>
      </div>
    </>
  );
}
