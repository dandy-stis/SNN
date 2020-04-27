/*
 * Author: Abdullah A Almsaeed
 * Date: 4 Jan 2014
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/

$(function () {

  'use strict'

  // Make the dashboard widgets sortable Using jquery UI
  $('.connectedSortable').sortable({
    placeholder: 'sort-highlight',
    connectWith: '.connectedSortable',
    handle: '.card-header, .nav-tabs',
    forcePlaceholderSize: true,
    zIndex: 999999
  })
  $('.connectedSortable .card-header, .connectedSortable .nav-tabs-custom').css('cursor', 'move')

  // jQuery UI sortable for the todo list
  $('.todo-list').sortable({
    placeholder: 'sort-highlight',
    handle: '.handle',
    forcePlaceholderSize: true,
    zIndex: 999999
  })

  // bootstrap WYSIHTML5 - text editor
  $('.textarea').summernote()

  $('.daterange').daterangepicker({
    ranges: {
      'Today': [moment(), moment()],
      'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    },
    startDate: moment().subtract(29, 'days'),
    endDate: moment()
  }, function (start, end) {
    window.alert('You chose: ' + start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'))
  })

  /* jQueryKnob */
  $('.knob').knob()

  // The Calender
  $('#calendar').datetimepicker({
    format: 'L',
    inline: true
  })

  /* Chart.js Charts */
  // pendidikan chart
  var pendChartCanvas = document.getElementById('pendidikan-chart-canvas').getContext('2d');
  //$('#pendidikan-chart').get(0).getContext('2d');

  var pendChartData = {
    labels: ['2012', '2013', '2014', '2015', '2017', '2018', '2019'],
    datasets: [{
        label: 'SLTP Ke Bawah',
        backgroundColor: 'rgba(210, 214, 222, 1)',
        borderColor: 'rgba(210, 214, 222, 1)',
        pointRadius: false,
        pointColor: 'rgba(210, 214, 222, 1)',
        pointStrokeColor: '#c1c7d1',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: [3.47, 3.55, 3.52, 3.49, 3.58, 3.53, 3.57]
      },
      {
        label: 'Sederajat SLTA',
        backgroundColor: 'rgba(60,141,188,0.9)',
        borderColor: 'rgba(60,141,188,0.8)',
        pointRadius: false,
        pointColor: '#3b8bba',
        pointStrokeColor: 'rgba(60,141,188,1)',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(60,141,188,1)',
        data: [3.78, 3.82, 3.85, 3.80, 3.99, 3.94, 3.94]
      },
      {
        label: 'Di Atas SLTA',
        backgroundColor: 'rgba(253,126,20,0.9)',
        borderColor: 'rgba(253,126,20,0.8)',
        pointRadius: false,
        pointColor: '#fd7e14',
        pointStrokeColor: 'rgba(253,126,20,1)',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(253,126,20,1)',
        data: [3.94, 3.94, 4.01, 4.00, 4.09, 4.02, 4.05]
      },
    ]
  }

  var pendChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: true
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
        }
      }],
      yAxes: [{
        gridLines: {
          display: false,
        }
      }]
    }
  }

  // This will get the first returned node in the jQuery collection.
  var pendChart = new Chart(pendChartCanvas, {
    type: 'line',
    data: pendChartData,
    options: pendChartOptions
  })

})
