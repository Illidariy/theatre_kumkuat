/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const data = [
      {
        firstName: 'Мария Александровна',
        secondName: 'Левицкая',
        mainPhoto: '/images/directors/levitskaya.jpg',
        title:
          'Мария Левицкая – основатель и бессменный руководитель Театра-студии «Кумкуат».Увлеклась театром еще в детстве, а если точнее, в 1997 году, придя заниматься в Центр «Семья», основанный Зиновием Яковлевичем Корогодским, легендарным режиссером ЛенТЮЗа и художественным руководителем Театра Поколений.',
        body: 'В 2000 году поступила в Санкт Петербургский Университет Профсоюзов (специальность «Режиссура драматического театра») на курс Мастера, З. Я.Корогодского (после смерти З. Я. в 2004 году курс возглавил В. Б. Пази, художественный руководитель театра им. Ленсовета).\nСвоими главными учителями в профессии, помимо З. Я., считает А. Д. Арефьева, Е. В. Вановскую, А. В. Вишневскую.\n\nС 2002 года стала работать в Театре Поколений как актриса.\nУже в 2003 году начала педагогическую деятельность в своей alma-mater, Творческом Центре «Семья» (позже - Школа Искусств «Театральная Семья»).\n\nЗакончила Университет в 2005 году с дипломным спектаклем «Птица Феникс» (по пьесе Н. Коляды).\nВ 2006 году оставила Театр Поколений, так как решила не продолжать актёрскую карьеру, а попробовать посвятить себя театральной педагогике.\n\nНеудивительно, что именно в этом году и был основан Театр-студия «Кумкуат».\nИменно здесь М. Л. состоялась как режиссёр, обрела свой творческий почерк. За время существования «Кумкуата» ею было создано – в одиночку и в соавторстве – около 15 спектаклей.\n\nПомимо режиссуры, М. Л. не прекращала заниматься педагогикой, шлифуя методики, приобретая новые знания, находя актуальные подходы к Школе, взятой у своих Мастеров.\n\nЛюбит: умных людей, светлую энергию, музыку, плести слова, бывать одной, кота, укулеле, балтийское море, северные озера, слушать и иногда говорить, думать, любить, останавливать время, создавать.\nНе любит: эгоизм и тюрьмы в головах.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Александр',
        secondName: 'Насенков',
        mainPhoto: '/images/directors/nasenkov.jpg',
        title:
          '«Необязательно, чтобы он себе ответил на этот вопрос. Самое важное – вопросы.»',
        body: 'Режиссёр первого спектакля режиссёрской резидентуры Кумкуата - «Самоубийца».\n\nИзучал актерское мастерство и режиссуру в Российском Государственном Институте Сценических Искусств.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('Directors', data, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Directors', null, {});
  },
};
