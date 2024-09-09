"use client";

import { useFormState } from "react-dom";
import { testDummyAction } from "@/next-server-functions/event-schedule/test-dummy-action";
import GoogleMapsAddressInput from "@/components/google-maps/google-maps-address-input/google-maps-address-input";
import FormSubmitButton from "@/components/common/form-submit-button";

export default function DummyForm() {
  const [state, dispatch] = useFormState(testDummyAction, {});

  return (
    <form action={dispatch} className="w-full">
      <GoogleMapsAddressInput />
      <FormSubmitButton>Submit</FormSubmitButton>
    </form>
  );
}
