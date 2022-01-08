var divMain = document.getElementById('Div_Main')

window.onclick = e => {
  let divClicked = e.target.id

  switch (divClicked) {
    case 'Div_1':
      divMain.style.backgroundColor = 'red'
      break
    case 'Div_2':
      divMain.style.backgroundColor = 'blue'
      break
    case 'Div_3':
      divMain.style.backgroundColor = 'green'
      break
    case 'Div_4':
      divMain.style.backgroundColor = 'Purple'
      break
  }
}
