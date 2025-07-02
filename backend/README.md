# 🚀 Lumos - Backend (Express.js)

RESTful API для онлайн-кинотеатра.

## ⚙️ Конфигурация окружения

Создайте файл `.env` в корне бэкенда на основе `.env.example`:

```env
# Базовые настройки
PORT=5000
JWT_SECRET_KEY=your_strong_secret_here
API_URL="http://localhost:5000"
CLIENT_URL="http://localhost:5173"

# Настройки MongoDB
DB_URL="mongodb://localhost:27017/lumos?retryWrites=true&w=majority&appName=Cluster0"

# Настройки SMTP (Mail.ru пример)
SMTP_HOST=smtp.mail.ru
SMTP_PORT=465
SMTP_USER=your_email@mail.ru
SMTP_PASSWORD=your_smtp_password
```
## 💻 Локальный запуск (без Docker)
1) Установите MongoDB

2) Запустите сервер:

```bash
npm install
npm start
```

API будет доступно на http://localhost:5000

## 🐳 Запуск через Docker
### С MongoDB на локальной машине:
```bash 
docker build -t lumos-backend .
docker run -p 5000:5000 lumos-backend
```
