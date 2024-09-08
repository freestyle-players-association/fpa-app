"use server";

export async function testDummyAction(_: {}, formData: FormData) {
  const placeId = formData.get("placeId");
  const fullAddress = formData.get("fullAddress");
  const lat = formData.get("lat");
  const lng = formData.get("lng");

  console.log("lat", lat);
  console.log("lng", lng);
  console.log("placeId", placeId);
  console.log("fullAddress", fullAddress);

  return {};
}
