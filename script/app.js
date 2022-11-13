const borderColor = "#aaa";
const color = "#666";

const data = {
    datasets: [{
        label: 'Scatter Dataset',
        data: [{
            x: -10,
            y: 0
        }, {
            x: 0,
            y: 10
        }, {
            x: 10,
            y: 5
        }, {
            x: 0.5,
            y: 5.5
        }],
        backgroundColor: '#4b85e9',
        color: "white"
    }],
};

const config = {
    type: 'scatter',
    data: data,
    options: {
        plugins: {
            title: {
                color: "white",
                display: true,
                text: 'Drill Bit Comparison'
            },
            legend: {
                display: false,
                labels: {
                    color: "#bbb",
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: "#bbb"
                },
                grid: {
                    drawBorder: true,
                    borderColor: borderColor,
                    color: color,
                },
                type: 'linear',
                position: 'bottom'
            },
            y: {
                ticks: {
                    color: "#bbb"
                },
                grid: {
                    drawBorder: true,
                    borderColor: borderColor,
                    color: color,
                }
            }
        }
    }
};

const myChart = new Chart('myChart', config);

// table
const tableSection = document.querySelector(".tables");

function addHeaderRow(table, data) {
    const row = document.createElement("tr");
    for(let i = 0; i < data.length; i++) {
        const cell = document.createElement("th");
        const text = document.createTextNode(data[i]);
        cell.appendChild(text);
        row.appendChild(cell);
    }
    table.appendChild(row);
}

function addDataRow() {
    
}

function createTable() {
    const table = document.createElement("table");
    const headerData = [
        "name",
        "efficiency",
        "cost"
    ]
    addHeaderRow(table, headerData);
    return table;
}

const table = createTable();
tableSection.appendChild(table);