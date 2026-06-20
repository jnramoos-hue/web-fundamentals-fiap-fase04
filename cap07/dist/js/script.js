document.addEventListener('DOMContentLoaded', () => {
    injectBaseStyles();

    initMenuMobile();
    initDarkMode();
    initLogoTyping();
    initScrollReveal();
    initCategoryFilter();
    initContactFormValidation();
    initReadingProgressAndBackToTop();
    initSidebarWidgets(); // Conversor + Juros (aparece se existir .sidebar)
});

/* =========================================================
   Helpers
========================================================= */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function isMobile() {
    return window.innerWidth <= 768;
}

function clamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
}

/* =========================================================
   0) Estilos base injetados (evita depender de CSS extra)
========================================================= */
function injectBaseStyles() {
    // Evita duplicar
    if ($('#__finannews_base_styles')) return;

    const style = document.createElement('style');
    style.id = '__finannews_base_styles';
    style.textContent = `
    /* Scroll reveal */
    .fn-reveal {
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.6s ease-out;
    }
    .fn-reveal.fn-reveal--show {
      opacity: 1;
      transform: translateY(0);
    }

    /* Dark mode via classe (mais limpo do que sair setando inline em tudo) */
    body.fn-dark {
      background: #121212 !important;
      color: #e0e0e0 !important;
    }
    body.fn-dark .linha,
    body.fn-dark .header,
    body.fn-dark .conteudo-extra,
    body.fn-dark .sidebar,
    body.fn-dark .card-post,
    body.fn-dark form,
    body.fn-dark .footer {
      background: #1e1e1e !important;
      color: #ffffff !important;
      border-color: #333 !important;
    }
    body.fn-dark a,
    body.fn-dark h1,
    body.fn-dark h2,
    body.fn-dark h3,
    body.fn-dark h4,
    body.fn-dark p,
    body.fn-dark label,
    body.fn-dark span {
      color: #ffffff !important;
    }
    body.fn-dark .botao {
      color: #fff !important;
    }

    /* Botões flutuantes */
    .fn-fab {
      position: fixed;
      right: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 9999;
      box-shadow: 0 4px 10px rgba(0,0,0,0.3);
      user-select: none;
    }
    .fn-fab--dark {
      bottom: 20px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: #1f3c58;
      color: white;
      font-size: 24px;
      transition: 0.2s;
    }
    .fn-fab--top {
      bottom: 80px;
      width: 40px;
      height: 40px;
      border-radius: 6px;
      background: #315e8a;
      color: white;
      font-weight: bold;
      display: none;
    }

    /* Barra de progresso */
    #fn-progress {
      position: fixed;
      top: 0;
      left: 0;
      width: 0%;
      height: 4px;
      background: #315e8a;
      z-index: 10000;
      transition: width 0.1s;
    }

    /* Botão menu mobile */
    .btn-mobile {
      width: 100%;
      background: #315e8a;
      color: #fff;
      padding: 12px;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      margin-bottom: 15px;
      cursor: pointer;
      font-family: "Roboto", sans-serif;
    }
  `;
    document.head.appendChild(style);
}

/* =========================================================
   1) MENU MOBILE (SEM DUPLICAR E FUNCIONA NO RESIZE)
========================================================= */
function initMenuMobile() {
    const nav = $('nav');
    const menuUl = $('.menu');

    if (!nav || !menuUl) return;

    // Cria botão uma única vez (trava)
    let btn = $('.btn-mobile', nav);
    if (!btn) {
        btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'btn-mobile';
        btn.textContent = '☰ Menu';
        nav.insertBefore(btn, menuUl);

        btn.addEventListener('click', () => {
            const hidden = menuUl.dataset.fnHidden === 'true';
            menuUl.dataset.fnHidden = hidden ? 'false' : 'true';
            menuUl.style.display = hidden ? 'block' : 'none';
        });
    }

    // Ajusta visibilidade conforme tamanho da tela
    const apply = () => {
        if (isMobile()) {
            btn.style.display = 'block';
            // Esconde menu no mobile por padrão (se ainda não definido)
            if (!menuUl.dataset.fnHidden) {
                menuUl.dataset.fnHidden = 'true';
            }
            menuUl.style.display = menuUl.dataset.fnHidden === 'true' ? 'none' : 'block';
        } else {
            btn.style.display = 'none';
            menuUl.style.display = ''; // volta ao CSS padrão
            menuUl.dataset.fnHidden = ''; // limpa estado
        }
    };

    apply();
    window.addEventListener('resize', apply);
}

/* =========================================================
   2) DARK MODE (BOTÃO ÚNICO + SALVA NO LOCALSTORAGE)
========================================================= */
function initDarkMode() {
    // trava: não cria se já existe
    if ($('#fn-dark-btn')) return;

    const btnDark = document.createElement('div');
    btnDark.id = 'fn-dark-btn';
    btnDark.className = 'fn-fab fn-fab--dark';
    btnDark.title = 'Alternar Modo Escuro';
    document.body.appendChild(btnDark);

    const saved = localStorage.getItem('fn-dark') === '1';
    setDark(saved);

    btnDark.addEventListener('click', () => {
        const nowDark = !document.body.classList.contains('fn-dark');
        setDark(nowDark);
        localStorage.setItem('fn-dark', nowDark ? '1' : '0');
    });

    function setDark(on) {
        document.body.classList.toggle('fn-dark', on);
        btnDark.textContent = on ? '☀️' : '🌙';
        btnDark.style.background = on ? '#fff' : '#1f3c58';
        btnDark.style.color = on ? '#333' : '#fff';
    }
}

/* =========================================================
   3) EFEITO DE DIGITAÇÃO NA LOGO (UMA VEZ)
========================================================= */
function initLogoTyping() {
    const logo = $('.logo');
    if (!logo) return;

    // trava: se já foi digitado, não repete
    if (logo.dataset.fnTyped === 'true') return;

    const textoOriginal = logo.textContent.trim();
    if (!textoOriginal) return;

    logo.dataset.fnTyped = 'true';
    logo.textContent = '';

    let i = 0;
    const speed = 90;

    (function digitar() {
        if (i < textoOriginal.length) {
            logo.textContent += textoOriginal.charAt(i);
            i++;
            setTimeout(digitar, speed);
        }
    })();
}

/* =========================================================
   4) SCROLL REVEAL (CARDS / NOTÍCIAS / SIDEBAR)
========================================================= */
function initScrollReveal() {
    const elementos = $$('.card-post, .noticias li, .coluna.sidebar');
    if (!elementos.length) return;

    elementos.forEach(el => el.classList.add('fn-reveal'));

    const obs = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fn-reveal--show');
                    obs.unobserve(entry.target); // anima uma vez
                }
            });
        },
        { threshold: 0.1 }
    );

    elementos.forEach(el => obs.observe(el));
}

/* =========================================================
   5) FILTRO DE CATEGORIAS (PÁGINA CONTEÚDOS)
   - Procura links .categorias-sidebar a
   - Filtra títulos .col8 h2 e elementos logo abaixo
========================================================= */
function initCategoryFilter() {
    const links = $$('.categorias-sidebar a');
    const titulos = $$('.col8 h2');

    if (!links.length || !titulos.length) return;

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const termo = link.textContent.trim().toLowerCase();

            titulos.forEach(h2 => {
                const p = h2.nextElementSibling;        // parágrafo
                const btn = p ? p.nextElementSibling : null; // botão (se existir)

                const match = h2.textContent.toLowerCase().includes(termo);

                h2.style.display = match ? '' : 'none';
                if (p) p.style.display = match ? '' : 'none';
                if (btn && btn.classList.contains('botao')) btn.style.display = match ? 'inline-block' : 'none';
            });
        });
    });
}

/* =========================================================
   6) VALIDAÇÃO DO FORMULÁRIO (PÁGINA CONTATO)
========================================================= */
function initContactFormValidation() {
    const form = $('.contato form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        let erro = false;

        const nome = $('#nome');
        const email = $('#email');
        const mensagem = $('#mensagem');

        const campos = [nome, email, mensagem].filter(Boolean);

        // reset visual
        campos.forEach(c => (c.style.border = '1px solid #ddd'));

        // validações
        if (nome && nome.value.trim() === '') {
            nome.style.border = '2px solid #ff4d4d';
            erro = true;
        }

        if (email) {
            const val = email.value.trim();
            // Validação simples: contém @ e .
            if (!val.includes('@') || !val.includes('.')) {
                email.style.border = '2px solid #ff4d4d';
                erro = true;
            }
        }

        if (mensagem && mensagem.value.trim() === '') {
            mensagem.style.border = '2px solid #ff4d4d';
            erro = true;
        }

        if (erro) {
            e.preventDefault();
            alert('Por favor, preencha corretamente os campos destacados em vermelho.');
        } else {
            // Se você não tem backend, isso é só simulação.
            alert('Obrigado! Sua mensagem foi enviada com sucesso (simulação).');
            // Se quiser limpar:
            // form.reset();
            // e.preventDefault();
        }
    });
}

/* =========================================================
   7) BARRA DE PROGRESSO + BOTÃO VOLTAR AO TOPO
========================================================= */
function initReadingProgressAndBackToTop() {
    // trava: não duplica
    if ($('#fn-progress')) return;

    // Barra
    const bar = document.createElement('div');
    bar.id = 'fn-progress';
    document.body.appendChild(bar);

    // Botão topo
    let btnTopo = $('#fn-top-btn');
    if (!btnTopo) {
        btnTopo = document.createElement('div');
        btnTopo.id = 'fn-top-btn';
        btnTopo.className = 'fn-fab fn-fab--top';
        btnTopo.textContent = '↑';
        btnTopo.title = 'Voltar ao topo';
        document.body.appendChild(btnTopo);

        btnTopo.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    const onScroll = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        bar.style.width = clamp(percent, 0, 100) + '%';

        // Mostrar/Esconder botão topo
        btnTopo.style.display = scrollTop > 300 ? 'flex' : 'none';
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

/* =========================================================
   8) WIDGETS DA SIDEBAR (CONVERSOR + JUROS)
========================================================= */
function initSidebarWidgets() {
    const sidebar = $('.sidebar');
    if (!sidebar) return;

    // trava geral (se já criou, não cria de novo)
    if (sidebar.dataset.fnWidgets === 'true') return;
    sidebar.dataset.fnWidgets = 'true';

    createCurrencyConverter(sidebar);
    createCompoundInterestSimulator(sidebar);
}

/* ---------- 8.1 Conversor de moedas ---------- */
function createCurrencyConverter(sidebar) {
    // trava (caso reentre)
    if ($('#fn-conversor')) return;

    const container = document.createElement('div');
    container.id = 'fn-conversor';
    container.style.cssText = 'margin-top: 30px; padding-top: 20px; border-top: 2px dashed #ddd;';

    container.innerHTML = `
    <h3 style="font-size: 1.1rem; color: #1f3c58; margin-bottom: 15px;">Conversor de Moedas</h3>
    <div style="display:flex; flex-direction:column; gap:10px;">
      <input type="number" id="fn-valorReal" placeholder="Valor em Real (R$)"
             style="padding:8px; border:1px solid #ddd; border-radius:4px;" />
      <select id="fn-moedaDestino"
              style="padding:8px; border:1px solid #ddd; border-radius:4px; cursor:pointer;">
        <option value="USD">Dólar (USD)</option>
        <option value="EUR">Euro (EUR)</option>
      </select>
      <button id="fn-btnConverter"
              style="background:#28a745; color:#fff; border:none; padding:10px; border-radius:4px; cursor:pointer; font-weight:bold;">
        Converter Agora
      </button>
      <div id="fn-resultadoMoeda" style="margin-top:10px; font-weight:bold; color:#1f3c58; font-size:0.9rem;"></div>
    </div>
  `;

    sidebar.appendChild(container);

    const valorEl = $('#fn-valorReal');
    const moedaEl = $('#fn-moedaDestino');
    const btn = $('#fn-btnConverter');
    const res = $('#fn-resultadoMoeda');

    btn.addEventListener('click', async () => {
        const valor = parseFloat(valorEl.value);
        const moeda = moedaEl.value;

        if (!valor || valor <= 0) {
            res.textContent = 'Digite um valor válido!';
            return;
        }

        res.textContent = 'Consultando câmbio...';

        try {
            // ✅ URL correta
            const url = `https://economia.awesomeapi.com.br/last/${moeda}-BRL`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            const data = await response.json();
            const chave = `${moeda}BRL`;

            if (!data[chave] || !data[chave].bid) {
                throw new Error('Resposta inesperada da API');
            }

            const cotacao = parseFloat(data[chave].bid);
            const convertido = valor / cotacao;

            res.innerHTML = `
        <span style="color:#1f3c58;">R$ ${valor.toFixed(2)} =</span><br>
        <span style="font-size:1.2rem; color:#28a745;">${moeda} ${convertido.toFixed(2)}</span>
        <div style="margin-top:6px; font-size:0.8rem; opacity:0.9;">
          Cotação: 1 ${moeda} = R$ ${cotacao.toFixed(4)}
        </div>
      `;
        } catch (err) {
            console.error('Erro conversor:', err);
            res.textContent = 'Erro ao buscar cotação. Abra o Console (F12) para detalhes.';
        }
    });
}

/* ---------- 8.2 Simulador de Juros Compostos ---------- */
function createCompoundInterestSimulator(sidebar) {
    if ($('#fn-juros')) return;

    const container = document.createElement('div');
    container.id = 'fn-juros';
    container.style.cssText = 'margin-top: 30px; padding-top: 20px; border-top: 2px dashed #ddd;';

    container.innerHTML = `
    <h3 style="font-size: 1.1rem; color: #1f3c58; margin-bottom: 15px;">Simulador de Juros</h3>
    <div style="display:flex; flex-direction:column; gap:10px;">
      <input type="number" id="fn-capital" placeholder="Valor Inicial (R$)"
             style="padding:8px; border:1px solid #ddd; border-radius:4px;" />
      <input type="number" id="fn-taxa" placeholder="Taxa Mensal (%)"
             style="padding:8px; border:1px solid #ddd; border-radius:4px;" />
      <input type="number" id="fn-tempo" placeholder="Meses"
             style="padding:8px; border:1px solid #ddd; border-radius:4px;" />
      <button id="fn-btnCalcular"
              style="background:#315e8a; color:#fff; border:none; padding:10px; border-radius:4px; cursor:pointer; font-weight:bold;">
        Calcular
      </button>
      <div id="fn-resJuros" style="margin-top:10px; font-weight:bold; color:#1f3c58; font-size:0.9rem;"></div>
    </div>
  `;

    sidebar.appendChild(container);

    const capitalEl = $('#fn-capital');
    const taxaEl = $('#fn-taxa');
    const tempoEl = $('#fn-tempo');
    const btn = $('#fn-btnCalcular');
    const res = $('#fn-resJuros');

    btn.addEventListener('click', () => {
        const P = parseFloat(capitalEl.value);
        const i = parseFloat(taxaEl.value) / 100;
        const n = parseFloat(tempoEl.value);

        if (!P || P <= 0 || !i || i <= 0 || !n || n <= 0) {
            res.textContent = 'Preencha capital, taxa e meses com valores válidos.';
            return;
        }

        const M = P * Math.pow(1 + i, n);
        const juros = M - P;

        res.innerHTML = `
      Total: R$ ${M.toFixed(2)}<br>
      <span style="color:green;">Juros: R$ ${juros.toFixed(2)}</span>
    `;
    });
}