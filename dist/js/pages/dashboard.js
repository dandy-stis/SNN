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
  // dimensi chart
  var dimensiChartCanvas = document.getElementById('dimensi-chart-canvas').getContext('2d');
  //$('#dimensi-chart').get(0).getContext('2d');

  var dimensiChartData = {
    labels: ['2012', '2013', '2014', '2015', '2017', '2018', '2019'],
    datasets: [{
        label: 'Pengalaman',
        backgroundColor: 'rgba(210, 214, 222, 1)',
        borderColor: 'rgba(210, 214, 222, 1)',
        pointRadius: false,
        pointColor: 'rgba(210, 214, 222, 1)',
        pointStrokeColor: '#c1c7d1',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: [3.58, 3.58, 3.49, 3.39, 3.60, 3.57, 3.65]
      },
      {
        label: 'Persepsi',
        backgroundColor: 'rgba(60,141,188,0.9)',
        borderColor: 'rgba(60,141,188,0.8)',
        pointRadius: false,
        pointColor: '#3b8bba',
        pointStrokeColor: 'rgba(60,141,188,1)',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(60,141,188,1)',
        data: [3.54, 3.66, 3.71, 3.73, 3.81, 3.86, 3.80]
      },

    ]
  }

  var dimensiChartOptions = {
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
  var dimensiChart = new Chart(dimensiChartCanvas, {
    type: 'line',
    data: dimensiChartData,
    options: dimensiChartOptions
  })

  // tempat tinggal chart
  var temptChartCanvas = document.getElementById('tempat-tinggal-chart-canvas').getContext('2d');
  //$('#tempat-tinggal-chart').get(0).getContext('2d');

  var temptChartData = {
    labels: ['2012', '2013', '2014', '2015', '2017', '2018', '2019'],
    datasets: [{
        label: 'Perdesaan',
        backgroundColor: 'rgba(210, 214, 222, 1)',
        borderColor: 'rgba(210, 214, 222, 1)',
        pointRadius: false,
        pointColor: 'rgba(210, 214, 222, 1)',
        pointStrokeColor: '#c1c7d1',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: [3.46, 3.55, 3.51, 3.46, 3.53, 3.47, 3.49]
      },
      {
        label: 'Perkotaan',
        backgroundColor: 'rgba(80,163,125,0.9)',
        borderColor: 'rgba(80,163,125,0.8)',
        pointRadius: false,
        pointColor: '#50a37d',
        pointStrokeColor: 'rgba(80,163,125,1)',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(80,163,125,1)',
        data: [3.66, 3.71, 3.71, 3.71, 3.86, 3.81, 3.86]
      },
    ]
  }

  var temptChartOptions = {
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
  var temptChart = new Chart(temptChartCanvas, {
    type: 'line',
    data: temptChartData,
    options: temptChartOptions
  })

})
