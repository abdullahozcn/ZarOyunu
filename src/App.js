import React, { useState } from 'react';
import Zar from './Zar';
import ZarListesi from './ZarListesi';
const zarYuzleri = [1, 2, 3, 4, 5, 6];

const App = () => {
  const [birinciKullaniciZar, setBirinciKullaniciZar] = useState(1);
  const [ikinciKullaniciZar, setIkinciKullaniciZar] = useState(1);
  const [zarListesi, setZarListesi] = useState([]);

  const zarAt = () => {
    const birinciZar = zarYuzleri[Math.floor(Math.random() * zarYuzleri.length)];
    const ikinciZar = zarYuzleri[Math.floor(Math.random() * zarYuzleri.length)];

    setBirinciKullaniciZar(birinciZar);
    setIkinciKullaniciZar(ikinciZar);
    setZarListesi([...zarListesi, [birinciZar, ikinciZar]]);
  };

  return (
    <div className="App">
      <div className="Appiç">
      <Zar yuz={birinciKullaniciZar} kullanici="Birinci Kullanıcı"  className="zar" />
      <Zar yuz={ikinciKullaniciZar} kullanici="İkinci Kullanıcı"  className="zar" />
      <button onClick={zarAt} className="buton">Tekrar Deneme</button>
      <ZarListesi zarListesi={zarListesi} />
      </div> 
    </div>
  );
};

export default App;
