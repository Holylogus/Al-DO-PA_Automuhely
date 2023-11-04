class Uzenet {
  #kedvenc;
  #felado;
  #targy;
  #csatolmany;
  #idopont;
  #szoveg;
  #feladoEmail;
  #cimzett;
  #olvasott;
  
  
  
    constructor(kedvenc, felado, targy, csatolmany, idopont, szoveg, feladoEmail, cimzett, olvasott) {
      this.#kedvenc = kedvenc;
      this.#felado = felado;
      this.#targy = targy;
      this.#csatolmany = csatolmany;
      this.#idopont = idopont;
      this.#szoveg = szoveg;
      this.#feladoEmail = feladoEmail;
      this.#cimzett = cimzett;
      this.#olvasott = olvasott;
      this.ev = idopont.substring(0,4)
      this.honap = idopont.substring(4,6)
      this.nap = idopont.substring(6,8)
      this.ora = idopont.substring(8, 10)
      this.perc = idopont.substring(10)
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
    getIdopont() {
      return this.#idopont;
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
    getOlvasott(){
      return this.#olvasott;
    }
    getHonap(){
      const honapok = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      let aktHonap = parseInt(this.honap, 10)
      if(this.honap.length == 1){
        aktHonap = parseInt(this.honap[1])
      }
      return honapok[aktHonap-1]

    }
  }
  
  export default Uzenet;
  