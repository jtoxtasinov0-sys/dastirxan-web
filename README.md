# Dastirxan Uzbek Cuisine · landing page

Incheondagi **Dastirxan** o‘zbek milliy taomlari restorani uchun premium landing sahifa.
4 tilda: o‘zbek, rus, ingliz, koreys (brauzer tiliga qarab avtomatik tanlanadi, `?lang=ko` kabi havola bilan ham ochiladi).

Build kerak emas: oddiy statik HTML/CSS/JS. Vercel'da framework **Other**, build command bo‘sh, output papka: ildiz (`.`).

## Tuzilma

```
index.html              sahifa (barcha bo‘limlar)
assets/css/style.css    dizayn tizimi, animatsiyalar, moslashuvchan layout
assets/css/fonts.css    o‘z serverimizdagi shriftlar (Marcellus, Forum, Questrial, Inter, Great Vibes)
assets/js/i18n.js       barcha matnlar 4 tilda
assets/js/menu.js       menyu (142 pozitsiya, narxlar), mashhur taomlar va setlar
assets/js/main.js       til almashtirish, bron qilish oynasi, menyu qidiruvi, animatsiyalar
assets/img/food/        rasmiy menyudan fonsiz kesilgan taomlar (WebP, shaffof)
assets/img/photo/       Instagram kadrlari (interyer, galereya, banket)
```

## Tez-tez o‘zgartiriladigan joylar

- **Narx yoki taom qo‘shish:** `assets/js/menu.js` → `DX_MENU`. Format: `['o‘zbekcha', 'русский', 'English', '한국어', narx]`.
- **Mashhur taomlar (likopchalar):** `DX_SIGNATURE` (rasm nomi `assets/img/food/` ichidan).
- **Matnlar:** `assets/js/i18n.js` (har bir kalit 4 tilda).
- **Telefon / Instagram:** `assets/js/main.js` boshidagi `PHONE` va `IG_DM`, hamda `index.html` dagi `tel:` havolalar.

## Bron qilish qanday ishlaydi

Server yoki ma’lumotlar bazasi yo‘q. Mijoz formani to‘ldiradi, sayt tayyor xabar matnini yasaydi va uni
**SMS** (010-3247-4734 raqamiga), **qo‘ng‘iroq** yoki **Instagram DM** orqali yuborishni taklif qiladi.
Banket arizasi ham xuddi shu yo‘l bilan ishlaydi.

## Domen

`index.html`, `robots.txt` va `sitemap.xml` ichida kanonik manzil `https://dastirxan-web.vercel.app/` deb yozilgan.
Vercel boshqa manzil bersa yoki o‘z domeningiz ulansa, shu uch joyni yangilang (Telegram/Instagram’dagi ko‘rinish uchun `og:image` ham shu manzilni ishlatadi).
