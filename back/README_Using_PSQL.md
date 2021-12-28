# Use Postgresql with devops:

> В терминале для того чтобы зайти в консоль базы данных

1. psql -U postgres
   Где postgress это пользователь

> Список существующих баз данных

1. \l

> Выйти

1. \q

# Use Postgresql with developing:

> Для создания таблицы

1. create database tayressauda

> Подключаемся к базе данных 2) \connect tayressauda

> Создаем таблицы 3) create TABLE user(

    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    token VARCHAR(255),
    phone VARCHAR(255),

)

> Проверяем что таблицы созданы 4) \dt

> Если будут проблемы с кодировкой, для корректного отображения кириллицы в терминале базы 5) psql \! chcp 1251
