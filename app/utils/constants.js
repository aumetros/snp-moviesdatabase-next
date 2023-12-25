/**Сообщения об ошибках при валидации формы */
export const TITLE_REQUIRED = "Название фильма обязательно к заполнению.";
export const TITLE_MINLENGTH = "Название должно содержать минимум 2 символа.";
export const TITLE_MAXLENGTH = "Название фильма должно быть не длинее 50 символов.";

export const DIR_REQUIRED = "Имя режиссера обязательно к заполнению.";
export const DIR_MINLEGTH = "Имя режиссера должно содержать не менее 3 символов.";
export const DIR_MAXLENGTH = "Имя режиссера должно быть не длинее 40 символов.";

export const YEAR_REQUIRED = "Год выхода фильма обязателен к заполнению.";
export const YEAR_FORMAT = "Год выхода фильма должен быть в формате ГГГГ.";

export const POSTER_REQUIRED = "Ссылка на постер фильма обязательна к заполнению.";
export const POSTER_FORMAT = "Необходимо ввести ссылку.";

/**Регулярные выражения для валидации формы */
export const YEAR_REG = /^[12][0-9]{3}$/;
export const POSTER_REG =
  /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g;

  export const FILTER_PLACEHOLDER = "Введите текст для поиска";