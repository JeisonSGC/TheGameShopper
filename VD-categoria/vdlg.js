const comprarBtn = document.getElementById('comprarBtn');
      const paymentModal = new bootstrap.Modal(document.getElementById('paymentModal'));
      const creditoBtn = document.getElementById('creditoBtn');
      const debitoBtn = document.getElementById('debitoBtn');
      const creditoForm = document.getElementById('creditoForm');
      const debitoForm = document.getElementById('debitoForm');
      const creditoContinuar = document.getElementById('creditoContinuar');
      const debitoContinuar = document.getElementById('debitoContinuar');
    
      
      comprarBtn.addEventListener('click', () => {
        paymentModal.show();
      });
    
      
      creditoBtn.addEventListener('click', () => {
        creditoForm.style.display = 'block';
        debitoForm.style.display = 'none';
      });
    
      
      debitoBtn.addEventListener('click', () => {
        debitoForm.style.display = 'block';
        creditoForm.style.display = 'none';
      });
    
      
      function validateForm(form) {
        const inputs = form.querySelectorAll('input');
        for (const input of inputs) {
          if (!input.checkValidity()) {
            input.reportValidity();
            return false;
          }
        }
        return true;
      }
    
      
      function guardarCompra(videojuego) {
        const usuarioActual = JSON.parse(localStorage.getItem('usuarioActual'));
        if (!usuarioActual) {
          alert('Debes iniciar sesión para realizar una compra');
          return;
        }
    
        let compras = JSON.parse(localStorage.getItem('compras')) || {};
        if (!compras[usuarioActual.nombre]) {
          compras[usuarioActual.nombre] = [];
        }
    
        compras[usuarioActual.nombre].push(videojuego);
        localStorage.setItem('compras', JSON.stringify(compras));
      }
    
      
      creditoContinuar.addEventListener('click', () => {
        if (validateForm(creditoForm)) {
          alert('Videojuego comprado con éxito');
          paymentModal.hide();
          comprarBtn.textContent = 'Comprado';
          comprarBtn.disabled = true;
          guardarCompra(nombreVideojuegoElement.textContent);
        } else {
          alert('Datos de tarjeta de crédito inválidos');
        }
      });
    
      
      debitoContinuar.addEventListener('click', () => {
        if (validateForm(debitoForm)) {
          alert('Videojuego comprado con éxito');
          paymentModal.hide();
          comprarBtn.textContent = 'Comprado';
          comprarBtn.disabled = true;
          guardarCompra(nombreVideojuegoElement.textContent);
        } else {
          alert('Datos de tarjeta de débito inválidos');
        }
      });