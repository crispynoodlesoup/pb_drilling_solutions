const borderColor = "#aaa";
const color = "#666";
let myChart;

const asteroidNum = document.getElementById("asteroid-select");
const xAx = document.getElementById("x-axis");
const yAx = document.getElementById("y-axis");

async function astroidToGraph(num, data1, data2) {
    const requestURL = `https://raw.githubusercontent.com/crispynoodlesoup/pb_drilling_solutions/main/data/ast${num}.json`;
    const request = new Request(requestURL);

    const response = await fetch(request);
    const json = await response.json();

    dataSet1 = [];
    dataSet2 = [];
    dataSet3 = [];
    dataSet4 = [];
    for (let i = 0; i < json.length; i += 23) {
        switch (json[i]["DRILL_BIT_NAME"]) {
            case "Buzz Drilldrin":
                dataSet1.push({
                    x: json[i][data1],
                    y: json[i][data2]
                });
                if (dataSet1.length > 1 && json[i][""])
                    break;
            case "AstroBit":
                dataSet2.push({
                    x: json[i][data1],
                    y: json[i][data2]
                });
                break;
            case "ChallengDriller":
                dataSet3.push({
                    x: json[i][data1],
                    y: json[i][data2]
                });
                break;
            case "Apollo":
                dataSet4.push({
                    x: json[i][data1],
                    y: json[i][data2]
                });
                break;
        }
    }

    /*
    let thing = [];
    if (!!dataSet1)
        thing.push({
            start: dataSet1[0],
            end: dataSet1[dataSet1.length - 1],
        });
    if (!!dataSet2)
        thing.push({
            start: dataSet2[0],
            end: dataSet2[dataSet2.length - 1],
        });
    if (!!dataSet3)
        thing.push({
            start: dataSet3[0],
            end: dataSet3[dataSet3.length - 1],
        });
    if (!!dataSet4)
        thing.push({
            start: dataSet4[0],
            end: dataSet4[dataSet4.length - 1],
        });
    updateTable(thing);*/

    data = {
        datasets: [{
            label: "Buzz Drilldrin",
            data: dataSet1,
            backgroundColor: '#4b85e9',
            color: "white"
        }, {
            label: 'AstroBit',
            data: dataSet2,
            backgroundColor: '#87fa83',
            color: "white"
        }, {
            label: 'ChallengDriller',
            data: dataSet3,
            backgroundColor: '#ff91f8',
            color: "white"
        }, {
            label: 'Apollo',
            data: dataSet4,
            backgroundColor: '#ffbf49',
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
                    display: true,
                    labels: {
                        color: "#bbb",
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: data1.split("_").join(" ").toLowerCase(),
                        color: "white"
                    },
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
                    title: {
                        display: true,
                        text: data2.split("_").join(" ").toLowerCase(),
                        color: "white"
                    },
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

    if (myChart)
        myChart.destroy();

    myChart = new Chart('myChart', config);
}

astroidToGraph(1, `BIT_DEPTH`, `CURRENT_COST`);

asteroidNum.addEventListener('change', (e) => updateGraph(asteroidNum.value, `${xAx.value}`, `${yAx.value}`));
xAx.addEventListener('change', (e) => updateGraph(asteroidNum.value, `${xAx.value}`, `${yAx.value}`));
yAx.addEventListener('change', (e) => updateGraph(asteroidNum.value, `${xAx.value}`, `${yAx.value}`));

function updateGraph(num, data1, data2) {
    myChart.destroy();
    console.log(data1);
    astroidToGraph(Number(num), data1, data2);
}

/*
let num = 1;

function updateGraph() {
    myChart.destroy();
    num++;
    astroidToGraph(num, "CURRENT_COST", "BIT_DEPTH");
}

dataSet1 = astroidToGraph(1, "CURRENT_COST", "BIT_DEPTH");
const button = document.querySelector(".test-button");
button.addEventListener("click", updateGraph);
*/

/*
// table
const tableSection = document.querySelector(".tables");

function addHeaderRow(table, data) {
    const row = document.createElement("tr");
    for (let i = 0; i < data.length; i++) {
        const cell = document.createElement("th");
        const text = document.createTextNode(data[i]);
        cell.appendChild(text);
        row.appendChild(cell);
    }
    table.appendChild(row);
}

function addDataRow(table, data) {
    const row = document.createElement("tr");
    for (let i = 0; i < data.length; i++) {
        const cell = document.createElement("td");
        const text = document.createTextNode(data[i]);
        cell.appendChild(text);
        row.appendChild(cell);
    }
    table.appendChild(row);
}

function addRowsFromDataArray(table, data) {
    for (let i = 0; i < data.length; i++) {
        addDataRow(table, data[i]);
    }
}

function createTable() {
    const table = document.createElement("table");
    const headerData = [
        "Name",
        "Efficiency",
        "Cost",
        "Cost Effectiveness"
    ]
    const caption = document.createElement("caption");
    const text = document.createTextNode("Drill Bit Table");
    caption.appendChild(text);
    table.appendChild(caption);
    addHeaderRow(table, headerData);
    return table;
}

function updateTable(data) {
    if (!!tableSection.firstElementChild) return;

    const table = createTable();

    for (let i = 0; i < data.length; i++) {
        let organizedData = [];
        let efficiency = data;
    }
    addRowsFromDataArray(table, exampleData);
};

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

let table = createTable();
addRowsFromDataArray(table, exampleData);
tableSection.appendChild(table);*/