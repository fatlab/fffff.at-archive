const OPEN = {
  init() {
    document.querySelectorAll('.js-open').forEach((el) => {
      el.addEventListener('click', (event) => {
        const target = event.currentTarget;
        const content = target.nextElementSibling;
        content.classList.toggle('card__content-open');
        target.classList.toggle('card__more-open');
      });
    });

    document.querySelectorAll('.js-open-facts').forEach((el) => {
      el.addEventListener('click', (event) => {
        const target = event.currentTarget;
        const parent = target.parentElement;
        parent.classList.toggle('facts-open');
        target.classList.toggle('facts__more-open');
      });
    });
  },
};
OPEN.init();

const MORE = {
  init() {
    document.querySelectorAll('.js-more').forEach((el) => {
      el.addEventListener('click', () => {
        const rows = document.querySelectorAll('.table__row');
        rows.forEach((row) => {
          row.style.display = 'flex';
        });
        el.style.display = 'none';
      });
    });
  },
};
MORE.init();

// const FAQ = {
//   init() {
//     document.querySelectorAll('.faq__head').forEach((el) => {
//       el.addEventListener('click', (event) => {
//         const target = event.currentTarget;
//         const content = target.nextElementSibling;
//         content.style.display = content.style.display === 'none' ? 'block' : 'none';
//         target.classList.toggle('faq__head-open');
//       });
//     });
//   },
// };
// FAQ.init();

const SUBNAV = {
  init() {
    window.addEventListener('scroll', () => {
      if (document.querySelector('.card__sticky-wrap')) {
        const stickyWrap = document.querySelector('.card__sticky-wrap');
        const sticky = document.querySelector('.card__sticky');
        const offset = window.pageYOffset - stickyWrap.offsetTop + 100;

        sticky.style.top = `${offset}px`;

        const height = document.querySelector('.sticky').offsetHeight - window.innerHeight;
        if (offset > 0 && offset < height) {
          sticky.classList.add('active');
        } else {
          sticky.classList.remove('active');
        }
      }
    });
  },
};
SUBNAV.init();

document.querySelectorAll('a.btn-learn').forEach((el) => {
  el.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.currentTarget.getAttribute('href');
    document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
  });
});
