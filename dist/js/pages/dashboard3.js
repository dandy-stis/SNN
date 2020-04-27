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
  // umur chart
  var umurChartCanvas = document.getElementById('umur-chart-canvas').getContext('2d');
  //$('#umur-chart').get(0).getContext('2d');

  var umurChartData = {
    labels: ['2012', '2013', '2014', '2015', '2017', '2018', '2019'],
    datasets: [{
        label: '60 Tahun ke atas',
        backgroundColor: 'rgba(70,76,84,0.9)',
        borderColor: 'rgba(70,76,84,0.8)',
        pointRadius: false,
        pointColor: '#464C54',
        pointStrokeColor: 'rgba(70,76,84,1)',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(70,76,84,1)',
        data: [3.45, 3.55, 3.54, 3.49, 3.62, 3.56, 3.66]
      },
      {
        label: 'Kurang dari 40 Tahun',
        backgroundColor: 'rgba(60,141,188, 1)',
        borderColor: 'rgba(60,141,188, 1)',
        pointRadius: false,
        pointColor: 'rgba(60,141,188, 1)',
        pointStrokeColor: '#3b8bba',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(60,141,188,1)',
        data: [3.57, 3.63, 3.63, 3.59, 3.71, 3.65, 3.66]
      },
      {
        label: '40 - 59 Tahun',
        backgroundColor: 'rgba(72, 180, 97,0.9)',
        borderColor: 'rgba(72, 180, 97,0.8)',
        pointRadius: false,
        pointColor: '#48b461',
        pointStrokeColor: 'rgba(72, 180, 97,1)',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(72, 180, 97,1)',
        data: [3.58, 3.65, 3.64, 3.62, 3.74, 3.70, 3.74]
      },
    ]
  }

  var umurChartOptions = {
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
  var umurChart = new Chart(umurChartCanvas, {
    type: 'line',
    data: umurChartData,
    options: umurChartOptions
  })

})
