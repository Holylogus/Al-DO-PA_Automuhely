class Uzenet {
    #szoveg;
    #felado;
    #targy;
    #csatolmany;
    #feladoEmail;
    #cimzett;
    #kedvenc;
    #ido;
  
    constructor(kedvenc, felado, targy, csatolmany, ido, szoveg, feladoEmail, cimzett) {
      this.#kedvenc = kedvenc;
      this.#felado = felado;
      this.#targy = targy;
      this.#csatolmany = csatolmany;
      this.#ido = ido;
      this.#szoveg = szoveg;
      this.#feladoEmail = feladoEmail;
      this.#cimzett = cimzett;
    }
  
    getSzoveg() {
      return this.#szoveg;
    }
    getFelado() {
      return this.#felado;
    }
    getTargy() {
      return this.#targy;
    }
    getCsatolmany() {
      return this.#csatolmany;
    }
    getIdo() {
      return this.#ido;
    }
    getFeladoEmail() {
      return this.#feladoEmail;
    }
    getCimzett() {
      return this.#cimzett;
    }
    getKedvenc() {
      return this.#kedvenc;
    }
  }
  
  export default Uzenet;
  