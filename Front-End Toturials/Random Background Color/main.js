let hexparts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let color = [];

for (let i = 0; i < 6; i++) {
  let part = Math.floor(Math.random() * hexparts.length)
  color.push(hexparts[part])
}

document.body.append(`#${color.join("")}`)
document.body.style.backgroundColor = `#${color.join("")}`