document.addEventListener('DOMContentLoaded', ()=> {

    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);

    var dateAddModal = document.querySelector('#dateAddModal');
    var dateSelect = M.Modal.getInstance(dateAddModal);

    var calendarEl = document.querySelector('#calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      selectable: true,
      dateClick: function(info) {
        var dateField = document.querySelector('#date');
        dateField.value = info.dateStr;
        dateSelect.open();
      }
    });
    calendar.render();
  });