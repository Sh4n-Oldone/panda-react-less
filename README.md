# Тестовое задание в Crazy Panda

[Деплой](https://sh4n-oldone.github.io/panda-react-less/).

## Текст задания (орфография и разметка сохранены)

Важно: прикладывать ссылки на работающий проект, а не просто текст. Необходимо разработать javascript-компонент для построения таблицы с дополнительными возможностями для пользователя. Функционал: Клиентская пагинация: данные необходимо отображать постранично, максимум 50 элементов на страницу, необходимо предоставить пользовательскую навигацию для перехода по страницам. Сортировка по столбцам: при нажатии на название столбца строки таблицы сортируются по возрастанию, при повторном клике - по убыванию. Фильтрация: компонент предоставляет текстовое поле, в которое пользователь может ввести текст и строки таблицы, данные которых не содержат подстроку, введённую пользователем, скрываются. Перефильтрация осуществляется на каждое изменение значения поля. Плюсом будет реализация на React. Важно добавить также ссылку на деплой проекта

## Комментарии

Q. Почему при генерации клеток используется pos?
A. Логично было бы назвать id, но если данные будут сохраняться на сервере, то в базе данных уже будет или id или _id. Так что ключом идентификатора стал pos(ition).

