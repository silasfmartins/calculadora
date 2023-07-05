const checkbox = document.querySelector('#checkbox')
const body = document.querySelector('body')

checkbox.addEventListener('change', changeTheme)

function changeTheme() {
  document.body.classList.toggle('dark')

  if (body.classList.contains('dark')) {
    body.classList.remove('light')
    body.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }
  else {
    body.classList.remove('dark')
    body.classList.add('light')
    localStorage.setItem('theme', 'light')
  }
}

body.classList.add(localStorage.getItem("theme"))

function displaynum(n1) {
  Calculator.text1.value = Calculator.text1.value  + n1;
}