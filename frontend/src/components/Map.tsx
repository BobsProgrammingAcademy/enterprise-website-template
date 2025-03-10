import { useTheme } from '@mui/material/styles';
import { LatLngExpression } from 'leaflet';
import { MapContainer, Circle, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  coordinates: [number, number];
  zoom: number;
}

const Map = ({ coordinates, zoom }: MapProps): JSX.Element => {
  const theme = useTheme();
  const position: LatLngExpression = coordinates;
  const fillBlueOptions = { fillColor: theme.palette.primary.main };

  return (
    <MapContainer
      center={position}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Circle center={position} pathOptions={fillBlueOptions} radius={50} />
    </MapContainer>
  );
};

export default Map;
