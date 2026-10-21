/* Dastirxan menu data. Prices in KRW, taken from the official menu (Publuu / Heyzine).
   Item format: [uz, ru, en, ko, price, noteKey?]. Price is a number or a preformatted range string. */
window.DX_MENU = [
  { id: 'plov', items: [
    ['Samarqand palovi', 'Самаркандский плов', 'Samarkand plov', '사마르칸트식 프러브', 14000],
    ['Qazi va do‘lmali palov', 'Плов с казы и долма', 'Plov with kazy and dolma', '말고기 소시지와 돌마를 곁들인 프러브', 16000],
    ['Samarqand palov SET', 'Самаркандский плов СЕТ', 'Samarkand plov SET', '사마르칸트 프러브 세트', 20000, 'lunch']
  ]},
  { id: 'main', items: [
    ['Manti', 'Манты', 'Manti dumplings', '만티', 14000],
    ['Qovurilgan chuchvara', 'Жареные пельмени', 'Fried dumplings', '군만두', 14000],
    ['Uyg‘urcha lag‘mon', 'Уйгурский лагман', 'Uyghur lagman', '위구르식 라그만', 14000],
    ['Norin', 'Нарын', 'Naryn', '나린', 16000],
    ['Xonim', 'Ханум', 'Khanum rolls', '하눔', 14000],
    ['Chuchvara', 'Пельмени', 'Pelmeni', '펠메니', 14000],
    ['Qovurma lag‘mon', 'Жареный лагман', 'Fried lagman', '볶음 라그만', 14000],
    ['Xinkali', 'Хинкали', 'Khinkali', '힝칼리', 17000, 'cook15'],
    ['Qozoqcha beshbarmoq', 'Бешбармак', 'Beshbarmak', '베쉬바르막', 17000],
    ['Qovurdoq garnir bilan', 'Жаркое с гарниром', 'Pot roast with a side', '고기 로스트와 곁들임', 15000],
    ['Bifshteks', 'Бифштекс', 'Beefsteak', '비프스테이크', 14000],
    ['Butun tovuq tabaka, fri bilan', 'Целая табака с фри', 'Whole chicken tabaka with fries', '통닭 타바카와 감자튀김', 15000],
    ['Moshkichiri', 'Мошкичири', 'Mosh-kichiri (mung bean rice)', '마시키치리', 15000],
    ['Do‘lma', 'Долма', 'Dolma', '돌마', 14000],
    ['To‘y kabob', 'Туй кабоб', 'To‘y kabob', '토이 케밥', 15000],
    ['Qurutob', 'Куртоб', 'Qurutob', '쿠루톱', 17000],
    ['Pishloqli mangal kotlet', 'Котлеты с сыром на мангале', 'Grilled cheese-stuffed patties', '치즈 숯불 커틀릿', 18000],
    ['Qozon kabob', 'Казан-кебаб', 'Kazan kebab', '카잔 케밥', 15000],
    ['Qo‘y go‘shtli jiz-biz', 'Джиз-быз из баранины', 'Lamb jiz-biz', '양고기 지즈비즈', 16000],
    ['Mol go‘shtli jiz-biz, fri bilan', 'Джиз-быз из говядины с фри', 'Beef jiz-biz with fries', '소고기 지즈비즈와 감자튀김', 17000],
    ['Grilda qo‘y karre', 'Баранья корейка на гриле', 'Grilled rack of lamb', '양갈비 그릴', 48000],
    ['Qovurilgan zog‘ora baliq (500 g+)', 'Жареный сазан (500 г+)', 'Fried carp (500 g+)', '잉어 튀김 (500g+)', 15000],
    ['Losos steyk, garnir bilan', 'Стейк из сёмги с гарниром', 'Salmon steak with a side', '연어 스테이크와 곁들임', 19000],
    ['Qo‘y qovurg‘asi, fri va guruch bilan', 'Бараньи рёбра с фри и рисом', 'Lamb ribs with fries and rice', '양갈비, 감자튀김과 밥', 18000],
    ['Qo‘y karre 1 kg, qishloqcha kartoshka bilan', 'Баранья корейка 1 кг по-деревенски', 'Rack of lamb 1 kg with country potatoes', '양갈비 1kg과 웨지 감자', 90000]
  ]},
  { id: 'grill', items: [
    ['Mol go‘shti steyk (300 g)', 'Стейк из говядины (300 г)', 'Beef steak (300 g)', '소고기 스테이크 (300g)', 21000],
    ['Qo‘y go‘shti steyk (300 g)', 'Стейк из баранины (300 г)', 'Lamb steak (300 g)', '양고기 스테이크 (300g)', 19000],
    ['Suyakli ribay (550 g+)', 'Рибай с костью (550 г+)', 'Bone-in ribeye (550 g+)', '뼈 있는 립아이 (550g+)', 35000],
    ['Ribay (500 g+)', 'Рибай (500 г+)', 'Ribeye (500 g+)', '립아이 (500g+)', 30000],
    ['Mol go‘shtli rulet shashlik', 'Рулет шашлык из говядины', 'Beef roll shashlik', '소고기 롤 샤슬릭', 13000],
    ['Tovuq shashlik', 'Куриный шашлык', 'Chicken shashlik', '닭고기 샤슬릭', 9000],
    ['Grilda sabzavotlar', 'Овощи на гриле', 'Grilled vegetables', '구운 채소', 10000],
    ['Qo‘y karredan shashlik', 'Шашлык из бараньей корейки', 'Lamb rack shashlik', '양갈비 샤슬릭', 24000],
    ['Napoleon shashlik', 'Наполеон шашлык', 'Napoleon shashlik', '나폴레옹 샤슬릭', 14000],
    ['Medalyon shashlik', 'Шашлык медальоны', 'Medallion shashlik', '메달리온 샤슬릭', 14000],
    ['Qiyma shashlik (lula)', 'Молотый шашлык', 'Minced shashlik (lula)', '다진 고기 샤슬릭', 10000],
    ['Qo‘y go‘shtidan shashlik', 'Кусковой из баранины', 'Lamb chunk shashlik', '양고기 샤슬릭', 11000],
    ['Tovuq qanotlari', 'Куриные крылышки', 'Chicken wings', '닭날개 구이', 9000],
    ['Mol jigaridan shashlik', 'Из говяжьей печени', 'Beef liver shashlik', '소 간 샤슬릭', 9000],
    ['Mol go‘shti lahm shashlik', 'Кусковой из говяжьей вырезки', 'Beef tenderloin shashlik', '소 안심 샤슬릭', 12000],
    ['Dumbali shashlik', 'Из курдюка', 'Lamb tail fat shashlik', '양 꼬리기름 샤슬릭', 14000],
    ['Universal rulet', 'Универсальный рулет', 'Universal roll', '유니버설 롤', 10000],
    ['Sarimsoqli yoki pomidorli sous', 'Чесночный или томатный соус', 'Garlic or tomato sauce', '마늘 또는 토마토 소스', 3000]
  ]},
  { id: 'sets', items: [
    ['Meat Set', 'Meat Set', 'Meat Set', '미트 세트', 155000, 'set45'],
    ['Meat Set Big', 'Meat Set Big', 'Meat Set Big', '미트 세트 빅', 195000, 'set78'],
    ['Dastirxan BBQ Set Big', 'Dastirxan BBQ Set Big', 'Dastirxan BBQ Set Big', '다스티르한 BBQ 세트 빅', 125000, 'cook20'],
    ['Dastirxan BBQ Set', 'Dastirxan BBQ Set', 'Dastirxan BBQ Set', '다스티르한 BBQ 세트', 90000, 'cook20'],
    ['“Shashlik” seti', 'Сет «Шашлык»', 'Shashlik set', '샤슬릭 세트', 60000, 'shashlikSet']
  ]},
  { id: 'soup', items: [
    ['Lag‘mon', 'Лагман', 'Lagman noodle soup', '라그만', 12000],
    ['Qo‘y go‘shtli sho‘rva', 'Шурпа из баранины', 'Lamb shurpa', '양고기 슈르파', 12000],
    ['Okroshka', 'Окрошка', 'Okroshka cold soup', '오크로시카', 11000],
    ['Borsh', 'Борщ', 'Borscht', '보르시', 12000],
    ['Mastava', 'Мастава', 'Mastava rice soup', '마스타바', 12000],
    ['Mol go‘shtli sho‘rva', 'Шурпа из говядины', 'Beef shurpa', '소고기 슈르파', 12000],
    ['Bulonli chuchvara', 'Пельмени с бульоном', 'Dumplings in broth', '만두국', 12000],
    ['Frikadelkali sho‘rva', 'Суп с фрикадельками', 'Meatball soup', '미트볼 수프', 12000]
  ]},
  { id: 'salad', items: [
    ['Sabzavot assorti', 'Овощная нарезка', 'Fresh vegetable platter', '채소 모둠', 11000],
    ['Tuzlamalar', 'Соленья', 'Pickles', '피클 모둠', 10000],
    ['Fransuzcha salat', 'Французский', 'French salad', '프렌치 샐러드', 13000],
    ['Samarqand salati', 'Самарканд', 'Samarkand salad', '사마르칸트 샐러드', 10000],
    ['Shuba salati', 'Селёдка под шубой', 'Herring under a fur coat', '셀룟카 포드 슈보이', 13000],
    ['Grekcha salat', 'Греческий', 'Greek salad', '그릭 샐러드', 12000],
    ['Kapriz salati', 'Каприз', 'Capriz salad', '카프리즈 샐러드', 12000],
    ['Achchiq-chuchuk', 'Ачучук', 'Achichuk tomato salad', '아치추크 토마토 샐러드', 7000],
    ['Sezar', 'Цезарь', 'Caesar salad', '시저 샐러드', 13000],
    ['Qovurilgan baqlajon', 'Жареные баклажаны', 'Fried eggplant', '가지 튀김 샐러드', 14000],
    ['Olivye', 'Оливье', 'Olivier salad', '올리비에 샐러드', 10000],
    ['Smak salati', 'Смак', 'Smak salad', '스막 샐러드', 11000]
  ]},
  { id: 'bread', items: [
    ['Tandir non (350 g)', 'Лепёшка (350 г)', 'Tandoor flatbread (350 g)', '탄디르 빵 (350g)', 4000],
    ['Patir (300 g)', 'Патыр (300 г)', 'Patyr bread (300 g)', '파티르 빵 (300g)', 4000],
    ['Patir (katta)', 'Патыр (большой)', 'Patyr bread (large)', '파티르 빵 (대)', 7000],
    ['Lavash', 'Лаваш', 'Lavash', '라바쉬', 3000],
    ['Non assorti', 'Хлеб ассорти', 'Bread assortment', '모둠 빵', 12000],
    ['Qora non', 'Чёрный хлеб', 'Black bread', '흑빵', 7000]
  ]},
  { id: 'fast', items: [
    ['Tandir somsa', 'Тандырная самса', 'Tandoor samsa', '탄디르 삼사', 5000],
    ['Samarqand somsa', 'Самарканд самса', 'Samarkand samsa', '사마르칸트 삼사', 6000],
    ['Qatlama somsa', 'Слоёная самса', 'Puff pastry samsa', '페이스트리 삼사', 4000],
    ['Burger set', 'Бургер сет', 'Burger set', '버거 세트', 15000],
    ['Pishloqli shashlik-shaurma', 'Шаурма шашлык с сыром', 'Shashlik shawarma with cheese', '치즈 샤슬릭 샤와르마', 15000],
    ['Cheburek', 'Чебуреки', 'Chebureki', '체부레키', 12000]
  ]},
  { id: 'sides', items: [
    ['Tuxum qovurma (3 dona)', 'Яичница (3 шт)', 'Fried eggs (3)', '계란 프라이 (3개)', 12000],
    ['Dudlangan go‘sht assorti', 'Мясное копчёное ассорти', 'Smoked meat platter', '훈제 고기 모둠', 25000],
    ['Kartoshka pyuresi', 'Пюре', 'Mashed potatoes', '으깬 감자', 8000],
    ['Xolodets', 'Холодец', 'Kholodets (meat aspic)', '홀로데츠', 9000],
    ['Makaron', 'Макароны', 'Pasta', '파스타', 5000],
    ['Guruch', 'Рис', 'Rice', '밥', 3000],
    ['Kartoshka fri', 'Фри', 'French fries', '감자튀김', 8000],
    ['Grechka', 'Гречка', 'Buckwheat', '메밀', 7000]
  ]},
  { id: 'dessert', items: [
    ['Katta meva assorti', 'Большое фруктовое ассорти', 'Large fruit platter', '대형 과일 모둠', 30000],
    ['Meva assorti', 'Фруктовое ассорти', 'Fruit platter', '과일 모둠', 20000],
    ['Ferrero Rocher torti', 'Ферреро Роше', 'Ferrero Rocher cake', '페레로 로쉐 케이크', 13000],
    ['“Molochnaya devochka” torti', 'Молочная девочка', 'Milk Girl cake', '밀크 걸 케이크', 12000],
    ['Chizkeyk', 'Чизкейк', 'Cheesecake', '치즈케이크', 12000],
    ['Paxlava', 'Пахлава', 'Baklava', '바클라바', 11000],
    ['Napoleon', 'Наполеон', 'Napoleon cake', '나폴레옹 케이크', 13000],
    ['Medovik', 'Медовик', 'Honey cake', '메도빅 꿀 케이크', 12000],
    ['Qizil baxmal', 'Красный бархат', 'Red velvet', '레드벨벳', 12000],
    ['Oreo shokoladli tort', 'Шоколадный торт Орео', 'Oreo chocolate cake', '오레오 초콜릿 케이크', 12000],
    ['Shokoladli meva salati', 'Фруктовый салат с шоколадом', 'Fruit salad with chocolate', '초콜릿 과일 샐러드', 13000],
    ['Muzqaymoq', 'Мороженое', 'Ice cream', '아이스크림', 12000]
  ]},
  { id: 'tea', items: [
    ['Marokash choyi', 'Марокканский', 'Moroccan tea', '모로코 차', 12000],
    ['Jasmin choyi', 'Жасмин', 'Jasmine tea', '자스민 차', 8000],
    ['Zanjabilli choy', 'Имбирный', 'Ginger tea', '생강차', 12000],
    ['Tog‘ choyi', 'Горный', 'Mountain herbal tea', '산 허브차', 8000],
    ['Rezavorli choy', 'Ягодный', 'Berry tea', '베리 차', 13000],
    ['Turk choyi', 'Турецкий', 'Turkish tea', '터키 차', 12000],
    ['Zanjabil-marokash choyi', 'Имбирно-марокканский', 'Ginger Moroccan tea', '생강 모로코 차', 13000],
    ['Tropik choy', 'Тропический', 'Tropical tea', '트로피컬 차', 12000],
    ['Zanjabil-rezavor choyi', 'Имбирно-ягодный', 'Ginger berry tea', '생강 베리 차', 12000],
    ['Erl Grey', 'Эрл Грей', 'Earl Grey', '얼그레이', 8000]
  ]},
  { id: 'coffee', items: [
    ['Amerikano, issiq yoki muzli', 'Американо / айс', 'Americano, hot or iced', '아메리카노 (핫/아이스)', 5000],
    ['Kapuchino', 'Капучино', 'Cappuccino', '카푸치노', 6000],
    ['Flet uayt', 'Флэт уайт', 'Flat white', '플랫 화이트', 6000],
    ['Doljin va asalli latte', 'Латте с корицей и мёдом', 'Cinnamon honey latte', '시나몬 꿀 라떼', 7000],
    ['Issiq shokolad', 'Горячий шоколад', 'Hot chocolate', '핫초코', 7000],
    ['Matcha latte, issiq yoki muzli', 'Матча латте / айс', 'Matcha latte, hot or iced', '말차 라떼 (핫/아이스)', 7000],
    ['Muzli latte', 'Айс латте', 'Iced latte', '아이스 라떼', 6000],
    ['Sunset', 'Sunset', 'Sunset', '선셋', 9000],
    ['Sunrise', 'Sunrise', 'Sunrise', '선라이즈', 8000],
    ['Qulupnayli matcha latte', 'Клубничный матча латте', 'Strawberry matcha latte', '딸기 말차 라떼', 9000]
  ]},
  { id: 'fresh', items: [
    ['Apelsin fresh', 'Апельсиновый фреш', 'Orange juice', '오렌지 주스', 10000],
    ['Limon fresh', 'Лимонный фреш', 'Lemon juice', '레몬 주스', 10000],
    ['Kivi va shovul', 'Киви-щавель', 'Kiwi sorrel', '키위 소렐 주스', 10000],
    ['Sabzi fresh', 'Морковный фреш', 'Carrot juice', '당근 주스', 6000],
    ['Apelsin va sabzi', 'Апельсин-морковь', 'Orange carrot', '오렌지 당근 주스', 8000],
    ['Kivi va selderey', 'Киви-сельдерей', 'Kiwi celery', '키위 셀러리 주스', 10000]
  ]},
  { id: 'lemonade', items: [
    ['Limonad, ays-ti yoki mojito (1 L)', 'Лимонад, айс-ти или мохито (1 л)', 'Lemonade, iced tea or mojito (1 L)', '레모네이드, 아이스티, 모히토 (1L)', '14,000-16,000'],
    ['Tarxun (1 L)', 'Тархун (1 л)', 'Tarkhun (1 L)', '타르훈 (1L)', 16000],
    ['Olchali kompot', 'Компот вишнёвый', 'Cherry compote', '체리 콤포트', 11000],
    ['Limonad, mojito yoki tarxun (0.5 L)', 'Лимонад, мохито или тархун (0,5 л)', 'Lemonade, mojito or tarkhun (0.5 L)', '레모네이드, 모히토, 타르훈 (0.5L)', '7,000-8,000']
  ]},
  { id: 'drinks', items: [
    ['Ko‘k yoki qora choy', 'Зелёный или чёрный чай', 'Green or black tea', '녹차 또는 홍차', 4000],
    ['Limonli choy', 'Чай с лимоном', 'Tea with lemon', '레몬차', 5000],
    ['Toshkent choyi', 'Ташкентский чай', 'Tashkent tea', '타슈켄트 차', 6000],
    ['Sutli choy', 'Чай с молоком', 'Milk tea', '밀크티', 8000],
    ['Cola, Fanta, Sprite (0.36 L)', 'Кола, Фанта, Спрайт (0,36 л)', 'Cola, Fanta, Sprite (0.36 L)', '콜라, 환타, 스프라이트 (0.36L)', 4000],
    ['Coca-Cola (1.25 L)', 'Кока-кола (1,25 л)', 'Coca-Cola (1.25 L)', '코카콜라 (1.25L)', 8000],
    ['Ayron (0.5 L)', 'Айран (0,5 л)', 'Ayran (0.5 L)', '아이란 (0.5L)', 5000],
    ['Kefir (0.5 L)', 'Кефир (0,5 л)', 'Kefir (0.5 L)', '케피르 (0.5L)', 4000],
    ['Gazli mineral suv (0.3 / 0.5 L)', 'Минеральная вода (0,3 / 0,5 л)', 'Sparkling water (0.3 / 0.5 L)', '탄산수 (0.3 / 0.5L)', '5,000 / 7,000']
  ]}
];

/* Plate showcase: four tabs, three top-down plates each. Images live in assets/img/food/. */
window.DX_SIGNATURE = [
  { id: 'national', dishes: [
    { img: 'palov', price: 14000, name: ['Samarqand palovi', 'Самаркандский плов', 'Samarkand plov', '사마르칸트식 프러브'],
      desc: ['Qozonda damlangan guruch, mol go‘shti, sariq sabzi va no‘xat.', 'Рис из казана, говядина, жёлтая морковь и нут.', 'Kazan-cooked rice, beef, yellow carrots and chickpeas.', '카잔에 지은 밥, 소고기, 노란 당근, 병아리콩.'] },
    { img: 'manti', price: 14000, name: ['Manti', 'Манты', 'Manti', '만티'],
      desc: ['Bug‘da pishgan, ichida issiq va suvli bulyoni bor.', 'На пару, с горячим сочным бульоном внутри.', 'Steamed, with hot juicy broth inside.', '쪄낸 만두 속에 뜨거운 육즙이 가득합니다.'] },
    { img: 'beshbarmoq', price: 17000, name: ['Beshbarmoq', 'Бешбармак', 'Beshbarmak', '베쉬바르막'],
      desc: ['Yumshoq go‘sht, keng xamir va bir kosa issiq sho‘rva.', 'Нежное мясо, широкая лапша и пиала горячего бульона.', 'Tender meat, wide noodles and a bowl of hot broth.', '부드러운 고기, 넓은 면, 따끈한 육수 한 그릇.'] }
  ]},
  { id: 'grill', dishes: [
    { img: 'qozon-kabob', price: 15000, name: ['Qozon kabob', 'Казан-кебаб', 'Kazan kebab', '카잔 케밥'],
      desc: ['Qozonda qovurilgan go‘sht, kartoshka va yangi sabzavotlar.', 'Мясо из казана с картофелем и свежими овощами.', 'Meat seared in a kazan with potatoes and fresh vegetables.', '카잔에 구운 고기와 감자, 신선한 채소.'] },
    { img: 'ribay', price: 35000, name: ['Suyakli ribay', 'Рибай на кости', 'Bone-in ribeye', '뼈 있는 립아이'],
      desc: ['550 g dan ortiq, mangalda pishiriladi.', 'От 550 г, готовится на мангале.', '550 g and up, cooked over the mangal.', '550g 이상, 숯불 그릴에 굽습니다.'] },
    { img: 'lula', price: 10000, name: ['Lula kabob', 'Люля-кебаб', 'Lula kebab', '룰라 케밥'],
      desc: ['Ziravorli qiyma, jonli olovda pishgan.', 'Пряный фарш, приготовленный на живом огне.', 'Spiced minced meat cooked over a live fire.', '향신료를 넣은 다진 고기를 숯불에 구웠습니다.'] }
  ]},
  { id: 'dough', dishes: [
    { img: 'somsa', price: 5000, name: ['Tandir somsa', 'Тандырная самса', 'Tandoor samsa', '탄디르 삼사'],
      desc: ['Tandirda yopilgan qatlamli xamir, ichi suvli go‘sht.', 'Слоёное тесто из тандыра и сочное мясо.', 'Flaky pastry baked in the tandoor, filled with juicy meat.', '탄디르에서 구운 겹겹의 반죽 속 육즙 가득한 고기.'] },
    { img: 'xinkali', price: 17000, name: ['Xinkali', 'Хинкали', 'Khinkali', '힝칼리'],
      desc: ['Qo‘lda tugilgan, ichi bulyonga to‘la. 15-20 daqiqa.', 'Ручная лепка, полны бульона. 15-20 минут.', 'Hand-pleated and full of broth. 15-20 minutes.', '손으로 빚어 육수가 가득. 15-20분.'] },
    { img: 'patir', price: 7000, name: ['Patir non', 'Патыр', 'Patyr bread', '파티르 빵'],
      desc: ['Katta, qatlamli, tandirdan issiq holda.', 'Большой слоёный патыр, горячий из тандыра.', 'A large flaky patyr, hot from the tandoor.', '탄디르에서 갓 구운 큼직한 파티르.'] }
  ]},
  { id: 'dessert', dishes: [
    { img: 'napoleon', price: 13000, name: ['Napoleon', 'Наполеон', 'Napoleon cake', '나폴레옹 케이크'],
      desc: ['Yupqa qatlamlar va mayin krem.', 'Тонкие коржи и нежный крем.', 'Thin pastry layers and silky cream.', '얇은 페이스트리 층과 부드러운 크림.'] },
    { img: 'chizkeyk', price: 12000, name: ['Chizkeyk', 'Чизкейк', 'Cheesecake', '치즈케이크'],
      desc: ['Mayin chizkeyk, yangi rezavorlar bilan.', 'Нежный чизкейк со свежими ягодами.', 'Creamy cheesecake with fresh berries.', '신선한 베리를 곁들인 부드러운 치즈케이크.'] },
    { img: 'red-velvet', price: 12000, name: ['Qizil baxmal', 'Красный бархат', 'Red velvet', '레드벨벳'],
      desc: ['Baxmal biskvit va qaymoqli krem.', 'Бархатный бисквит и сливочный крем.', 'Velvet sponge with cream cheese frosting.', '벨벳 시트와 크림치즈 프로스팅.'] }
  ]}
];

/* Grill sets block. */
window.DX_SETS = [
  { name: 'Meat Set', img: 'set-meat', price: 155000, people: [4, 5], time: '30-40', d: 'meat' },
  { name: 'Meat Set Big', img: 'set-meat-big', price: 195000, people: [7, 8], time: '30-40', d: 'meat' },
  { name: 'Dastirxan BBQ Set Big', img: 'set-bbq-big', price: 125000, time: '20-30', d: 'bbq' },
  { name: 'Dastirxan BBQ Set', img: 'set-bbq', price: 90000, time: '20-30', d: 'bbq' }
];
