import { useTranslation } from "react-i18next";

const MainPage = () => {
  const {t} = useTranslation('main');


  return (
    <div>
      {t("Главная страница")}
      {t("Главная страница 123")}
    </div>
  );
};

export default MainPage;