import React from 'react';

const Zar = ({ yuz, kullanici }) => {
  const tabanYolu = `images/zar${yuz}.jpg`;

  return (
    <div className="Zar">
      <h2>{kullanici}</h2>
      <img src={tabanYolu} alt={`zar-${yuz}`} />
    </div>
  );
};

export default Zar;
