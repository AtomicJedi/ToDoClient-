import react from 'react'
import TaskList from './taskList/taskList.jsx' 

export default sendRequest = (method, url, body = null) => {
    const headers = {
      'Content-Type': 'application/json'
    }
  
    return fetch('http://localhost:5000/', {
      method: "POST",
      body: JSON.stringify(task),
    }).then(response => {
      if (response.ok) {
        return response.json()
      }
  
      return response.json().then(error => {
        const e = new Error('Что-то пошло не так')
        e.data = error
        throw e
      })
    })
  }

sendRequest('GET', requestURL)
  .then(data => console.log(data))
    .catch(err => console.log(err))


sendRequest('POST', requestURL, body)
  .then(data => console.log(data))
  .catch (err => console.log(err))
