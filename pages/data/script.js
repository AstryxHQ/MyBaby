// PIE CHART
const pieCtx = document.getElementById('pieChart');

new Chart(pieCtx, {
  type: 'pie',
  data: {
    labels: ['Food', 'Rent', 'Transport'],
    datasets: [{
      data: [500, 1200, 300],
      backgroundColor: ['red', 'blue', 'green']
    }]
  }
});

// LINE CHART
const lineCtx = document.getElementById('lineChart');

new Chart(lineCtx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar'],
    datasets: [{
      label: 'Expenses',
      data: [2000, 1800, 2200],
      borderColor: 'blue'
    }]
  }
});
