// PIE CHART
const pieCtx = document.getElementById('pieChart');

new Chart(pieCtx, {
  type: 'pie',
  data: {
    labels: ['Thoughts', 'Cuts', 'No Cuts'],
    datasets: [{
      data: [500, 200, 1000],
      backgroundColor: ['grey', 'black', 'white']
    }]
  }
});

// LINE CHART
const lineCtx = document.getElementById('lineChart');

new Chart(lineCtx, {
  type: 'line',
  data: {
    labels: ['Early 2025', 'Mid 2025', 'Late 2025', 'New year', 'Present time'],
    datasets: [{
      label: 'Cuts',
      data: [100, 50, 120, 75, 0],
      borderColor: 'black'
    }]
  }
});
