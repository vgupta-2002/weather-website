console.log('Client Side JS');

const weatherForm = document.querySelector('form')

const search = document.querySelector('input')

const messageOne = document.querySelector('#message-one')
const messageTwo = document.querySelector('#message-two')

weatherForm.addEventListener('submit' , (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            //console.log(data.error)
            messageOne.textContent = data.error
        } else {
            //console.log(data)
            messageOne.textContent = data.address
            messageTwo.textContent = data.forecast.feelslike
        }
    })
    })
})