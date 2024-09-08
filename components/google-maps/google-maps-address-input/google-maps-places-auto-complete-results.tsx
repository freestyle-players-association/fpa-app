import React from "react";
import { PlaceAutocompleteResult } from "@googlemaps/google-maps-services-js";

type GoogleMapsPlacesAutoCompleteResultProps = {
  placeAutoCompleteResults: PlaceAutocompleteResult[];
  onSelectAutoCompleteResult: (placeId: string) => void;
};

export default function GoogleMapsPlacesAutoCompleteResults({
  placeAutoCompleteResults,
  onSelectAutoCompleteResult,
}: GoogleMapsPlacesAutoCompleteResultProps) {
  return (
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
  );
}
