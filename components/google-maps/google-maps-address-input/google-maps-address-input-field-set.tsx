import React from "react";
import { GeoCodeData } from "@/next-server-functions/google-api/fetch-geo-code-data";
import {
  LatLngLiteral,
  PlaceAutocompleteResult,
} from "@googlemaps/google-maps-services-js";
import GoogleMapsAddressInputMap from "@/components/google-maps/google-maps-address-input/google-maps-address-input-map";

type GoogleMapsAddressInputFieldProps = {
  fullAddress: string;
  onChangeAddress: (address: string) => void;
  placeAutoCompleteResults: PlaceAutocompleteResult[];
  onSelectAutoCompleteResult: (placeId: string) => void;
  selectedLocation: GeoCodeData | null;
  onClearSelectedLocation: () => void;
  center?: LatLngLiteral;
  onDragMarker: (e: google.maps.MapMouseEvent) => void;
};

export default function GoogleMapsAddressInputFieldSet({
  fullAddress,
  onChangeAddress,
  selectedLocation,
  onClearSelectedLocation,
  placeAutoCompleteResults,
  onSelectAutoCompleteResult,
  center,
  onDragMarker,
}: GoogleMapsAddressInputFieldProps) {
  const hasSelectedLocation = Boolean(selectedLocation);
  return (
    <fieldset className="w-full">
      <div className="flex">
        <input
          name="fullAddress"
          type="text"
          value={fullAddress}
          onChange={(e) => onChangeAddress(e.target.value)}
          placeholder="Enter address"
          className="w-1/2"
        />
        <input name="placeId" hidden defaultValue={selectedLocation?.placeId} />
        <input name="lat" hidden defaultValue={selectedLocation?.latLng.lat} />
        <input name="lng" hidden defaultValue={selectedLocation?.latLng.lng} />
        {hasSelectedLocation && (
          <button
            className="border-solid"
            type="button"
            onClick={onClearSelectedLocation}
          >
            clear
          </button>
        )}
      </div>
      <ul>
        {placeAutoCompleteResults.map((suggestion) => {
          return (
            <li
              key={suggestion.place_id}
              onClick={() => onSelectAutoCompleteResult(suggestion.place_id)}
            >
              {suggestion.description}
            </li>
          );
        })}
      </ul>
      <GoogleMapsAddressInputMap
        selectedLocation={selectedLocation}
        center={center}
        onDragMarker={onDragMarker}
      />
    </fieldset>
  );
}
