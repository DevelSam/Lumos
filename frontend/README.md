# 🎬 Lumos - Frontend

React-приложение для онлайн-кинотеатра с поиском фильмов, просмотром контента и авторизацией.

## 🛠 Технологии
- **Ядро**: React 
- **Навигация**: React Router 
- **Управление данными**: React Query
- **Сборка**: Vite
- **Стили**: CSS Modules
- **HTTP-клиент**: Нативный Fetch API

## ⚙️ Конфигурация окружения
Перед запуском создайте файл `.env` в корне фронтенда на основе `.env.example`:

```bash
# Базовый URL бэкенд-сервера
VITE_BASE_URL=http://localhost:5000/api

# API-ключ для Kinopoisk.dev (получить на https://api.kinopoisk.dev/documentation)
VITE_API_KEY=ваш_ключ
```
### 🚀 Запуск приложения

Установка зависимостей
```bash
npm install
Запуск в режиме разработки
bash
npm run dev
```
Приложение будет доступно по адресу:
http://localhost:5173
