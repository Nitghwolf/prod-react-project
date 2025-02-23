import React from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import  Button, { ThemeButton } from "shared/ui/AppLink/Button/Button";

interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher: React.FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      className={classNames("", {}, [className])}
      onClick={toggle}
      theme={ThemeButton.CLEAR}
    >
      {t("Язык")}
    </Button>
  );
};

export default LangSwitcher;
