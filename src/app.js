document.addEventListener('alpine:init', () => {
  Alpine.data('products', () => ({
      items: [
          { id: 1, name: 'Diabetasol', img: 'produk.png', price: 40000 },
          { id: 2, name: 'YouC1000', img: 'produk2.png', price: 8000 },
          { id: 3, name: 'Bodrex', img: 'produk3.png', price: 10000 },
          { id: 4, name: 'Hilo Calcium', img: 'produk4.png', price: 20000 },
          { id: 5, name: 'Entrasol', img: 'produk5.png', price: 8000 },
      ]   
  }));

  Alpine.store('cart', {
      items: [],
      total: 0,
      quantity: 0,

      add(newItem) {

      const cartItem = this.items.find((item) => item.id === newItem.id);

      if(!cartItem) {
        this.items.push({...newItem, quantity: 1, total: newItem.price});
        this.quantity++;
        this.total += newItem.price;
      } else {
        this.items = this.items.map((item) => {
          if(item.id !== newItem.id) {
            return item;
          } else {
            item.quantity++;
            item.total = item.quantity * item.price;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
      },

      remove(id) {
        const cartItem = this.items.find((item) => item.id === id);

        if(cartItem.quantity > 1 ) {
          this.items = this.items.map((item) => {
            if(item.id !== id) {
              return item;
            } else {
              item.quantity--;
              item.total = item.price * item.quantity;
              this.quantity--;
              this.total -= item.price;
              return item
            }
          });
        } else if (cartItem.quantity === 1) {
          this.items = this.items.filter((item) => item.id !== id);
          this.quantity--;
          this.total -= cartItem.price;
        }
      },

  });
});

// Konversi ke Rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
  }).format(number);
}

// form validation

const checkoutButton = document.querySelector('.checkout-button');
checkoutButton.disabled = true;

const form = document.querySelector('#checkoutForm');

form.addEventListener('keyup', function() {
    for(let i = 0; i < form.elements.length; i++) {
      if(form.elements[i].value.length !== 0) {
        checkoutButton.classList.remove('disabled');
        checkoutButton.classList.add('disabled');
      } else {
        return false;
      }
    }

    checkoutButton.disabled = false;
    checkoutButton.classList.remove('disabled');
});

//data di kirim ketika tombol checkout di klik

checkoutButton.addEventListener('click', function(e) {
  e.preventDefault();

  const formData = new FormData(form);

  const data = new URLSearchParams(formData);

  const objData = Object.fromEntries(data);

  const message = formatMessage(objData);

  window.open('https://wa.me/6283895207734?text=' + encodeURIComponent(message));


});

// format data ke wa

const formatMessage = (obj) => {
  return `Data customer 
    Nama: ${obj.name}
    Email: ${obj.email}
    No Hp: ${obj.phone}
    Data Pesenan
    ${JSON.parse(obj.items).map((item) => `${item.name} (${item.quantity} x ${rupiah(item.total)}) \n`)}
  
  Total: ${rupiah(obj.total)}  
  Terima Kasih.`;

}