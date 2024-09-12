// entendendo o fluxo de códigos assíncronos

const firstNumber = 10;
const secondNumber = 5;

let thirdNumber = firstNumber + secondNumber
thirdNumber = firstNumber - secondNumber

// entendendo Promises
// tarefa -> ao gerar um número randômico se ele for impar causar um erro por meio de uma Promise
const generateRandomNumber = () => Math.round(Math.random() * 10);

// const randomPromise = () => new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const randomNumber = generateRandomNumber();
//     if (randomNumber > 5) {
//       resolve(randomNumber)
//     } else {
//       reject(randomNumber)
//     }
//   }, 1000)
// })

// randomPromise()
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error))




// colocando em prática
const API_URL = `https://aaadummyjson.com/quotes/random`

const btnElement = document.querySelector('.btnElement')
const quoteText = document.querySelector('.quoteText')
const authorText = document.querySelector('.authorText')
const errorText = document.querySelector('.errorText')

btnElement.addEventListener('click', async () => {
  // fetch(API_URL)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     quoteText.innerHTML = data.quote
  //     authorText.innerHTML = data.author
  //     errorText.innerHTML = ""
  //   })
  //   .catch((error) => {
  //     quoteText.innerHTML = ""
  //     authorText.innerHTML = ""
  //     errorText.innerHTML = "Erro"
  //   })

  try {
    const response = await fetch(API_URL)
    const data = await response.json()

    quoteText.innerHTML = data.quote
      authorText.innerHTML = data.author
      errorText.innerHTML = ""
  } catch (error) {
      quoteText.innerHTML = ""
      authorText.innerHTML = ""
      errorText.innerHTML = "Erro"
  }
})
