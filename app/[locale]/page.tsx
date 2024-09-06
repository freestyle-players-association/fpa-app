import { getTranslations } from "next-intl/server";

export default async function Index() {
  const t = await getTranslations("HomePage");
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      {t("title")}
    </div>
  );
}
