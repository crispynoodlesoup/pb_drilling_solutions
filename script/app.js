const borderColor = "#aaa";
const color = "#666";

const data = {
    datasets: [{
        label: 'Scatter Dataset',
        data: [{x: 0, y:0}],
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

function addDataRow(table, data) {
    const row = document.createElement("tr");
    for(let i = 0; i < data.length; i++) {
        const cell = document.createElement("td");
        const text = document.createTextNode(data[i]);
        cell.appendChild(text);
        row.appendChild(cell);
    }
    table.appendChild(row);   
}

function addRowsFromDataArray(table, data) {
    for(let i = 0; i < data.length; i++) {
        addDataRow(table, data[i]);
    }
}

function createTable() {
    const table = document.createElement("table");
    const headerData = [
        "Name",
        "Efficiency",
        "Cost"
    ]
    const caption = document.createElement("caption");
    const text = document.createTextNode("Drill Bit Table");
    caption.appendChild(text);
    table.appendChild(caption);
    addHeaderRow(table, headerData);
    return table;
}

const exampleData = [[
    "bizz",
    10,
    1.0
], [
    "fuzz",
    0,
    0.5
], [
    "booze",
    1,
    2.0
], [
    "fahze",
    5,
    3.0
], [
    "bizz",
    10,
    1.0
], [
    "fuzz",
    0,
    0.5
], [
    "fuzz",
    0,
    0.5
]];

const table = createTable();
addRowsFromDataArray(table, exampleData);
tableSection.appendChild(table);