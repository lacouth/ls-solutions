const colorsContainer = document.querySelector('.cores tbody')

fetch('data/css-color-names.json')
  .then(res => res.json())
  .then(colors => {
    for (let i in colors){
      const insert = `<tr>
        <td>${i}</td>
        <td>${colors[i]}</td>
        <td style="background: ${i}"></td>
      </tr>`
      colorsContainer.insertAdjacentHTML('beforeend',insert)
    }
  })