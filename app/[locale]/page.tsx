import { getTranslations } from "next-intl/server";
import DummyForm from "@/components/google-maps/google-maps-address-input/dummy-form";

export default async function Index() {
  const t = await getTranslations("HomePage");
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      {t("title")}
      <DummyForm />
    </div>
  );
}
