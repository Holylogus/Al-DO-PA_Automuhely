import Uzenet from "./Uzenet.js";
import { LISTA } from "./uzenetLista.js";

const most = new Date();
const ev = most.getFullYear().toString();
const honap = (most.getMonth() + 1).toString().padStart(2, "0");
const nap = most.getDate().toString();
const kettosNap = nap.length === 1 ? `0${nap}` : nap;

class Inbox {
  #szulo;
  #bejovoUzenetek;
  #objektumok;
  constructor(szulo) {
    this.#szulo = szulo;
    this.#objektumok = [];
    this.objLetrehoz(LISTA);
    this.#bejovoUzenetek = this.txtOsszeallit(this.#objektumok);
    szulo.html(this.#bejovoUzenetek);
  }

  objLetrehoz(lista) {
    lista.forEach((elem, index) => {
      let uzenet = new Uzenet(
        elem["kedvenc"],
        elem["felado"],
        elem["targy"],
        elem["csatolmany"],
        elem["ido"],
        elem["szoveg"],
        elem["feladoEmail"],
        elem["cimzett"],
        elem["olvasott"]
      );
      this.#objektumok.push(uzenet);
    });
  }
  txtOsszeallit(obj) {
    let txt = ``;
    obj.forEach((elem) => {
      txt += `<tr class="${elem.getOlvasott()}">
      <td class="inbox-small-cells">
      <input type="checkbox" class="mail-checkbox" />
      </td>
      <td class="inbox-small-cells">
      <i class="fa fa-star"></i>
      </td>
      <td class="view-message dont-show">${elem.getFelado()}
      </td>
      <td class="view-message">
        ${elem.getTargy()}
     </td>
      <td class="view-message inbox-small-cells">
      <i class="fa fa-paperclip"></i>
     </td>`;

      if (elem.ev == ev && elem.honap == honap && elem.nap == kettosNap) {
        txt += `<td class="view-message text-right">${elem.ora}:${elem.perc}</td></tr>`;
      } else if (elem.ev == ev) {
        txt += `<td class="view-message text-right">${elem.getHonap()} ${elem.nap}</td></tr>`;
      } else {
        txt += `<td class="view-message text-right">${elem.ev%100} ${elem.getHonap()} ${elem.nap}</td></tr>`;
      }
    });
    return txt;
  }
  getTxt() {
    return this.#bejovoUzenetek;
  }
  getSzulo() {
    return this.#szulo;
  }
  getObjektumok() {
    return this.#objektumok;
  }
}

export default Inbox;
