import React from "react";
import catDark from '../assets/cat-dark.svg'
import catLight from '../assets/cat-light.svg'
import huellas from '../assets/huellas.png'

const Header = () => { 
  
  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <header className="header">
      <div className="conteiner-img">
        <img className="conteiner-img__cat-dark" src={catDark} alt="Gato negro" />
        <img className="conteiner-img__cat-light" src={catLight} alt="Gato negro" />
      </div>
      <button 
        className="dark-mode"
        onClick={toggleDarkMode}
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="dark-mode__moon" viewBox="0 0 16 16">
          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="dark-mode__sun" viewBox="0 0 16 16">
          <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
        </svg>
      </button>
      <div className="conteiner-info">
        <h1 className="conteiner-info__title">
          Seguimientos pacientes {""}
          <span className="conteiner-info__title--span">Veterianaria</span>
        </h1>
        <img className="conteiner-info__huellas" src={huellas} alt="huellas de animal" />
      </div>
    </header>
  );
};

export default Header;
