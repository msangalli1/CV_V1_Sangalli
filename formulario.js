function validateAndSubmit() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Validación básica
  if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert('Por favor, completa todos los campos del formulario.');
      return;
  }

  // Valido el formato del nombre (solo letras y espacios)
  const nameRegex = /^[a-zA-Z\s]+$/;
  if (!nameRegex.test(name)) {
      alert('Por favor, ingresa un nombre válido. Ya que los nombre no pueden poseer caracteres especiales');
      return;
  }

  // Valido el formato del correo 
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert('El correo es invalido, tiene que ser del formato "*@*.*". Por favor, ingresa un correo electrónico válido.');
      return;
  }

  //Solo se envia si pasa todas las validaciones y los campos estan completos
  submitForm(name, email, message);
}

function submitForm(name, email, message) {
  // En caso de querer enviar luego esto a traves de algun socket de npm
  console.log('Nombre:', name);
  console.log('Correo Electrónico:', email);
  console.log('Mensaje:', message);

  alert('Mensaje enviado con éxito');
}
