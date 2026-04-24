function getColumnIndexes(table) {
    const indexes = {};
    table.columns().every(function (index) {
      const header = $(this.header()).text().trim();
      if (header === 'Year') {
        indexes.year = index;
      }
      if (header === 'log_2(QV)') {
        indexes.log2QV = index;
      }
      if (header === 'Technology') {
        indexes.technology = index;
      }
      if (header === 'Company') {
        indexes.company = index;
      }
      if (header === 'Protocol') {
        indexes.protocol = index;
      }
      if (header === 'CPU / QPU') {
        indexes.qpu = index;
      }
    });
    return indexes;
}

function getCellValue(row, index) {
    if (Array.isArray(row)) {
      return String(row[index] ?? '').trim();
    }
    return String(row[index] ?? '').trim();
}

function parseYYYYMMToDecimalYear(value) {
    const match = String(value).trim().match(/^(\d{4})\/(\d{1,2})$/);
    if (!match) {
      return NaN;
    }
    const year = Number(match[1]);
    const month = Number(match[2]);
    if (month < 1 || month > 12) {
      return NaN;
    }
    return year + (month - 1) / 12;
}

function decimalYearToYYYYMM(value) {
    const year = Math.floor(value);
    const month = Math.round((value - year) * 12) + 1;

    return `${year}/${String(month).padStart(2, '0')}`;
}

function getPointStyle(protocol) {
    const text = String(protocol);
    if (text.includes('extended protocol')) {
      return 'rectangle';
    }
    else {
      return 'circle';
    }
}

const companyColors = {
    "AQT": "#ee817f",
    "IonQ": "#e93323",
    "Quantinuum": "#981e13",
    "OQC": "#bfe9fd",
    "Rigetti": "#469df7",
    "IQM": "#275dde",
    "QuTech": "#092a7a",
    "IBM": "#6b05b0",
    "University": "#ffc527"
};
  
function getCompanyColor(company) {
    return companyColors[company] || "#7f7f7f";
}

function createTableChart(table) {
    const ctx = document.getElementById('qvChart');

    return new Chart(ctx, {
      type: 'scatter',
      options: {
        plugins: {
          legend: {
            labels: {
              sort: function (a, b, data) {
                const companyOrder = Object.keys(companyColors);

                const ia = companyOrder.indexOf(a.text);
                const ib = companyOrder.indexOf(b.text);

                return ia - ib;
              }
            }
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                const p = context.raw;
                return `${p.company}: ${p.qpu}, ${p.yearLabel}, log2(QV) = ${p.y}`;
              }
            }
          }
        }
      }
    });
}

function updateTableChart(chart, table) {
    const indexes = getColumnIndexes(table);
    const pointsByCompany = {};

    table.rows().every(function () {
      const row = this.data();
      const yearText = getCellValue(row, indexes.year);
      const qvText = getCellValue(row, indexes.log2QV);
      const company = getCellValue(row, indexes.company);
      const protocol = getCellValue(row, indexes.protocol);
      const qpu = getCellValue(row, indexes.qpu);

      const x = parseYYYYMMToDecimalYear(yearText);
      const y = Number(qvText);

      if (!pointsByCompany[company]) {
        pointsByCompany[company] = [];
      }

      pointsByCompany[company].push({
        x: x,
        y: y,
        company: company,
        protocol: protocol,
        qpu: qpu,
        yearLabel: yearText,
        pointStyle: getPointStyle(protocol),
        datalabel: `${yearText}`
      });

      chart.data.datasets = [];
      for (const company in pointsByCompany) {
        const points = pointsByCompany[company];
        console.log(company)
        chart.data.datasets.push({
          label: company,
          data: points,
          pointRadius: 6,
          pointHoverRadius: 8,
          pointStyle: function (context) {
            return context.raw.pointStyle;
          },
          backgroundColor: getCompanyColor(company),
          borderColor: getCompanyColor(company)
        });
      }
      chart.update();
    });
}