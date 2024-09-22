"use client";

import React, { useEffect, useState } from "react";
import { fetchPlacesAutocompleteData } from "@/next-server-functions/google-api/fetch-places-autocomplete-data";
import {
  LatLngLiteral,
  PlaceAutocompleteResult,
} from "@googlemaps/google-maps-services-js";
import {
  fetchGeoCodeData,
  GeoCodeData,
} from "@/next-server-functions/google-api/fetch-geo-code-data";
import { debounce } from "@/utils/common/debounce";
import GoogleMapsAddressInputFieldSet from "@/components/google-maps/google-maps-address-input/google-maps-address-input-field-set";
import { MapProvider } from "../map-provider";
import { fetchReverseGeoCodeData } from "@/next-server-functions/google-api/fetch-reverse-geocode-data";

export default function GoogleMapsAddressInput() {
  const [address, setAddress] = useState("");

  const [placeAutCompleteResults, setPlaceAutCompleteResults] = useState<
    PlaceAutocompleteResult[]
  >([]);

  const [center, setCenter] = useState<LatLngLiteral>();

  const [selectedLocation, setSelectedLocation] = useState<GeoCodeData | null>(
    null,
  );

  // every time the address changes, we fetch the suggestions from places autocomplete api
  useEffect(() => {
    if (address.length > 2) {
      // debouncing so that the request will not be fired on every keyboard hit
      const debouncedFetch = debounce(() => {
        if (address.length > 2 && !selectedLocation) {
          fetchPlacesAutocompleteData(address).then((res) =>
            setPlaceAutCompleteResults(res.places ?? []),
          );
        }
      }, 600);
      debouncedFetch();
    }
  }, [address, selectedLocation]);

  const handleSelectAutoCompleteResult = async (placeId: string) => {
    const res = await fetchGeoCodeData(placeId);
    if (res.data) {
      setSelectedLocation(res.data);
      setCenter(res.data.latLng);
      setAddress(res.data.fullAddress);
      setPlaceAutCompleteResults([]);
    }
  };

  const handleDragMarker = async (e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      const latLng = e.latLng.toJSON();

      setSelectedLocation((prev) => ({
        // must be present cause wre are dragging a marker
        ...prev!,
        latLng: latLng,
      }));

      fetchReverseGeoCodeData(latLng).then((res) => {
        if (res.data) {
          setSelectedLocation(res.data);
          setCenter(latLng);
          setAddress(res.data.fullAddress);
        }
      });
    }
  };

  const handleClearSelectedLocation = () => {
    setSelectedLocation(null);
    setAddress("");
  };

  return (
    <MapProvider>
      <GoogleMapsAddressInputFieldSet
        center={center}
        fullAddress={address}
        onChangeAddress={setAddress}
        placeAutoCompleteResults={placeAutCompleteResults}
        onSelectAutoCompleteResult={handleSelectAutoCompleteResult}
        onDragMarker={handleDragMarker}
        selectedLocation={selectedLocation}
        onClearSelectedLocation={handleClearSelectedLocation}
      />
    </MapProvider>
  );
}
