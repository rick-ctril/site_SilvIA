AOS.init({
    disable: function() {
      // Desativa AOS em dispositivos móveis (largura menor que 768px, por exemplo)
      return window.innerWidth < 768;
    }
  });