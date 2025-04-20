const box = document.getElementById("box");
const form = document.getElementById("form");

// Tạo biến để lưu transform ban đầu (không dính hover/active)
let baseTransform = "";
let baseColor = "";

// Helper để tách giá trị và đơn vị
function parseValueWithUnit(value) {
  const match = value.trim().match(/^([-+]?\d*\.?\d+)([a-z%]*)$/i);
  if (!match) {
    alert("Cú pháp giá trị không hợp lệ!");
    return null;
  }
  return {
    value: parseFloat(match[1]),
    unit: match[2] || "px" // Mặc định dùng "px" nếu không có đơn vị
  };
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const width = Number(document.getElementById("width").value);
  const height = Number(document.getElementById("height").value);
  const color = document.getElementById("color").value;
  const inputCommand = document.getElementById("style-customized").value.trim();

  // Áp dụng kích thước và màu
  Object.assign(box.style, {
    width: width + "px",
    height: height + "px",
    backgroundColor: color
  });

  baseColor = color;

  if (!inputCommand) {
    box.style.transform = "";
    baseTransform = "";
    return;
  }

  // Phân tích lệnh transform
  const regex = /^(\w+)\((.*?)\)$/;
  const match = inputCommand.match(regex);

  if (!match) {
    alert("Cú pháp transform không hợp lệ.");
    return;
  }

  const command = match[1];
  const params = match[2].split(",").map(p => p.trim());
  let resultTransform = "";

  // Xử lý các lệnh transform
  if (["translate", "translateX", "translateY"].includes(command)) {
    const parsedParams = params.map(p => parseValueWithUnit(p));
    if (parsedParams.includes(null)) return;

    resultTransform =
      command === "translate"
        ? `${command}(${parsedParams[0].value}${parsedParams[0].unit}, ${parsedParams[1].value}${parsedParams[1].unit})`
        : `${command}(${parsedParams[0].value}${parsedParams[0].unit})`;
  } else if (["scale", "scaleX", "scaleY"].includes(command)) {
    const parsedParams = params.map(p => parseValueWithUnit(p));
    if (parsedParams.includes(null)) return;

    resultTransform =
      command === "scale"
        ? `${command}(${parsedParams[0].value}, ${parsedParams[1] ? parsedParams[1].value : parsedParams[0].value})`
        : `${command}(${parsedParams[0].value})`;
  } else if (["skew", "skewX", "skewY"].includes(command)) {
    const parsedParams = params.map(p => parseValueWithUnit(p));
    if (parsedParams.includes(null)) return;

    resultTransform =
      command === "skew"
        ? `${command}(${parsedParams[0].value}${parsedParams[0].unit}, ${parsedParams[1] ? parsedParams[1].value : "0"}${parsedParams[1] ? parsedParams[1].unit : "deg"})`
        : `${command}(${parsedParams[0].value}${parsedParams[0].unit})`;
  } else if (command === "matrix") {
    if (params.length !== 6) {
      alert("Matrix yêu cầu đúng 6 tham số.");
      return;
    }

    const parsedParams = params.map(p => parseValueWithUnit(p));
    if (parsedParams.includes(null)) return;

    resultTransform = `matrix(${parsedParams.map(p => p.value).join(",")})`;
  } else {
    alert("Lệnh transform không được hỗ trợ.");
    return;
  }

  // Lưu transform cơ bản để dùng lại
  baseTransform = resultTransform;
  box.style.transform = baseTransform;
});

// Hover và Active effect
box.addEventListener("mouseenter", () => {
    box.style.transition = "transform 0.3s ease";
    box.style.transform = baseTransform + " scale(1.1)";
});
  
box.addEventListener("mouseleave", () => {
    box.style.transition = "transform 0.3s ease";
    box.style.transform = baseTransform;
});
  
box.addEventListener("mousedown", () => {
    box.style.transition = "transform 0.3s ease, background-color 0.3s ease";
    box.style.transform = baseTransform + " scale(0.95)";
    box.style.backgroundColor = "lightgray";
});
  
box.addEventListener("mouseup", () => {
    box.style.transition = "transform 0.3s ease, background-color 0.3s ease";
    box.style.transform = baseTransform;
    box.style.backgroundColor = baseColor;
});
