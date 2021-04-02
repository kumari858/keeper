// import React from "react";
// function Footer(){
//   const currentYear = new Date().getFullYear(); 
//  return <footer>
//  <p>copyright @ {currentYear}</p>
//  </footer>;
//     }
// export default Footer;
import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
