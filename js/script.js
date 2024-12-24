// // init Isotope
// var $grid = $('.collection-list').isotope({
//   // options
// });
// // filter items on button click
// $('.filter-button-group').on( 'click', 'button', function() {
//   var filterValue = $(this).attr('data-filter');
//   resetFilterBtns();
//   $(this).addClass('active-filter-btn');
//   $grid.isotope({ filter: filterValue });
// });

// var filterBtns = $('.filter-button-group').find('button');
// function resetFilterBtns(){
//   filterBtns.each(function(){
//     $(this).removeClass('active-filter-btn');
//   });
// }


const loaderContainer = document.querySelector('.loader-container')
const pageContainer = document.querySelector('.page-content')

window.addEventListener ( 'load', () => {
  setTimeout(() => {
  loaderContainer.classList.add('hidden')
  pageContainer.classList.add('visible')

}, 7000);
});



const greet = () =>{
    console.log('hello james')
}
setTimeout(greet,2000)
greet();