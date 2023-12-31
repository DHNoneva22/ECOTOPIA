// setup 
const data = [{
  labels: ['Buriganga, Bangladesh', 'Marilao, Philippines', 'Songhua, China', 'Passing River, Philippines', 'Citarum, Indonesia', 'Yellow River, China '],
  datasets: [{
    label: 'World Polution',
    data: [80, 68, 75, 54, 49, 51, 78],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor: [
      'rgba(255, 26, 104, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
      'rgba(0, 0, 0, 1)'
    ],
    borderWidth: 1
  }]
}, {
  labels: ['1996', '2000', '2004', '2008', '2012', '2016', '2020'],
  datasets: [{
    label: 'World Polution',
    data: [12, 24, 26, 34, 39, 63, 80],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor: [
      'rgba(255, 26, 104, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
      'rgba(0, 0, 0, 1)'
    ],
    borderWidth: 1
  }]
}, {
  labels: ['Mongolia', 'Botswana', 'Pakistan', 'Senegal', 'Saudi Arabia', 'Egypt', 'Arab Emirates'],
  datasets: [{
    label: 'World Polution',
    data: [279, 216, 198, 145, 143, 138, 132],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor: [
      'rgba(255, 26, 104, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
      'rgba(0, 0, 0, 1)'
    ],
    borderWidth: 1
  }]
}];


// config 
const config = {
  type: 'bar',
  data: data[0],
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

// render init block
const myChart = new Chart(
  document.getElementById('barChart'),
  config
);


// config 
const config2 = {
  type: 'line',
  data: data[1],
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

const lineChart = new Chart(
  document.getElementById('lineChart'),
  config2
);


// config 
const config3 = {
  type: 'pie',
  data: data[2],
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

const pieChart = new Chart(
  document.getElementById('pieChart'),
  config3
);

// Instantly assign Chart.js version
const chartVersion = document.getElementById('chartVersion');
chartVersion.innerText = Chart.version;
