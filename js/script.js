function formulario() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
  
    const data = {
      nombre: nombre,
      apellido: apellido,
      fechaNacimiento: fechaNacimiento
    };
  
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      alert('Registro exitoso');
    })
    .catch(error => {
      console.error(error);
      alert('Error en la solicitud');
    });
  }
  