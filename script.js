let temporizadorID;
let temporizadorEmAndamento = false; // Variável para controlar se um temporizador está em andamento

// Função para atualizar o temporizador
function atualizarTemporizador(temporizadorID, horaTerminoData) {
    const agora = new Date();
    const diferenca = horaTerminoData - agora;

    // Verificar se o tempo acabou
    if (diferenca <= 0) {
        clearInterval(temporizadorID); // Limpar o temporizador específico
        document.getElementById('contador').innerText = "Tempo encerrado!";
        temporizadorEmAndamento = false;
        return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    // Exibir o temporizador
    document.getElementById('contador').innerText = `${dias}d ${horas.toString().padStart(2, '0')}h ${minutos.toString().padStart(2, '0')}m ${segundos.toString().padStart(2, '0')}s`;
}

// Função para iniciar um temporizador
function iniciarTemporizador(botaoID) {
    // Verificar se já há um temporizador em andamento
    if (temporizadorEmAndamento) {
        return;
    }

    temporizadorEmAndamento = true;

    // Pegar a hora de término do input
    const horaTerminoInput = document.getElementById('hora-termino').value;
    const horaTerminoData = new Date(horaTerminoInput);

    // Chamar a função de atualizar temporizador a cada segundo
    temporizadorID = setInterval(() => atualizarTemporizador(temporizadorID, horaTerminoData), 1000);
}

// Função para parar um temporizador
function pararTemporizador() {
    clearInterval(temporizadorID); // Limpar o temporizador em andamento
    document.getElementById('contador').innerText = "Temporizador parado";
    temporizadorEmAndamento = false;
}

// Ouvinte de evento para cada botão de iniciar temporizador
document.getElementById('iniciar-temporizador-alura').addEventListener('click', () => iniciarTemporizador('iniciar-temporizador-alura'));
document.getElementById('iniciar-temporizador-javascript').addEventListener('click', () => iniciarTemporizador('iniciar-temporizador-javascript'));
document.getElementById('iniciar-temporizador-portfolio').addEventListener('click', () => iniciarTemporizador('iniciar-temporizador-portfolio'));
document.getElementById('iniciar-temporizador-curriculo').addEventListener('click', () => iniciarTemporizador('iniciar-temporizador-curriculo'));

// Ouvinte de evento para o botão de parar temporizador
document.getElementById('parar-temporizador').addEventListener('click', pararTemporizador);
