


import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation("main");
  console.log("MainPage loaded");
  return (
    <div>
      {/* <BugButton /> */}
  
      {t("Главная страница")}
    </div>
  );
};

export default MainPage;
