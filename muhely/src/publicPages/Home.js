import "./styles/style.css"
import "./styles/header.css"
import "./styles/szolgaltatasok.css"

export default function Home() {
  return (
    <>
    <div className="myHeader"><video autoPlay controls loop muted>
        <source src="/images/header/headerVideo3.mp4" />
      </video></div>
      <div className="blockelem">

      
      <div className="containers">
        <div className="container">
          <img src="/images/szolgaltatasok/Akkumulator_csere.jpg" alt="Avatar" className="image" />
          <div className="middle">
            <div className="text">Akkumulátor</div>
          </div>  
        </div>

        <div className="container">
          <img src="/images/szolgaltatasok/futomubeallítas.jpg" alt="Avatar" className="image" />
          <div className="middle1">
            <div className="text">Futómű</div>
          </div>  
        </div>

        <div className="container">
          <img src="/images/szolgaltatasok/időszakos szerviz.jpg" alt="Avatar" className="image" />
          <div className="middle2">
            <div className="text">Időszakos szerviz</div>
          </div>  
        </div>

        <div className="container">
          <img src="/images/szolgaltatasok/Klíma.jpg" alt="Avatar" className="image" />
          <div className="middle3">
            <div className="text">Klíma</div>
          </div>  
        </div>
        
        <div className="container">
          <img src="/images/szolgaltatasok/atvizsgalas.jpg" alt="Avatar" className="image" />
          <div className="middle4">
            <div className="text">Ingyenes műszaki felmérés</div>
          </div>  
        </div>
      
        <div className="container">
          <img src="/images/szolgaltatasok/fekcsere.jpg" alt="Avatar" className="image" />
          <div className="middle5">
            <div className="text">Fékrendszer</div>
          </div>  
        </div>
        
        <div className="container"> 
          <img src="/images/szolgaltatasok/gumicsere.jpg" alt="Avatar" className="image" />
          <div className="middle6">
            <div className="text">Gumiabroncs,gumicsere</div>
          </div>  
        </div>
        
        <div className="container">
          <img src="/images/szolgaltatasok/kipufogó.jpg" alt="Avatar" className="image" />
          <div className="middle7">
            <div className="text">Kipufogó</div>
          </div>  
        </div>

        <div className="container">
          <img src="/images/szolgaltatasok/muszaki vizsga.jpg" alt="Avatar" className="image" />
          <div className="middle8">
            <div className="text">Műszaki vizsga</div>
          </div>  
        </div>
        
        <div className="container"> 
          <img src="/images/szolgaltatasok/olajcsere.jpg" alt="Avatar" className="image" />
          <div className="middle9">
            <div className="text">Olajcsere</div>
          </div>  
        </div>
        
      </div>
      
      </div>
    </>
  );
}
