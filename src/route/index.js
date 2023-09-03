// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  address: 'м.Чернівці (техт)',
}

var footer = {
  social: {
    email: {
      text: 'ivanov@mail.com',
      href: 'mailto:ivanov@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      href: 'https://www.linkedin.com/in/dmytro-test',
      text: 'LinkedIn',
    },
  },
}
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume|Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: 'Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me',
      },
      experience: {
        title: 'Other experience',
        text: 'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.',
      },
    },
    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume|Skills',
    },

    header,

    main: {
      skills: [
        { name: 'HTML', poind: 10, isTop: true },
        { name: 'Handlebars', poind: 10, isTop: true },
        { name: 'VS Code & NPM', poind: 9, isTop: false },
        { name: 'Git & Terminal', poind: 9 },
        { name: 'React.js', poind: 0 },
        { name: 'PHP', poind: null },
      ],
      hobbies: [
        { name: 'Хобі 1', isMain: false },
        { name: 'Хобі 2', isMain: true },
        { name: 'Хобі 3', isMain: true },
      ],
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume|Education',
    },

    header,

    main: {
      educations: [
        {
          name: 'Національного університету харчових технологій',
          isEnd: true,
        },
        {
          name: 'Чернівецький торговельно-економічний інститут Державного торговельно-економічного університету',
          isEnd: true,
        },
        { name: 'IT BRAINS', isEnd: false },
      ],
      certificates: [
        { name: 'Сертифікат 1', id: 1111 },
        { name: 'Сертифікат 2', id: 2222 },
        { name: 'Сертифікат 3', id: 3333 },
      ],
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',

    page: {
      title: 'Resume|Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: null,
          },
          duration: {
            // термін роботи в компанії
            from: '10.10.2022',
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua/',
              //  (посилання на це резюме)
              about: 'Інформація про проект',
              stacks: [
                { name: 'React.js' },
                { name: 'HTML / CSS' },
                { name: 'Nodejs' },
              ],
              stactAmount: 1111,
              // наші нагороди досягнення та ін
              awards: [
                {
                  name: 'Яка нагорода текст',
                },
                {
                  name: 'Ще народа',
                },
              ],
              awardAmount: 2222,
            },
          ],
        },
      ],
    },

    footer,
  })
})

// Підключаємо роутер до бек-енду
module.exports = router
