"use server";

import {
  Client,
  PlacesNearbyResponse,
} from "@googlemaps/google-maps-services-js";

export type FetchGeoLocationDataValidationErrors = {
  lat?: string[];
  lng?: string[];
};

type FetchGeoLocationDataState = {
  validationErrors?: FetchGeoLocationDataValidationErrors;
  error?: string;
  data?: PlacesNearbyResponse;
};

const client = new Client({});

export async function fetchGeoLocationData(
  formData: FormData,
): Promise<FetchGeoLocationDataState> {
  const lat = formData.get("lat") as string;
  const lng = formData.get("lng") as string;

  if (!lat || !lng) {
    return {
      validationErrors: {
        lat: !lat ? ["Latitude is required"] : undefined,
        lng: !lng ? ["Longitude is required"] : undefined,
      },
    };
  }

  try {
    const data = await client.placesNearby({
      params: {
        location: { lat: parseFloat(lat), lng: parseFloat(lng) },
        radius: 500,
        key: process.env.GOOGLE_PLACES_API_KEY as string,
      },
    });

    return {
      data,
    };
  } catch (error) {
    return {
      error: "Something went wrong",
    };
  }
}
