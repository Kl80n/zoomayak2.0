# ЗооМаяк v7.1

## ВАЖНО: загрузка в GitHub
Содержимое этого архива — **корень Vite-проекта**. Загружать нужно сами файлы `package.json`, `index.html`, `src/`, `public/` и т.д. в корень репозитория.

**НЕ создавай папку `v6` или `v7` внутри репозитория.**

Vercel должен видеть в корне:

```text
package.json
index.html
src/
public/
vite.config.ts
vercel.json
```

## Что в v7.1
- Утверждённый логотип ЗооМаяка из master-файла пользователя: маяк + собака + кошка + сердце + надпись «ЗооМаяк».
- Один master-логотип используется в шапке и QR-адреснике.
- На главной нет отдельного блока «Выберите питомца» и повторного блока «Данные питомца»: выбранный питомец показывается один раз в Hero.
- «Мои питомцы» остаётся отдельным полноценным разделом.
- «Личный кабинет» доступен из шапки и содержит профиль владельца.
- «Объявления» содержит продажу животных, услуги и «Мои объявления».
- Лента объявлений подготовлена под единый каталог Avito / VK / Telegram / ЗооМаяк; внешние источники в MVP представлены демонстрационными данными.
- QR-код настоящий и ведёт на `/qr/<ZM-ID>`; в QR встроен знак ЗооМаяка.
- Сканер использует камеру через `@zxing/browser`.

## Vercel
Build command: `npm run build`
Output directory: `dist`
Install command: `npm install`


## v8 — homepage refresh
- Approved ЗооМаяк logo is used as the master visual; the dark theme uses a transparent-background derivative without changing the artwork.
- The top navigation keeps Главная, Объявления and Потеряшка SOS; Мои питомцы, Напоминания and Здоровье are moved into the working Личный кабинет menu.
- Homepage no longer repeats pet cards or the nearest-events panel; it adds popular animal listings, feature shortcuts, SOS promo and newsletter.
- Animal listings have a species dropdown filter; pet creation uses the same species dropdown.
