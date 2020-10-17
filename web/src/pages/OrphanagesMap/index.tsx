import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { FiArrowRight, FiPlus } from 'react-icons/fi';

import mapMarkerImg from '../../images/map-marker.svg';
import { Container } from './styles';

import mapIcon from '../../utils/mapIcon';

import api from '../../services/api';

interface IOrphanages {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<IOrphanages[]>([]);

  useEffect(() => {
    api.get('/orphanages').then(response => setOrphanages(response.data));
  }, []);

  return (
    <Container>
      <aside>
        <header>
          <img src={mapMarkerImg} alt="" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão a espera da sua visita</p>
        </header>

        <footer>
          <strong>Espírito Santo</strong>
          <span>Vila Velha</span>
        </footer>
      </aside>
      <Map
        center={[-20.3309519, -40.2986506]}
        zoom={15}
        style={{
          width: '100%',
          height: '100%',
          zIndex: 5,
        }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
        {orphanages.map(orphanage => {
          return (
            <Marker
              key={orphanage.id}
              icon={mapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map-popup"
              >
                {orphanage.name}
                <Link to={`/orphanage/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#fff" />
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </Map>
      <Link to="/orphanage/create">
        <FiPlus size={32} color="#fff" />
      </Link>
    </Container>
  );
};

export default OrphanagesMap;
