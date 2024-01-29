export default function Uzenetek() {
  return (
    <>
      <main id="uzenetekMain">
        <div className="container-message">
          <div className="mail-box container-fluid">
            <aside className="sm-side col-lg-2 col-md-3 col-sm-12 mobilRejt">
              <div className="user-head">
                <div className="user-name">
                  <h5>
                    <a href="../../index.html">ALDOPA</a>
                  </h5>
                  <span>
                    <a href="#">aldopa@info.com</a>
                  </span>
                </div>
              </div>
              <div className="inbox-body">
                <a
                  href="#myModal"
                  datatoggle="modal"
                  title="Compose"
                  className="btn btn-compose"
                >
                  Üzenet írása
                </a>
                <div
                  aria-hidden="true"
                  aria-labelledby="myModalLabel"
                  role="dialog"
                  tabIndex="-1"
                  id="myModal"
                  className="modal fade"
                  style={{display: "none"}}
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title">Üzenet írása</h4>
                        <button
                          aria-hidden="true"
                          datadismiss="modal"
                          className="close"
                          type="button"
                        >
                          X
                        </button>
                      </div>
                      <div className="modal-body">
                        <form role="form" className="form-horizontal">
                          <div className="form-group">
                            <div className="col-lg-12">
                              <input
                                type="text"
                                placeholder="Címzett"
                                id="inputEmail1"
                                className="form-control cimzett"
                              />
                              <div className="to">To</div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-lg-12">
                              <input
                                type="text"
                                placeholder="Tárgy"
                                id="inputPassword1"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <br />
                            <div className="col-lg-12">
                              <textarea
                                rows="10"
                                cols="30"
                                className="form-control"
                                id=""
                                name=""
                                placeholder="Üzenet"
                              ></textarea>
                              <span className="csatoltFajlok"></span>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-lg-offset-2 col-lg-10">
                              <span className="btn fileinput-button">
                                <i className="fa fa-plus fa fa-white"></i>
                                <span>Csatolmány</span>
                                <input type="file" name="files[]" multiple="" />
                              </span>
                              <button className="btn btn-send" type="submit">
                                Send
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    {/* modal-content */}
                  </div>
                  {/* modal-dialog */}
                </div>
                {/* modal */}
              </div>

              <ul className="inbox-nav inbox-divider">
                <li className="active">
                  <a href="#">
                    <i className="fa fa-inbox"></i> Bejövő
                    <span className="label label-danger pull-right">
                      {/* hány bejövő olvasatlan van */}
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-envelope-o"></i> Elküldött
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-bookmark-o"></i> Fontos
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-external-link"></i> Piszkozatok
                    <span className="label label-info pull-right"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-trash-o"></i> Törölt
                  </a>
                </li>
              </ul>
            </aside>
            <aside className="lg-side col-lg-11 col-md-10 col-sm-12">
              <div className="inbox-head mobilRejt">
                <h3 className="bejov">Bejövő emailek</h3>
                <form action="#" className="pull-right position keresoMezo">
                  <div className="input-append">
                    <input
                      type="text"
                      className="sr-input"
                      placeholder="Keresés"
                    />
                    <button className="btn sr-btn" type="button">
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </form>
              </div>
              <div className="inbox-body inbox-body-mails">
                <div className="mail-option">
                  <div className="btn-group left-arrow">
                    <a
                      dataoriginal-title="Back"
                      dataplacement="top"
                      datatoggle="dropdown"
                      className="btn mini tooltips"
                    >
                      <i className="fa-solid fa-arrow-left"></i>
                    </a>
                  </div>
                  <div className="chk-all">
                    <div className="btn-group" role="group">
                      <input
                        type="checkbox"
                        className="mail-checkbox mail-group-checkbox"
                      />
                      <a
                        datatoggle="dropdown-toggle"
                        type="button"
                        databs-toggle="dropdown"
                        className="btn mini all"
                        aria-expanded="false"
                      >
                        <i className="fa fa-angle-down"></i>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-dark">
                        <li>
                          <a href="#" className="dropdown-item">
                            {" "}
                            Nincs
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            {" "}
                            Olvasott
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            {" "}
                            Olvasatlan
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="btn-group refresh">
                    <a
                      dataoriginal-title="Refresh"
                      dataplacement="top"
                      datatoggle="dropdown"
                      className="btn mini tooltips"
                    >
                      <i className="fa fa-refresh"></i>
                    </a>
                  </div>

                  <div className="btn-group">
                    <a
                      datatoggle="dropdown-toggle"
                      type="button"
                      databs-toggle="dropdown"
                      className="btn mini all"
                      aria-expanded="false"
                    >
                      Áthelyez
                      <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li>
                        <a className="dropdown-item">
                          <i className="fa fa-pencil"></i> Megjelölés
                          olvasottként
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item">
                          <i className="fa fa-ban"></i> Spam
                        </a>
                      </li>
                      <li className="divider"></li>
                      <li>
                        <a className="dropdown-item">
                          <i className="fa fa-trash-o"></i> Törlés
                        </a>
                      </li>
                    </ul>
                  </div>

                  <ul className="unstyled inbox-pagination">
                    <li>
                      <span>
                        {/* oldalak száma ide jön */}
                        <span className="osszesEmailSzama mobilRejt">
                          1-50 of
                        </span>
                      </span>
                    </li>
                    <li>
                      <a className="np-btn" href="#">
                        <i className="fa fa-angle-left pagination-left"></i>
                      </a>
                    </li>
                    <li>
                      <a className="np-btn" href="#">
                        <i className="fa fa-angle-right pagination-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <table className="table table-inbox">
                  <tbody>{/* idejön a beérkező */}</tbody>
                </table>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
