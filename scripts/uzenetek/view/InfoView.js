import Inbox from "../model/Inbox.js";
import ComposeModal from "./composeModal.js";

class InfoView {
  constructor() {
    new ComposeModal();
    let inbox = new Inbox($("tbody"));

    $(".left-arrow").on("click", () => {
      inbox = new Inbox($("tbody"));
    });
  }
}

export default InfoView;
