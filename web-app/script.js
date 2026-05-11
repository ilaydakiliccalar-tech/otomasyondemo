document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const btn = document.getElementById('newAppointment');
    const span = document.getElementsByClassName('close')[0];

    btn.onclick = () => {
        modal.style.display = 'block';
    }

    span.onclick = () => {
        modal.style.display = 'none';
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    const form = document.getElementById('appointmentForm');
    form.onsubmit = (e) => {
        e.preventDefault();
        alert('Randevu başarıyla oluşturuldu!');
        modal.style.display = 'none';
    }
});
