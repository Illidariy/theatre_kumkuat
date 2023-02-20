import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spectacle } from './Types/types';

export default function SpectacleInfo():JSX.Element {
  const { id } = useParams();
    const [spectacle, setSpectacle] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/spectacles/${id}`)
      .then((res) => res.json())
      .then((data) => setSpectacle(data));
  }, []);
  return (
    <div>Gqergqerg</div>
  );
}
