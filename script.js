
    let currentSlide = 0;
    let slides = document.querySelectorAll('.project-card');

    function showSlide(index) {
        slides = document.querySelectorAll('.project-card'); // Atualiza os slides após cada alteração
        if (slides.length === 0 || index < 0 || index >= slides.length) {
            return; // Verifica se não há slides ou índice inválido
        }
        // Oculta todos os slides
        slides.forEach(slide => {
            slide.style.display = 'none';
        });
        // Exibe o slide desejado
        slides[index].style.display = 'block';
    }

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0; // Retorna ao primeiro slide se atingir o último
        }
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1; // Vai para o último slide se estiver no primeiro
        }
        showSlide(currentSlide);
    }

    // Exibe o primeiro slide ao carregar a página
    showSlide(currentSlide);

  
       
       
    function downloadCV() {
        const cvUrl = 'curriculo-bruna.pdf';
        const fileName = 'Curriculo_Bruna_Borges.pdf'; // Nome do arquivo a ser baixado

        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = fileName;
        link.click();
    }
    


    document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    // Envia uma requisição fetch para o Formspree
    fetch(this.action, {
        method: 'POST',
        body: new FormData(this),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            return response.json(); // Converte a resposta para JSON
        } else {
            throw new Error('Erro ao enviar o formulário.');
        }
    })
    .then(data => {
        // Limpa os campos do formulário após o envio bem-sucedido (opcional)
        this.reset();

        // Exibe uma mensagem de sucesso ao usuário
        alert('Mensagem enviada com sucesso!');

        // Você pode adicionar outras ações aqui, como redirecionar o usuário
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao enviar mensagem. Por favor, tente novamente mais tarde.');
    });
});
