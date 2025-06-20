# 🚀 Repositor Project

> Миграция с Webpack 4 на Webpack 5 • React + TypeScript + FSD • Jest • ESLint + Stylelint

---

## 📦 Технологии

- **React** + **TypeScript**
- **Webpack 5** — с кастомной конфигурацией
- **Babel** — для трансформации modern JS
- **FSD (Feature-Sliced Design)** — архитектура проекта
- **SCSS modules** — для стилизации компонентов
- **Jest** — юнит-тестирование
- **ESLint + Stylelint + Prettier** — строгий контроль качества кода
- **Polyfills** — поддержка старых браузеров (`core-js`, `regenerator-runtime` и др.)

---

## 🛠 Скрипты

| Скрипт               | Назначение                                      |
|----------------------|-------------------------------------------------|
| `npm run start`      | Запуск dev-сервера на `localhost:3000`         |
| `npm run build`      | Сборка проекта (по умолчанию в `production`)   |
| `npm run build:prod` | Сборка в прод-режиме                            |
| `npm run build:dev`  | Сборка в dev-режиме                             |
| `npm run lint:ts`    | Проверка TypeScript/TSX файлов через ESLint    |
| `npm run lint:ts:fix`| Автоисправление ошибок ESLint                  |
| `npm run lint:scss`  | Проверка SCSS файлов через Stylelint           |
| `npm run lint:scss:fix` | Автоисправление ошибок Stylelint            |
| `npm run unit`       | Запуск тестов с использованием Jest            |

---

## 📁 Архитектура проекта

Проект построен по принципам **Feature-Sliced Design**:
