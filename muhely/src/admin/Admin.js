import Nav from 'react-bootstrap/Nav';

export default function Admin() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card">
              <div className="card-body">
              <Nav.Link href="/szamla">
                  <h5 className="card-title text-center">Számlák</h5>
                  <i className="fa-solid fa-file-invoice-dollar"></i>
              </Nav.Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card">
              <div className="card-body">
               <Nav.Link href="/folyamatban">
                  <h5 className="card-title text-center">Folyamatban</h5>
                  <i className="fa-solid fa-list-check"></i>
                </Nav.Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card">
              <div className="card-body">
              <Nav.Link href="/uzenetek">
                  <h5 className="card-title text-center">Üzenetek</h5>
                  <i className="fa-regular fa-envelope"></i>
              </Nav.Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card">
              <div className="card-body">
              <Nav.Link href="/statisztika">
                  <h5 className="card-title text-center">Statisztika</h5>
                  <i className="fa-solid fa-chart-line"></i>
              </Nav.Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card">
              <div className="card-body">
              <Nav.Link href="/beosztas">
                  <h5 className="card-title text-center">Beosztás</h5>
                  <i className="fa-regular fa-calendar-days"></i>
              </Nav.Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card">
              <div className="card-body">
              <Nav.Link href="/uzenetek">
                  <h5 className="card-title text-center">Beállítások</h5>
                  <i className="fa-solid fa-gear"></i>
              </Nav.Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
