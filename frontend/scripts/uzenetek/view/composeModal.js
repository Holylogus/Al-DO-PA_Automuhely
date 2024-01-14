class ComposeModal {
  constructor() {
    this.compose = $(".btn-compose");
    this.modal = $("#myModal");
    this.fileInput = $(".fileinput-button");
    this.csatoltFajlok = $(".csatoltFajlok");
    this.modalHide = this.modal.find(".close");


    this.compose.on("click", () => {
      this.mutat();
    });

    this.modalHide.on("click", () => {
      this.elrejt();
    });

     $(document).on("click", (event) => {
          console.log(event.target);

       if (event.target === this.modal) {
         this.elrejt();
       }
     });

    this.fileInput.on("change", () => {
      this.csatolmanyHozzaad();
    });

    this.csatoltFajlok.on("click", ".torolGomb", () => {
      this.csatolmanyTorol();
    });
  }

  mutat() {
    this.modal.modal("show");
  }

  elrejt() {
    console.log("elrejt");
    this.modal.modal("hide");
  }

  csatolmanyHozzaad() {
    var fajlUt = this.fileInput.children("input").val();
    var fajlNev = fajlUt.replace("C:\\fakepath\\", " ");
    this.csatoltFajlok.append(
      `<i class="fa fa-paperclip"></i>`,
      fajlNev,
      `<span class="torolGomb">&nbsp;❌&nbsp;</span>`
    );
  }

  csatolmanyTorol() {
    console.log("Törlés gomb");
  }
}

export default ComposeModal;
