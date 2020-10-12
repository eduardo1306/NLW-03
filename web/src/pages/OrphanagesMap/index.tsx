import React from 'react';

import { Link } from 'react-router-dom';
import { Map, TileLayer } from 'react-leaflet';
import { FiPlus } from 'react-icons/fi';

import mapMarkerImg from '../../images/map-marker.svg';
import { Container } from './styles';

import 'leaflet/dist/leaflet.css';

const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <aside>
        <header>
          <img src={mapMarkerImg} alt=""/>
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão a espera da sua visita</p>
        </header>

        <footer>
          <strong>Espírito Santo</strong>
          <span>Vila Velha</span>
        </footer>
      </aside>
      <Map 
        center={[
          -20.3309519,
          -40.2986506
        ]}
        zoom={15}
        style={{
          width: '100%', height: '100%', zIndex: 5
        }}
      >        
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
      </Map>
      <Link to='/'>
        <FiPlus size={32} color="#fff" />
      </Link>
    </Container>
  )
}

export default OrphanagesMap;