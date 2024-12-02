import React from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LangSwitcher.module.scss";
import Button, { ThemeButton } from "shared/ui/AppLink/Button/Button";
import { useTranslation } from "react-i18next";

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
      className={classNames(cls.langSwitcher, {}, [className])}
      onClick={toggle}
      theme={ThemeButton.CLEAR}
    >
      {t("Язык")}
    </Button>
  );
};

export default LangSwitcher;
