import Uzenet from "./Uzenet.js";
import {LISTA} from "./uzenetLista.js";

class Inbox {
  constructor() {
    this.oszzeallit();
  }

  oszzeallit() {
    LISTA.forEach((elem) => {
      let uzenet = new Uzenet(
        elem["kedvenc"],
        elem["felado"],
        elem["targy"],
        elem["csatolmany"],
        elem["ido"],
        elem["szoveg"],
        elem["feladoEmail"],
        elem["cimzett"]
      );
      console.log(uzenet);
    });
  }
}

export default Inbox;
