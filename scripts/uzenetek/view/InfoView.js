import Inbox from "../model/Inbox.js";
import ComposeModal from "./composeModal.js";

class InfoView {
  constructor() {
    new ComposeModal();
    let inbox = new Inbox($("tbody"));
    inbox.megnyitFigyel($("tr"))
    $(".left-arrow").on("click", () => {
      inbox = new Inbox($("tbody"));
      inbox.megnyitFigyel($("tr"))
    });
    $(".refresh").on("click", () => {
      inbox = new Inbox($("tbody"));
      inbox.megnyitFigyel($("tr"))
    });
  }
}

export default InfoView;
