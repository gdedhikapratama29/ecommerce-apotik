const navbarNav = document.querySelector(".navbar-nav");
// Ambil elemen navbar

document.querySelector("#hamburger-menu").onclick = () => {
    navbarNav.classList.toggle("active");
};

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

const shoppingCart =  document.querySelector('.shopping-cart');
const shoppingCartButton = document.querySelector('#shopping-cart-button');
document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
}
document.addEventListener('click', function (e) {
    if (!shoppingCartButton.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active');
    }
})

document.addEventListener('DOMContentLoaded', () => {
    const itemDetailModal = document.querySelector('#item-detail-modal'); // Modal
    const itemDetailButtons = document.querySelectorAll('.item-detail-button'); // Semua tombol mata
    const closeButton = document.querySelector('.modal .close-icon'); // Tombol close

    if (itemDetailModal) {
        // Event listener untuk semua tombol mata
        itemDetailButtons.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                itemDetailModal.style.display = 'flex'; // Tampilkan modal
            });
        });

        // Event listener untuk tombol close
        if (closeButton) {
            closeButton.addEventListener('click', (e) => {
                e.preventDefault();
                itemDetailModal.style.display = 'none'; // Sembunyikan modal
            });
        }

        // Tutup modal jika klik di luar kontennya
        itemDetailModal.addEventListener('click', (e) => {
            if (e.target === itemDetailModal) {
                itemDetailModal.style.display = 'none';
            }
        });
    }
});


//click outside modal element 

window.onclick = (e) => {
    if (e.target === itemDetailModal) {
        itemDetailModal.style.display = 'none';
    }
}

// Gunakan requestAnimationFrame untuk menghindari forced reflow
function updateLayout() {
    requestAnimationFrame(() => {
        document.querySelector("#someElement").classList.add("new-style");
    });
}