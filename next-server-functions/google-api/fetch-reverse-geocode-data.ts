"use server";

import { Client, LatLngLiteral } from "@googlemaps/google-maps-services-js";
import { GeoCodeData } from "@/next-server-functions/google-api/fetch-geo-code-data";

export type FetchReverseGeoLocationDataValidationErrors = {
  latLng?: string[];
};

type FetchReverseGeoCodeDataState = {
  validationErrors?: FetchReverseGeoLocationDataValidationErrors;
  error?: string;
  data?: GeoCodeData;
};

const client = new Client({});

export async function fetchReverseGeoCodeData(
  latLng: LatLngLiteral,
): Promise<FetchReverseGeoCodeDataState> {
  if (!latLng || !latLng.lat || !latLng.lng) {
    return {
      validationErrors: { latLng: ["Latitude and Longitude are required"] },
    };
  }

  try {
    const data = await client.reverseGeocode({
      params: {
        latlng: latLng,
        key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
      },
    });

    return {
      data: {
        placeId: data.data.results[0].place_id,
        latLng: data.data.results[0].geometry.location,
        fullAddress: data.data.results[0].formatted_address,
      },
    };
  } catch (error) {
    console.error("Error fetching reverse geocode data:", error);
    return {
      error: "Something went wrong",
    };
  }
}
