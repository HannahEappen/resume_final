document.getElementById('showLess').addEventListener('click', function() {
      var detailsDiv = document.getElementById('details');
      detailsDiv.style.display = detailsDiv.style.display === 'none' ? 'block' : 'none';
    });


    // Chart.js for skills visualization
    var ctx = document.getElementById('skillsChart').getContext('2d');
    var skillsChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['JavaScript', 'HTML', 'CSS','Java','C'],
        datasets: [{
          label: 'Skills Proficiency',
          data: [80, 95, 90,95,80],
          backgroundColor: [
            'rgba(75, 192, 192, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 205, 86, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(153, 102, 255, 0.5)',
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 205, 86, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: false, // Disable responsiveness
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 100
          }
        }
      }
    });
