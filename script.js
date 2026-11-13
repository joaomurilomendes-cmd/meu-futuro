<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cartomante</title>
    <!-- Fontes místicas do Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;800&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
    <!-- Conectando o CSS separado -->
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- Fundo animado controlado pelo JavaScript -->
    <canvas id="particulas"></canvas>

    <!-- Cabeçalho -->
    <header class="cabecalho">
        <div class="bola-cristal" id="bolaCristal" title="Clique para consultar os astros">
            <span>🔮</span>
        </div>
        <h1 class="titulo-principal">Cartomante</h1>
        <p class="subtitulo" id="textoDigitado"></p>
        <button class="btn-mistico" id="btnRevelar">Consultar as Cartas</button>
    </header>

    <!-- Conteúdo Principal com as 3 Seções -->
    <main class="container-cartas">

        <!-- Seção 1: Daqui a 1 ano -->
        <section class="carta" id="secao-1">
            <div class="carta-topo">
                <span class="numero-romano">I</span>
                <span class="icone">🎨</span>
            </div>
            <h2>Daqui a 1 Ano (2027)</h2>
            <p>
                As cartas revelam que <strong>2027</strong> será um ano de grandes conquistas e novos começos. 
                Vou finalizar o <strong>Ensino Médio</strong> com muito orgulho e dedicação, encerrando um ciclo importante 
                para dar o próximo grande passo: ingressar na <strong>faculdade de Arte</strong> e transformar minha 
                criatividade e paixão em profissão.
            </p>
            <div class="carta-rodape">O Início da Jornada</div>
        </section>

        <!-- Seção 2: Daqui a 5 anos -->
        <section class="carta" id="secao-2">
            <div class="carta-topo">
                <span class="numero-romano">II</span>
                <span class="icone">🏍️</span>
            </div>
            <h2>Daqui a 5 Anos</h2>
            <p>
                Nas visões para daqui a <strong>5 anos</strong>, as cartas mostram liberdade, movimento e independência. 
                Com muito foco e esforço nos meus estudos e projetos, vou conquistar a minha própria <strong>moto</strong>, 
                ganhando autonomia para explorar novos caminhos e viver grandes aventuras.
            </p>
            <div class="carta-rodape">Liberdade e Conquista</div>
        </section>

        <!-- Seção 3: Daqui a 10 anos -->
        <section class="carta" id="secao-3">
            <div class="carta-topo">
                <span class="numero-romano">III</span>
                <span class="icone">🚗</span>
            </div>
            <h2>Daqui a 10 Anos</h2>
            <p>
                No horizonte de <strong>10 anos</strong>, o destino aponta para estabilidade, conforto e realização. 
                Já formado e colhendo os frutos da minha carreira na área das artes, terei conquistado o meu <strong>carro</strong>, 
                simbolizando cada vitória alcançada ao longo dessa caminhada.
            </p>
            <div class="carta-rodape">Sucesso e Estabilidade</div>
        </section>

    </main>

    <!-- Rodapé -->
    <footer class="rodape">
        <p>✨ O futuro pertence àqueles que acreditam na beleza de seus sonhos. ✨</p>
    </footer>

    <!-- Conectando o JavaScript separado -->
    <script src="script.js"></script>
</body>
</html>