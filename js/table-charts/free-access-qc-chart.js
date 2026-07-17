(function () {
  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function getLabelFontSize(chart) {
    return clamp(Math.round(chart.width / 54), 5, 14);
  }

  const technologyData = [
    { label: ["Trapped", "ions"], value: 3, color: "#d9080d" },
    { label: ["Neutral", "atoms"], value: 3, color: "#6aad4f" },
    { label: "Photonic", value: 3, color: "#ffc20f" },
    { label: "Superconducting", value: 11, color: "#3f7fd5" }
  ];

  const companyData = [
    { label: "AQT", value: 1, parent: "Trapped-ions", color: "#d9080d" },
    { label: "IonQ", value: 2, parent: "Trapped-ions", color: "#df6262" },
    { label: "Pasqal", value: 2, parent: "Neutral-atoms", color: "#6aad4f" },
    { label: "QuEra", value: 1, parent: "Neutral-atoms", color: "#bddcaf" },
    { label: "Quandela", value: 3, parent: "Photonic", color: "#f4c82d" },
    { label: "IQM", value: 3, parent: "Superconducting", color: "#3f7fd5" },
    { label: "Rigetti", value: 1, parent: "Superconducting", color: "#6da2e9" },
    { label: "IBM", value: 3, parent: "Superconducting", color: "#a8c4ee" },
    { label: "OriginQ", value: 1, parent: "Superconducting", color: "#c4d6f0" },
    { label: "QuTech", value: 3, parent: "Superconducting", color: "#d1ddee" }
  ];

  const chipData = [
    { label: "IBEX Q1", value: 1, parent: "AQT", color: "#d9080d" },
    { label: "Aria", value: 1, parent: "IonQ", color: "#df6262" },
    { label: "Forte", value: 1, parent: "IonQ", color: "#e98d91" },
    { label: "FRESNEL", value: 1, parent: "Pasqal", color: "#6aad4f" },
    { label: "DISTRIQ", value: 1, parent: "Pasqal", color: "#8ec27d" },
    { label: "Aquila", value: 1, parent: "QuEra", color: "#bddcaf" },
    { label: "Ascella", value: 1, parent: "Quandela", color: "#f4c82d" },
    { label: "Altair", value: 1, parent: "Quandela", color: "#ffdc68" },
    { label: "Belenos", value: 1, parent: "Quandela", color: "#ffeaa5" },
    { label: "Garnet", value: 1, parent: "IQM", color: "#4f88dd" },
    { label: "Sirius", value: 1, parent: "IQM", color: "#5b93e8" },
    { label: "Emerald", value: 1, parent: "IQM", color: "#6597e3" },
    { label: ["Cepheus-1", "108Q"], value: 1, parent: "Rigetti", color: "#6da2e9" },
    { label: "Marrakesh", value: 1, parent: "IBM", color: "#aec9f2" },
    { label: "Fez", value: 1, parent: "IBM", color: "#c0d5f5" },
    { label: "Kingston", value: 1, parent: "IBM", color: "#c7d8f3" },
    { label: "Wukong -180", value: 1, parent: "OriginQ", color: "#c4d6f0" },
    { label: "Tuna-5", value: 1, parent: "QuTech", color: "#d1ddee" },
    { label: "Tuna-9", value: 1, parent: "QuTech", color: "#d9e0eb" },
    { label: "Tuna-17", value: 1, parent: "QuTech", color: "#e6e9ed" }
  ];

  function makeDataset(label, data) {
    return {
      label: label,
      labels: data.map((item) => item.label),
      parents: data.map((item) => item.parent || ""),
      data: data.map((item) => item.value),
      backgroundColor: data.map((item) => item.color),
      borderColor: "#ffffff",
      borderWidth: 4,
      hoverBorderColor: "#ffffff",
      hoverBorderWidth: 4,
      weight: 1
    };
  }

  const arcLabelPlugin = {
    id: "freeAccessQcArcLabels",
    afterDatasetsDraw(chart) {
      const ctx = chart.ctx;
      const labelFontSize = getLabelFontSize(chart);

      chart.data.datasets.forEach((dataset, datasetIndex) => {
        const meta = chart.getDatasetMeta(datasetIndex);

        meta.data.forEach((arc, index) => {
          const label = dataset.labels[index];
          const angle = (arc.startAngle + arc.endAngle) / 2;
          const radius = (arc.innerRadius + arc.outerRadius) / 2;
          const x = arc.x + Math.cos(angle) * radius;
          const y = arc.y + Math.sin(angle) * radius;

          ctx.save();
          ctx.fillStyle = "#111111";
          ctx.font = `${labelFontSize}px Arial, sans-serif`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          if (Array.isArray(label)) {
            const lineHeight = labelFontSize * 1.15;
            const startY = y - ((label.length - 1) * lineHeight) / 2;
            label.forEach((line, lineIndex) => {
              ctx.fillText(line, x, startY + lineIndex * lineHeight);
            });
          } else {
            ctx.fillText(label, x, y);
          }
          ctx.restore();
        });
      });
    }
  };

  function createFreeAccessQcChart() {
    const canvas = document.getElementById("freeAccessQcChart");

    if (!canvas || typeof Chart === "undefined") {
      return;
    }

    return new Chart(canvas, {
      type: "doughnut",
      data: {
        datasets: [
          makeDataset("Chip", chipData),
          makeDataset("Company", companyData),
          makeDataset("Technology", technologyData)
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1,
        cutout: "0%",
        rotation: -90,
        animation: false,
        layout: {
          padding: 8
        },
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: false
          },
          tooltip: {
            callbacks: {
              title(context) {
                const item = context[0];
                const dataset = item.dataset;
                const rawLabel = dataset.labels[item.dataIndex];
                const label = Array.isArray(rawLabel) ? rawLabel.join(" ") : rawLabel;
                const value = item.parsed;
                const unit = value === 1 ? "chip" : "chips";

                return `${label}: ${value} ${unit}`;
              },
              label(context) {
                return null;
              }
            }
          }
        }
      },
      plugins: [arcLabelPlugin]
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createFreeAccessQcChart);
  } else {
    createFreeAccessQcChart();
  }
}());
