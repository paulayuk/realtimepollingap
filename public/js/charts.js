let socket;

function init () {
socket = io.connect("http://localhost:3000");
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['React', 'jQuery'],
        datasets: [{
            label: '# of Votes',
            data: [0, 0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

socket.on('updateChart', (data) => {
     myChart.data.datasets[0].data[0] = data.value[0];
     myChart.data.datasets[0].data[1] = data.value[1];
     myChart.update()
});
}

function vote(id) {
  socket.emit('vote', id);
}
   
$(init);