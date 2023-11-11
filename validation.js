const name = document.getElementById('name')
const address = document.getElementById('address')
const emailAddress = document.getElementById('emailAddress')
const telephone = document.getElementById('telephone')
const comments = document.getElementById('comments')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Name is required')
  }

  if (address.value === '' || address.value == null) {
    messages.push('Address is required')
  }

  if (emailAddress.value === '' || emailAddress.value == null) {
    messages.push('Email Address is required')
  }

  if (telephone.value === '' || telephone.value == null) {
    messages.push('Telephone number is required')
  }

  if (comments.value === '' || comments.value == null) {
    messages.push('Comments number is required')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})