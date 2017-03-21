$('#select-all').click(function(event) {
    if(this.checked) {
        // Iterate each checkbox
        $(':checkbox').each(function() {
            this.checked = true;
          });
    }else { // Iterate each checkbox
      $(":checkbox").each(function() { this.checked = false; });
    }
});

// Datatable initialization
$(document).ready( function () {
    $('#table').DataTable({
      responsive:true,
      scrollX: true,
      "dom": '<"top"f>rt<"bottom"pil><"clear">',
      "lengthMenu": [ 5, 10, 25, 50, 75, 100 ],
      "language": {
          "info": "_START_ - _END_ of _TOTAL_",
          "lengthMenu": "Rows per page: _MENU_ "

        },
        "paginate": {
          "first":      "",
          "last":       "",
          "next":       "Next",
          "previous":   "Previous"
      },


    });
} );

$(document).ready(function (){
  $('#table_search').click(function (){
    $('#table_filter').toggleClass('active');
    $(this).toggleClass('active');
  })
})



// select
$(document).ready(function() {
    $('select').material_select();
  });


  $('.user-with-tip').tooltipsy({
  offset: [0, 10],
  //delay:0,
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
