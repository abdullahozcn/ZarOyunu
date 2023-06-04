import React from 'react';

const ZarListesi = ({ zarListesi }) => {
  return (
    <div className="ZarListesi">
      <h3>Zar Denemeleri:</h3>
      <ul>
        {zarListesi.map((zar, index) => (
          <li key={index}>{zar.join(' vs ')}</li>
        ))}
      </ul>
    </div>
  );
};

export default ZarListesi;
