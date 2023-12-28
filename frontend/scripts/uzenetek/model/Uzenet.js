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
  #txt;
  #hely;

  constructor(
    szulo,
    kedvenc,
    felado,
    targy,
    csatolmany,
    idopont,
    szoveg,
    feladoEmail,
    cimzett,
    olvasott,
    hely
  ) {
    this.#kedvenc = kedvenc;
    this.#felado = felado;
    this.#targy = targy;
    this.#csatolmany = csatolmany;
    this.#idopont = idopont;
    this.#szoveg = szoveg;
    this.#feladoEmail = feladoEmail;
    this.#cimzett = cimzett;
    this.#olvasott = olvasott;
    this.#hely = hely;
    this.ev = idopont.substring(0, 4);
    this.honap = idopont.substring(4, 6);
    this.nap = idopont.substring(6, 8);
    this.ora = idopont.substring(8, 10);
    this.perc = idopont.substring(10);
    this.#txt = `
    <div class="row">
    <h1>${this.#targy}</h1>
  </div>
  <div class="row">
    <div class="col-lg-9 col-md-9 col-sm-9">
      <h6>${
        this.#felado
      }&nbsp&nbsp&nbsp&nbsp<i class="fa fa-angle-down reszletekFul "
      aria-hidden="true"></i></h6>
    </div>
    <div class="col-lg-3 col-md-3 col-sm-3">
      <span>${this.formaz(this.#idopont)}</span>
    </div>
  </div>
  <div class='reszletek col-lg-6' style='display: none'>
  <div class="row">
    <div class="col-lg-2 col-md-2 col-sm-2">from:</div>
    <div class="col-lg-10 col-md-10 col-sm-10">
      ${this.#felado}
    </div>
    <div class="col-lg-2 col-md-2 col-sm-2">to:</div>
    <div class="col-lg-10 col-md-10 col-sm-10">
      ${this.#cimzett}
    </div>
    <div class="col-lg-2 col-md-2 col-sm-2">date:</div>
    <div class="col-lg-10 col-md-10 col-sm-10">
      ${this.formaz(this.#idopont)}
    </div>
    <div class="col-lg-2 col-md-2 col-sm-2">subject:</div>
    <div class="col-lg-10 col-md-10 col-sm-10">
      ${this.#targy}
    </div>
    </div>
  </div>
  <div class="row">
    <p>${this.#szoveg}</p>
  </div>
  <div class="row">
    <div class="btn-group col-lg-2 col-md-6 col-sm-5">
      <a class="btn mini " href="">
      <i class="fa-solid fa-reply"></i>Válasz
      </a>
    </div>
    <div class="btn-group col-lg-2 col-md-6 col-sm-5">
      <a class="btn mini " href="">
      <i class="fa-solid fa-share"></i>Továbbítás
      </a>
    </div>
  </div>
        `;
  }

  formaz(idopont) {
    const ev = idopont.substring(0, 4);
    const honap = idopont.substring(4, 6);
    const nap = idopont.substring(6, 8);
    const ora = idopont.substring(8, 10);
    const perc = idopont.substring(10);

    return `${ev}.${honap}.${nap} ${ora}:${perc}`;
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
  getOlvasott() {
    return this.#olvasott;
  }
  getHonap() {
    const honapok = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let aktHonap = parseInt(this.honap, 10);
    if (this.honap.length == 1) {
      aktHonap = parseInt(this.honap[1]);
    }
    return honapok[aktHonap - 1];
  }
  mutat() {
    return this.#txt;
  }
}

export default Uzenet;
