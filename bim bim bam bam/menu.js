const div = document.querySelector('.more')
const catalog = document.querySelector('.catalog')
const arrow = document.querySelector('.arrow')
const divlist = document.querySelectorAll('.divlist')
const doublelist = document.querySelectorAll('.doublelist')

div.addEventListener('click', ()=>{
    catalog.classList.toggle('hide')
    arrow.classList.toggle('rotate')
})

divlist.forEach(item => {
    item.addEventListener('click', () => {
      const relatedDoubleList = document.querySelector(`#${item.id}list`);
      relatedDoubleList.classList.toggle('hide');
      console.log('ПЕРЕВІРКА');
    });
  });