import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import Button from 'shared/ui/AppLink/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

const PageError: React.FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    /* eslint-disable no-restricted-globals */
    location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
    </div>
  );
};

export default PageError;
