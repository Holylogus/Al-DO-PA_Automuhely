import Inbox from "../model/Inbox.js";
import ComposeModal from "./composeModal.js";

class InfoView {
  constructor() {
    new ComposeModal();
    new Inbox($("tbody"));
  }

 
}

export default InfoView;
