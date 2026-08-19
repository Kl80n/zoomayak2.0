# ЗооМаяк MVP

Рабочая Vite + React + TypeScript заготовка интерфейса ЗооМаяка.

## Запуск локально

```bash
npm install
npm run dev
```

## Проверка

```bash
npm run typecheck
npm run build
```

## Vercel

Проект подготовлен для Vercel:

- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

Можно импортировать репозиторий GitHub напрямую в Vercel.

## Что сейчас работает

- интерфейс кабинета питомца;
- добавление питомцев;
- цифровой паспорт;
- QR/сканирование в демо-режиме;
- напоминания;
- медицинские записи;
- SOS/потеряшки;
- сервисы;
- сохранение демо-данных в localStorage.

Следующий этап — заменить localStorage на настоящий API и PostgreSQL.
