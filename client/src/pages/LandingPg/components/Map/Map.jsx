import mapboxGl from "mapbox-gl";
import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { IoLocation } from "react-icons/io5";
const MAPBOX_TOKEN =
  "pk.eyJ1IjoibWloaXItc2hpbmRlLTI5IiwiYSI6ImNsMTdwbmRuMzE2dDAzaXF6d2oxY3ZhcjQifQ.YsFq7FEkgKuIEBKco6cieQ";
mapboxGl.accessToken =
  "pk.eyJ1IjoibWloaXItc2hpbmRlLTI5IiwiYSI6ImNsMTdwbmRuMzE2dDAzaXF6d2oxY3ZhcjQifQ.YsFq7FEkgKuIEBKco6cieQ";

export const SimpleMap = ({ zoomLevel, location, h }) => {
  console.log(location)
  return (
    <div className=''>
      <ReactMapGL
        initialViewState={{
          latitude: 20.5937,
          longitude: 78.9629,
          zoom: zoomLevel,
        }}
        style={{width: "100%", height: h}}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        {location.map((item, i) => (
            <Marker longitude={item.longitude} latitude={item.latitude} anchor='bottom-left'>
            <div>
                <div className="p-1 bg-white border-[1px] rounded border-gray-400">
                    <h1>{item.name}</h1>
                </div>
                <IoLocation className="text-2xl text-purple-gray-700" />
            </div>
            </Marker>
        ))}
      </ReactMapGL>
    </div>
  );
};