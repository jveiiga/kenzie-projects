export class Toast {
    static criando(text, color) {
        Toastify({
            text: text,
            duration: 2000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: color,
            },
          }).showToast();
    }
}