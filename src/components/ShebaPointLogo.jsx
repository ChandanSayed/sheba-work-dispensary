import React from 'react';

const ShebaPointLogo = () => {
  const logos = [
    { id: 1, img: '/images/sheba-logos/collection.png' },
    { id: 2, img: '/images/sheba-logos/multimedia.png' },
    { id: 3, img: '/images/sheba-logos/travel.png' },
    { id: 4, img: '/images/sheba-logos/interior.png' }
  ];
  return (
    <div className="flex justify-between">
      {logos.map(logo => {
        return <img className="sheba-logo" src={`${logo.img}`} alt="Logo" key={logo.id} />;
      })}
    </div>
  );
};

export default ShebaPointLogo;
