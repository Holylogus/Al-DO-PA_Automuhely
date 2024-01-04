$(function () {
  let txt = `
<nav class="navbar navbar-expand-lg" data-bs-theme="dark">
<div class="container-fluid">
  <a class="navbar-brand" href="../../index.html">𝙰𝙻𝙳𝙾𝙿𝙰</a>
  <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarNavDropdown"
    aria-controls="navbarNavDropdown"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Admin
        </a>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="./admin.html">Főoldal</a>
          </li>
          <li>
            <a class="dropdown-item" href="./szamla.html">Számlák</a>
          </li>
          <li>
            <a class="dropdown-item" href="./nyomonKovetes.html"
              >Nyomon követés</a
            >
          </li>
          <li>
            <a class="dropdown-item" href="./uzenetek.html"
              >Üzenetek<span class="uzenetekSzama">
                <!-- hány üzenet van -->
              </span></a
            >
          </li>
          <li>
            <a class="dropdown-item" href="./statisztika.html"
              >Statisztika</a
            >
          </li>
          <li>
            <a class="dropdown-item" href="./beosztas.html">Beosztás</a>
          </li>
          <li>
            <a class="dropdown-item" href="./weboldal.html"
              >Weboldal szerkesztése</a
            >
          </li>
          <li>
            <a class="dropdown-item" href="./beallitasok.html"
              >Beállítások</a
            >
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="../public/galeria.html">Galéria</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="../public/akciok.html">Akciók</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="../public/munkadijak.html"
          >Munkadíjak</a
        >
      </li>
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Szolgáltatások
        </a>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="../public/szolgaltatasok.html"
              >Szolgáltatások</a
            >
          </li>
          <li><a class="dropdown-item" href="#">Akkumulátor</a></li>
          <li><a class="dropdown-item" href="#">Futómű</a></li>
          <li>
            <a class="dropdown-item" href="#">Időszakos szervíz</a>
          </li>
          <li><a class="dropdown-item" href="#">Klíma</a></li>
          <li><a class="dropdown-item" href="#">Kipufogó</a></li>
          <li><a class="dropdown-item" href="#">Olajcsere</a></li>
          <li><a class="dropdown-item" href="#">Fék</a></li>
          <li>
            <a class="dropdown-item" href="#">Gumiabroncs, gumicsere</a>
          </li>
          <li>
            <a class="dropdown-item" href="#"
              >Ingyenes műszaki felmérés</a
            >
          </li>
          <li><a class="dropdown-item" href="#">Műszaki vizsga</a></li>
        </ul>
      </li>
    </ul>
  </div>
  <a href="../public/login.html" class="loginUser">
    <i class="fa-regular fa-user loginUser"></i
  ></a>
</div>
</nav>
`;

  $("header").html(txt);
})
