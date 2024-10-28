// Aqui você pode adicionar scripts JavaScript conforme necessário
console.log("Sistema de documentos textuais carregado.");

// Seleciona todos os links com a classe 'hover-effect'
const links = document.querySelectorAll('.hover-effect');

// Aplica o efeito de hover a cada link
links.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.backgroundColor = 'rgb(70, 130, 180)'; // Cor azul ao passar o mouse
        link.style.color = 'white';                       // Cor do texto
        link.style.padding = '5px 10px';                  // Ajuste no padding
        link.style.borderRadius = '5px';                  // Borda arredondada
        link.style.transition = 'all 0.3s ease';          // Transição suave para todas as propriedades
        link.style.fontSize = '1.1em';                    // Aumenta a fonte
    });

    link.addEventListener('mouseout', () => {
        link.style.backgroundColor = '';                  // Restaura a cor de fundo
        link.style.color = '';                            // Restaura a cor do texto
        link.style.padding = '';                          // Restaura o padding
        link.style.borderRadius = '';                     // Restaura a borda
        link.style.fontSize = '';                         // Restaura o tamanho da fonte
    });
});
