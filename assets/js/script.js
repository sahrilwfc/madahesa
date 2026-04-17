// Inisialisasi AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true, // Animasi hanya berjalan sekali saat viewport mencapai elemen
    mirror: false
});

// Update tahun secara dinamis pada footer
document.getElementById('year').textContent = new Date().getFullYear();

// Konfigurasi tautan Google Form
const linkGoogleForm = {
    'ramu': 'https://forms.gle/s2Xd2QAvtvrtnXym6',
    'rakit': 'https://docs.google.com/forms/d/e/LINK_FORM_RAKIT_ANDA/viewform',
    'terap': 'https://docs.google.com/forms/d/e/LINK_FORM_TERAP_ANDA/viewform',
    'tkk': 'https://docs.google.com/forms/d/e/LINK_FORM_TKK_ANDA/viewform'
};

// Fungsi interaktif membuka formulir menggunakan SweetAlert2
function bukaFormulir(jenisSertifikat) {
    const urlTujuan = linkGoogleForm[jenisSertifikat];
    
    if (urlTujuan && urlTujuan.includes('LINK_FORM')) {
        Swal.fire({
            icon: 'info',
            title: 'Segera Hadir!',
            text: 'Tautan formulir untuk ' + jenisSertifikat.toUpperCase() + ' sedang dalam tahap penyiapan.',
            confirmButtonColor: '#946146',
            color: '#e5e7eb',
            background: 'rgba(26, 26, 36, 0.95)',
            backdrop: 'rgba(0,0,0,0.6)',
            customClass: {
                popup: 'rounded-2xl shadow-2xl border border-gray-700/50 backdrop-blur-md'
            }
        });
    } else if (urlTujuan) {
        Swal.fire({
            icon: 'success',
            title: 'Membuka Formulir...',
            text: 'Anda akan dialihkan ke halaman Google Form.',
            showConfirmButton: false,
            timer: 1500,
            color: '#e5e7eb',
            background: 'rgba(26, 26, 36, 0.95)',
            backdrop: 'rgba(0,0,0,0.6)',
            customClass: {
                popup: 'rounded-2xl shadow-2xl border border-gray-700/50 backdrop-blur-md'
            }
        }).then(() => {
            window.open(urlTujuan, '_blank');
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Galat',
            text: 'Formulir tidak ditemukan.',
            confirmButtonColor: '#946146',
            color: '#e5e7eb',
            background: 'rgba(26, 26, 36, 0.95)',
            backdrop: 'rgba(0,0,0,0.6)',
            customClass: {
                popup: 'rounded-2xl shadow-2xl border border-gray-700/50 backdrop-blur-md'
            }
        });
    }
}
