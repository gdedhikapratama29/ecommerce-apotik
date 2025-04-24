const hamburger = document.querySelector('.toggle-btn')
const toggler = document.querySelector('#icon')

hamburger.addEventListener("click", function () {
    document.querySelector("#sidebar").classList.toggle("expand");
    toggler.classList.toggle("bx-chevrons-right");   
    toggler.classList.toggle("bx-chevrons-left");   
})

new Chart(document.getElementById("mixed-chart"), {
    type: 'bar',
    data: {
      labels: ["2020", "2021", "2023", "2025"],
      datasets: [{
          label: "Data Pasien",
          type: "line",
          borderColor: "#8e5ea2",
          data: [408,547,675,734],
          fill: false
        }, {
          label: "Data Obat",
          type: "line",
          borderColor: "#3e95cd",
          data: [133,221,783,2478],
          fill: false
        }, {
          label: "data pasien",
          type: "bar",
          backgroundColor: "#8e5ea2",
          data: [408,547,675,734],
        }, {
          label: "data obat",
          type: "bar",
          backgroundColor: "#3e95cd",
          backgroundColorHover: "#3e95cd",
          data: [133,221,783,2478]
        }
      ]
    },
});