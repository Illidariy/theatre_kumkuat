/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const data = [
      {
        firstName: 'Николай',
        secondName: 'Исайкин',
        mainPhoto: '/images/actors/isaykin.jpg',
        smallPhoto: '/images/actors/isaykin1.png',
        title:
          'Присоединился к «Кумкуату» во время добора в 2010 году и сделал в нём головокружительную карьеру, года за полтора став старостой и одним из ведущих актеров.',
        body: 'Основные роли: Гарри Каган («Вверх по лестнице, ведущей вниз»), Джоннипатинмайк («Калека с острова Инишмаан»), Креон («Антигона»), Джеффри Тейтум («Адресат не указан»), Бибичев, Сонный, Мужчина («Фабричная девчонка»), Хомса, Хемуль («Опасное Лето») (спектакль-ремейк), Мркоков, Писатель, Дворник («ХРМСА»), Гаев («Вишнёвый сад»), Аристарх Доминикович («Самоубийца»), Бенедикт («Кысь»), роли в спектаклях «Маленькие Чёрные Человечки, Живущие В Моей Голове», «Когда ты прячешь Солнце, мне грустно», «Уроки Пространства Инстинкта», «От Красной Крысы до Зеленой Звезды» (спектакль-ремейк), «Лабрум».',
        like: 'Любит: леса, поля и реки, горы и моря, живность домашнюю и дикую, своих друзей, искренность в людях, пошутить (и посмеяться над шуткой).',
        dislike:
          'Не любит: неопределённость, безделье, безответственность по отношению к себе и другим.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Надежда',
        secondName: 'Смирнова',
        mainPhoto: '/images/actors/smirnova.jpg',
        smallPhoto: '/images/actors/smirnova1.png',
        title:
          'Обучалась в «Театральном Лицее» в 2010-2011 годах, в 2011 году вступила в Основную Труппу «Кумкуата». С 2016 по 2019 год была приглашённой актрисой театра. В 2020 году вернулась в Основную Труппу театра.',
        body: 'Основные роли: Антигона («Антигона»), Бейб («Адресат не указан»), Хелен («Калека с острова Инишмаан»), Мария Хосефа («Дом Бернарды Альбы (Суд)») (спектакль-ремейк), Фирс («Вишнёвый сад»), роли в спектаклях «Маленькие Чёрные Человечки, Живущие В Моей Голове», «Когда ты прячешь Солнце, мне грустно», «Страх».',
        like: 'Любит: Любить. Людей. Фанатов своего дела. Азиатскую еду, водить машину/байк/велосипед/самокат. Кошек породы "сфинкс". Минимализм во всем: в словах, в одежде, в интерьере. Петербург, Новый год и предновогоднюю суету. Белое вино, горы. Приглушенный свет, объятия. Кофе. Музыку в наушниках и танцы в темноте. Смотреть в глаза, наблюдать.',
        dislike:
          'Не любит: Гомофобию, расизм и нетерпимость к людям, жестокость, надменность. Врать. Ветер. Когда приходит хороший ответ слишком поздно. Громкий звук приближающегося поезда. Пустые разговоры. Сладкую газировку. Ухаживать за цветами. Вопрос "как дела?".',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Денис',
        secondName: 'Черемонцев',
        mainPhoto: '/images/actors/cheremoncev.jpg',
        smallPhoto: '/images/actors/cheremoncev1.png',
        title:
          'Обучался в Студии Первого Уровня в 2012-2013 годах. В начале 2014 года стал полноправным членом «Кумкуата» и с тех пор является его неотъемлемой частью.',
        body: 'Основные роли: Стражник, Гемон («Антигона»), Кинооператор, Проверяющий, Сонный, Федя («Фабричная девчонка»), Бартли МакКормик («Калека с острова Инишмаан»), Математик («ХРМСА»), Сашка («Вам и не снилось») (спектакль-ремейк), Муми-тролль («Опасное Лето») (спектакль-ремейк), Трофимов («Вишнёвый сад»), Джонни («Пациенты»), Александр Петрович («Самоубийца»), Фёдор Кузьмич («Кысь»), роли в спектаклях «Уроки Пространства Инстинкта», «Маленькие Чёрные Человечки, Живущие В Моей Голове», «От Красной Крысы до Зеленой Звезды» (спектакль-ремейк), «Когда ты прячешь Солнце, мне грустно», «Лабрум», «Страх».',
        like: 'Любит: любить, спать, путешествия, Петербург, дождь, море, друзей, инстаграм, фотографии, вино, музеи, готовить, плавать, морепродукты, музыку, кошек, Barbie, сериалы, стихи, смех, свободу, небо, танцевать',
        dislike:
          'Не любит: серость, безграмотность, стереотипы, скучных людей, однообразие, сладкое, рано вставать',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Екатерина',
        secondName: 'Мушинская',
        mainPhoto: '/images/actors/mushinskaya.jpg',
        smallPhoto: '/images/actors/mushinskaya1.png',
        title:
          'Обучалась в Студии Первого Уровня в 2012-2013 годах. В начале 2014 года стала полноправным членом «Кумкуата» и с тех пор является его неотъемлемой частью.',
        body: 'Основные роли: Кормилица («Антигона»), Ирина («Фабричная девчонка»), Эйлин Осборн («Калека с острова Инишмаан»), Ирина Мазер («ХРМСА»), Ангустиас, Понсия («Дом Бернарды Альбы (Суд)») (спектакль-ремейк), Люся («Вам и не снилось») (спектакль-ремейк), Фру Мышка («Опасное Лето») (спектакль-ремейк), Раневская («Вишнёвый сад»), Маша («Пациенты»), Серафима Ильинична («Самоубийца»), Аманда Уингфилд («Стеклянный Зверинец»), Феврония («Кысь»), роли в спектаклях «Маленькие Чёрные Человечки, Живущие В Моей Голове», «От Красной Крысы до Зеленой Звезды» (спектакль-ремейк), «Лабрум», «Страх».',
        like: 'Любит: работать, спонтанность, Ю. Бутусова, осень, кофе, ходить пешком, новые города и страны.',
        dislike:
          'Не любит: рано вставать, ничего не делать, когда спрашивают, что любит, а что нет.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Надежда',
        secondName: 'Мкртычян',
        mainPhoto: '/images/actors/mkrtychyan.jpg',
        smallPhoto: '/images/actors/mkrtychyan1.png',
        title:
          'Обучалась в Студии Первого Уровня в 2012-2013 годах. В начале 2014 года вступила в основную труппу «Кумкуата».',
        body: 'Основные роли: Нина («Фабричная девчонка)», Девочка Маруся («ХРМСА»), Служанка («Дом Бернарды Альбы (Суд)») (спектакль-ремейк), Татьяна Николаевна («Вам и не снилось») (спектакль-ремейк), Мюмла, Малышка Мю («Опасное Лето») (спектакль-ремейк), Лу («Адресат не указан»), Клеопатра Максимовна («Самоубийца»), Шарлотта («Вишнёвый сад»), Феврония («Кысь»), роли в спектаклях «Маленькие Чёрные Человечки, Живущие В Моей Голове», «Когда ты прячешь Солнце, мне грустно», «От Красной Крысы до Зеленой Звезды» (спектакль-ремейк), «Лабрум», «Страх».        ',
        like: 'Любит: обнимашки, кофе, лилии, собак, себя и крокодилов.',
        dislike: 'Не любит: готовить, агрессию, очереди и сыр.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Евгения',
        secondName: 'Штутина',
        mainPhoto: '/images/actors/shtutina.jpg',
        smallPhoto: '/images/actors/shtutina1.png',
        title:
          'Обучалась в Студии Первого Уровня в 2013-2014 годах. В начале 2015 года вступила в основную труппу «Кумкуата».',
        body: 'Основные роли: Елена Ивановна («ХРМСА»), Магдалена («Дом Бернарды Альбы (Суд)») (спектакль-ремейк), Юлька («Вам и не снилось») (спектакль-ремейк), Филифьонка («Опасное Лето») (спектакль-ремейк), Вера («Фабричная девчонка»), Бейб («Адресат не указан»), Аня («Вишнёвый сад»), Маша («Пациенты»), Раиса Филипповна («Самоубийца»), Мать («Кысь»), роли в спектаклях «Маленькие Чёрные Человечки, Живущие В Моей Голове», «Когда ты прячешь Солнце, мне грустно», «Лабрум», «Страх».        ',
        like: 'Любит: булочки с корицей, ходить в театр, море, собак, поехать в незнакомый город и заблудиться там, петь в дУше, не спать всю ночь, спать весь день, весенний рассвет, кофе, мятное мороженое, музыку из своего плеера, сангину, уезжать, всё поменять.',
        dislike:
          'Не любит: лакрицу, CorelDraw, мороз, шапки, электродинамику, навязчивые песни из радио, фотографироваться, комнатные растения, ездить в деревню, ждать.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Вячеслав',
        secondName: 'Полушин',
        mainPhoto: '/images/actors/polushin.jpg',
        smallPhoto: '/images/actors/polushin1.png',
        title:
          'Обучался в Студии Первого Уровня в 2013-2014 годах. В начале 2015 года вступил в основную труппу «Кумкуата».',
        body: 'Основные роли: Проверяющий, Мужчина («Фабричная девчонка»), Дворник («ХРМСА»), Доктор («Калека с острова Инишмаан»), Костя («Вам и не снилось») (спектакль-ремейк), Муми-папа («Опасное Лето») (спектакль-ремейк), Стивен («Адресат не указан»), Лопахин («Вишнёвый сад»), Штурмберг («Пациенты»), Том Уингфилд («Стеклянный Зверинец»), Никита Иваныч («Кысь»), роли в спектаклях «Маленькие Чёрные Человечки, Живущие В Моей Голове», «От Красной Крысы до Зеленой Звезды» (спектакль-ремейк), «Лабрум», «Страх».',
        like: 'Любит: красивые металлокаркасы, стихи на русском языке, стойку на руках, Екатеринбург и всё что в нём сделано, когда что-то не получалось-не получалось, а потом раз - и получилось, холодный борщ, высыпаться, новые рубашки, старых друзей.',
        dislike: 'Не любит: мыть пол и проигрывать.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Ольга',
        secondName: 'Климентова',
        mainPhoto: '/images/actors/klimentova.jpg',
        smallPhoto: '/images/actors/klimentova1.png',
        title:
          'Обучалась в Студии Первого Уровня в 2016 году. 1 февраля 2017 года вступила в основную труппу «Кумкуата».',
        body: 'Основные роли: Комсомолка Нина («ХРМСА»), Ангустиас («Дом Бернарды Альбы (Суд)») (спектакль-ремейк), Эмили («Адресат не указан»), Дуняша («Вишнёвый сад»), Моника («Пациенты»), Маргарита Ивановна («Самоубийца»), Оленька («Кысь»), роли в ремейках спектаклей «Вам и не снилось» и «Алиса в Зазеркалье», роли в спектаклях «Лабрум», «Страх».        ',
        like: 'Любит: май, лагерь у моря, фильмы Чарли Чаплина, художественную литературу, кошек и собак, кофе на вынос.',
        dislike:
          'Не любит: разговаривать по телефону, многозадачность, когда слушают мой плейлист.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Юлия',
        secondName: 'Елисеева',
        mainPhoto: '/images/actors/eliseeva.jpg',
        smallPhoto: '/images/actors/eliseeva1.png',
        title:
          'Обучалась в Студии Первого Уровня в 2016-2017 годах. 25 декабря 2017 года вступила в основную труппу «Кумкуата».',
        body: 'Основные роли: Мартирио («Дом Бернарды Альбы (Суд)») (спектакль-ремейк), Варя («Вишнёвый сад»), Агнешка («Пациенты»), Пугачев («Самоубийца»), Лаура Уингфилд («Стеклянный Зверинец»), Лика («Мой бедный Марат»), роли в спектаклях «Когда ты прячешь Солнце, мне грустно», «Страх».',
        like: 'Любит: горные походы, диковинные музыкальные инструменты, читать вслух, сновидения, старое французское кино с титрами, горький кофе, ночные разговоры на кухне.',
        dislike: 'Не любит: сплетни, мармелад и не высыпаться.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Валентина',
        secondName: 'Бриг',
        mainPhoto: '/images/actors/brig.jpg',
        smallPhoto: '/images/actors/brig1.png',
        title:
          'Обучалась в Студии Первого Уровня в 2017-2018 годах. 12 января 2019 года вступила в основную труппу «Кумкуата».',
        body: 'Основные роли: Адела («Дом Бернарды Альбы (Суд)»), Груня («Самоубийца»), Варвара Михайловна («ХРМСА»), роли в спектаклях «Лабрум», «Страх».',
        like: 'Любит: смену погоды, ощущать силу стихии, скорость, перемены, неизведанное, заброшенное, там где время остановилось, искать ответы, беспорядок, иногда порядок, родственные души, находиться в моменте, танцевать.',
        dislike:
          'Не любит: отсутствие выбора, возвращаться той же дорогой, бессонницу, когда лень больше тебя.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Александра',
        secondName: 'Смурова',
        mainPhoto: '/images/actors/smurova.jpg',
        smallPhoto: '/images/actors/smurova1.png',
        title:
          'Обучалась в Студии Первого Уровня в 2017-2018 годах. 12 января 2019 года вступила в основную труппу «Кумкуата»».',
        body: 'Основные роли: Пруденсия/Нищенка («Дом Бернарды Альбы (Суд)»), Мария Лукьяновна («Самоубийца»), Женщина в чулках («ХРМСА»), Лидия Петровна («Чудная баба»), Варвара («Кысь»), роли в спектаклях «Лабрум», «Страх».',
        like: 'Любит: свое детство, тепло, горы чистого снега и горные лыжи, дарить и упаковывать подарки, хорошие фильмы и сериалы, Байкал, петь, уют, когда папа готовит для меня, когда мама улыбается, когда ливень бьет по крыше дома, пляжный волейбол, те дни, когда у меня появляется вдохновение.',
        dislike:
          'Не любит: грязь, мёд, лук, много людей, глупые вопросы, когда не включают поворотники, болеть, когда лезут не в свое дело.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Павел',
        secondName: 'Туртыгин',
        mainPhoto: '/images/actors/turtygin.jpg',
        smallPhoto: '/images/actors/turtygin1.png',
        title:
          'Обучался в Студии Первого Уровня в 2018-2019 годах. 9 января 2020 года вступил в основную труппу «Кумкуата».',
        body: 'Основные роли: Писатель («ХРМСА»), Симеонов-Пищик («Вишнёвый сад»), отец Елпидий («Самоубийца»), Марат («Мой бедный Марат»), Кудеяр Кудеярыч («Кысь»), роли в спектаклях «Стеклянный зверинец», «Страх».',
        like: 'Любит: смех, шутки, когда смеются над моими шутками, вкусную еду, домашний торт с варёной сгущенкой и бананами, Петербург, грифонов у Академии художеств, песиков, китов, говорить «БАМ/БЭМ/БУМ/ХБДЫЩЬ/ВУОПС», когда тепло в груди.',
        dislike:
          'Не любит: несправедливость, слякоть, когда промокают кроссовки, когда говорят «питерцы», спешить, когда мне слышится, что меня зовут по имени, я оборачиваюсь на этот зов, но оказывается, что звали Машу, когда меня называют Игорем :).',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Игорь',
        secondName: 'Фенёв',
        mainPhoto: '/images/actors/fenev.jpg',
        smallPhoto: '/images/actors/fenev1.png',
        title:
          'Обучался в Студии Первого Уровня в 2018-2019 годах. 9 января 2020 года вступил в основную труппу «Кумкуата».',
        body: 'Основные роли: Мркоков, Михюся («ХРМСА»), Яша («Вишнёвый сад»), Леонидик («Мой бедный Марат»), Бенедикт («Кысь»), роли в спектаклях «Стеклянный зверинец», «Страх».',
        like: '',
        dislike: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Александр',
        secondName: 'Бояркин',
        mainPhoto: '/images/actors/boyarkin.jpg',
        smallPhoto: '/images/actors/boyarkin1.png',
        title:
          'Обучался в Студии Первого Уровня в 2018-2019 годах. 29 сентября 2020 года вступил в основную труппу «Кумкуата».',
        body: 'Основные роли: Мркоков («ХРМСА»), Виктор Викторович («Самоубийца»), Лев Львович («Кысь»), роли в спектаклях «Стеклянный зверинец», «Страх».',
        like: 'Любит: искусство в себе.',
        dislike: 'Не любит: себя в искусстве.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Катерина',
        secondName: 'Кодиспоти',
        mainPhoto: '/images/actors/kodispoti.jpg',
        smallPhoto: '/images/actors/kodispoti1.png',
        title:
          'Обучалась в Студии Первого Уровня в 2018-2019 годах. 29 сентября 2020 года вступила в основную труппу «Кумкуата».',
        body: 'Основные роли: Зинка Падеспань («Самоубийца»), роли в спектакле «Страх».',
        like: 'Любит: путешествовать и узнавать новое.',
        dislike: 'Не любит: паковать вещи в чемодан и сюрпризы.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('Actors', data, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Actors', null, {});
  },
};
