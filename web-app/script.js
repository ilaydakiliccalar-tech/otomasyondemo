// Uygulama Başlangıç Verileri
let students = JSON.parse(localStorage.getItem('sanat_students')) || [
    { id: 1, name: 'İlayda Kılıçlar', branch: 'Piyano', date: '2026-05-10' },
    { id: 2, name: 'Ahmet Ak', branch: 'Resim', date: '2026-05-11' },
    { id: 3, name: 'Merve Can', branch: 'Gitar', date: '2026-05-12' }
];

let teachers = JSON.parse(localStorage.getItem('sanat_teachers')) || [
    { id: 1, name: 'Selin Yurt', expertise: 'Keman', status: 'Aktif' },
    { id: 2, name: 'Murat Demir', expertise: 'Gitar', status: 'Aktif' },
    { id: 3, name: 'Ayşe Ak', expertise: 'Resim', status: 'İzinli' }
];

// UI Güncelleme Fonksiyonu
function updateDashboard() {
    // Öğrenci Tablosu
    const studentTable = document.getElementById('student-table-body');
    studentTable.innerHTML = students.map(s => `
        <tr>
            <td><strong>${s.name}</strong></td>
            <td><span class="branch-tag">${s.branch}</span></td>
            <td>${s.date}</td>
            <td><button class="btn-delete" onclick="deleteItem('student', ${s.id})">Sil</button></td>
        </tr>
    `).join('');

    // Eğitmen Tablosu
    const teacherTable = document.getElementById('teacher-table-body');
    teacherTable.innerHTML = teachers.map(t => `
        <tr>
            <td><strong>${t.name}</strong></td>
            <td>${t.expertise}</td>
            <td><span class="status-dot ${t.status === 'Aktif' ? 'dot-green' : 'dot-red'}"></span> ${t.status}</td>
            <td><button class="btn-delete" onclick="deleteItem('teacher', ${t.id})">Sil</button></td>
        </tr>
    `).join('');

    // İstatistikler
    document.getElementById('student-count').innerText = students.length;
    document.getElementById('teacher-count').innerText = teachers.length;

    // Verileri Kaydet
    localStorage.setItem('sanat_students', JSON.stringify(students));
    localStorage.setItem('sanat_teachers', JSON.stringify(teachers));
}

// Modal İşlemleri
function showModal(id) { document.getElementById(id).style.display = 'flex'; }
function closeModal(id) { document.getElementById(id).style.display = 'none'; }

// Silme İşlemi
function deleteItem(type, id) {
    if (type === 'student') students = students.filter(s => s.id !== id);
    else teachers = teachers.filter(t => t.id !== id);
    updateDashboard();
}

// Form Kayıtları
document.getElementById('studentForm').onsubmit = (e) => {
    e.preventDefault();
    const newS = {
        id: Date.now(),
        name: document.getElementById('sName').value,
        branch: document.getElementById('sBranch').value,
        date: new Date().toISOString().split('T')[0]
    };
    students.push(newS);
    updateDashboard();
    closeModal('userModal');
    e.target.reset();
};

document.getElementById('teacherForm').onsubmit = (e) => {
    e.preventDefault();
    const newT = {
        id: Date.now(),
        name: document.getElementById('tName').value,
        expertise: document.getElementById('tExpert').value,
        status: 'Aktif'
    };
    teachers.push(newT);
    updateDashboard();
    closeModal('teacherModal');
    e.target.reset();
};

// Başlangıçta çalıştır
document.addEventListener('DOMContentLoaded', updateDashboard);
