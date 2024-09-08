import { GoogleMap, Marker } from "@react-google-maps/api";
import React from "react";
import { LatLngLiteral } from "@googlemaps/google-maps-services-js";
import { GeoCodeData } from "@/next-server-functions/google-api/fetch-geo-code-data";

const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: "auto",
  mapTypeId: "satellite",
};

export const defaultMapContainerStyle = {
  width: "100%",
  height: "60vh",
  borderRadius: "15px 0px 0px 15px",
};

const defaultCenter = {
  lat: 35.8799866,
  lng: 76.5048004,
};

const defaultMapZoom = 5;
const selectedMapZoom = 15;

type GoogleMapsAddressInputMapProps = {
  center?: LatLngLiteral;
  selectedLocation: GeoCodeData | null;
  onDragMarker: (e: google.maps.MapMouseEvent) => void;
};

export default function GoogleMapsAddressInputMap({
  center,
  selectedLocation,
  onDragMarker,
}: GoogleMapsAddressInputMapProps) {
  return (
    <GoogleMap
      mapContainerStyle={defaultMapContainerStyle}
      center={center ?? defaultCenter}
      zoom={selectedLocation ? selectedMapZoom : defaultMapZoom}
      options={defaultMapOptions}
    >
      {selectedLocation && (
        <Marker
          position={selectedLocation.latLng}
          draggable={true}
          onDragEnd={onDragMarker}
        />
      )}
    </GoogleMap>
  );
}
