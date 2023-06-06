import React from 'react';

const Hamburger = () => {

  const handleMenuClick = () => {
    const navMenu = document.querySelector('.navMenu ul');
    const navMenuCheck = document.getElementById('menuToggle');
    const checked = navMenuCheck.checked;
    if (checked) {
      console.log( 'false - not checked' );
      navMenu.style.display = "none";
      navMenu.style.height = "0";
      navMenu.style.gap = "0";
    } else {
      console.log( 'true - checked' );
      navMenu.style.display = "block";
      navMenu.style.height = "auto";
      navMenu.style.gap = "10px";
    }

  };

  return (
    <div className="hamburger">
      <input type="checkbox" id='menuToggle' />
      <label htmlFor="menuToggle" id="menuIcon">
        <i onClick={handleMenuClick} className="fa-solid fa-bars"></i>
      </label>
    </div>
  )
}

export default Hamburger