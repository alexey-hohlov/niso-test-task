# Тестовое задание ReactJS & Redux

## Задача:
Требуется разработать React-приложение, для вывода таблиц с данными.

## Требуемый функционал:
* Вывод маленького объема данных на 32 строки - ✅;
* Вывод большого объема данных на 1000 строк - ✅;
* Индикация загрузки данных - ✅;
* Клиентская паджинация (вывод не более 50-ти элементов на страницу);
* Добавление новой строки в таблицу из пользовательского вводa - ✅;
* Валидация пользовательского ввода;
* Сортировка данных по столбцам;
* Поиск по таблице  - ✅;
* Вывод детальных данных по выбранному элементу таблицы - ✅;

![Untitled](https://user-images.githubusercontent.com/79412122/147670886-366f4996-c48b-4bdd-81be-b3c025f83ac0.png)

## Схемы запросов для получения данных:

### 32 строки:
### `https://filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`

### 1000 строк:
### `https://filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}}`

## Yarn scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
