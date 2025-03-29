document.addEventListener("DOMContentLoaded", function () {
    fetch('/api/participantes')
        .then(response => response.json())
        .then(data => {
            const lista = document.getElementById('participantes');
            data.forEach(participante => {
                const li = document.createElement('li');
                li.className = 'list-group-item';
                li.textContent = participante.nombre;
                lista.appendChild(li);
            });
        })
        .catch(error => console.error('Error al obtener participantes:', error));
});
