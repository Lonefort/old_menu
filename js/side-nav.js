// Collapse button-collapse
$('.button-collapse').on('click', function(e) {
$(this).toggleClass("open"); //you can list several class names
e.preventDefault();
});
$('.button-collapse').on('click', function(e) {
$('#slide-out').toggleClass("slided"); //you can list several class names
e.preventDefault();
});
$('.button-collapse').on('click', function(e) {
$('.tabs-row').toggleClass("slided"); //you can list several class names
e.preventDefault();
});
$('.button-collapse').on('click', function(e) {
$('main').toggleClass("slided"); //you can list several class names
e.preventDefault();
});

$('.button-collapse').sideNav({
    menuWidth: 250, // Default is 240
    edge: 'left', // Choose the horizontal origin
    closeOnClick: false // Closes side-nav on <a> clicks, useful for Angular/Meteor
  }
);

  // tooltipsy
$('.hastip').tooltipsy({
offset: [10, 0],
delay:0,
css: {
    'padding': '2px 15px',
    'font-size':'12px',
    'font-weight':'500',
    'border-radius':'4px',
    'max-width': '150px',
    'color': '#fff',
    'background-color': '#8b8b8b',
    'text-shadow': 'none'
}
});
