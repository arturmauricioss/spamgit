// script.js

document.addEventListener('DOMContentLoaded', () => {
    const aside = document.querySelector('aside');
    const main = document.querySelector('main');
    let startX, startY;

    // Função para abrir o aside
    function openAside() {
        aside.classList.add('open');
        main.style.marginLeft = '200px'; // Ajusta a margem do main quando o aside está aberto
    }

    // Função para fechar o aside
    function closeAside() {
        aside.classList.remove('open');
        main.style.marginLeft = '0'; // Remove a margem do main quando o aside está fechado
    }

    // Detecta toques e deslizes
    aside.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });

    aside.addEventListener('touchend', (e) => {
        let endX = e.changedTouches[0].clientX;
        let endY = e.changedTouches[0].clientY;
        let deltaX = endX - startX;
        let deltaY = endY - startY;

        if (Math.abs(deltaX) > Math.abs(deltaY)) { // Verifica se o movimento é mais horizontal
            if (deltaX > 50) {
                // Desliza da esquerda para a direita
                openAside();
            } else if (deltaX < -50) {
                // Desliza da direita para a esquerda
                closeAside();
            }
        }
    });

    // Abre o menu ao clicar no botão de menu
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            openAside();
        });
    });

    // Fecha o menu quando clica fora do aside
    document.addEventListener('click', (e) => {
        if (!aside.contains(e.target) && !document.querySelector('nav').contains(e.target)) {
            closeAside();
        }
    });
});
const contentElementsHTML = `
  <p>
  b------<b>Bold text</b><br>
  strong-<strong>Important Text</strong><br>
  i------<i>Italic text</i><br>
  em-----<em>Emphasized text</em><br>
  mark---<mark>Marked text</mark><br>
  small--<small>Smaller text</small><br>
  del----<del>Deleted text</del><br>
  ins----<ins>Inserted text</ins><br>
  sub----<sub>Subscript text</sub><br>
  sup----<sup>Superscript text</sup>
  </p>
`;

const contentCitacoesHTML = `
bl
<blockquote cite="http://www.worldwildlife.org/who/index.html">
For 60 years, WWF has worked to help people and nature thrive. As the world's leading conservation organization, WWF works in nearly 100 countries. At every level, we collaborate with people around the world to develop and deliver innovative solutions that protect communities, wildlife, and the places in which they live.
</blockquote>
<p>WWF's goal is to: <q>Build a future where people live in harmony with nature.</q></p>
<p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>
<address>
Written by John Doe.<br>
Visit us at:<br>
Example.com<br>
Box 564, Disneyland<br>
USA
</address>
<p><cite>The Scream</cite> by Edvard Munch. Painted in 1893.</p>
<bdo dir="rtl">This text will be written from right to left</bdo>
`;

const htmlContentTopic3 = `
  
`;

const content = {
    web: {
        "Tudo": [
            { topic: "Elementos", content: contentElementsHTML },
            { topic: "Citações", content: contentCitacoesHTML },
            { topic: "Topic3", content: htmlContentTopic3 }
        ],
        Elements: [{ topic: "Elementos", content:contentElementsHTML }],
        "Citações": [{ topic: "Citações", content: contentCitacoesHTML }],
        Topic3: [{ topic: "Topic3", content: htmlContentTopic3 }]
    },
    thema2: {
        "Tudo": [
            { topic: "Gramática", content: "Conteúdo de Gramática..." },
            { topic: "Vocabulário", content: "Conteúdo de Vocabulário..." },
            { topic: "Compreensão", content: "Conteúdo de Compreensão..." }
        ],
        Gramática: [{ topic: "Gramática", content: "Conteúdo de Gramática..." }],
        Vocabulário: [{ topic: "Vocabulário", content: "Conteúdo de Vocabulário..." }],
        Compreensão: [{ topic: "Compreensão", content: "Conteúdo de Compreensão..." }]
    },
    thema3: {
        "Tudo": [
            { topic: "Sintaxe", content: "Conteúdo de Sintaxe..." },
            { topic: "Funções", content: "Conteúdo de Funções..." },
            { topic: "Objetos", content: "Conteúdo de Objetos..." }
        ],
        Sintaxe: [{ topic: "Sintaxe", content: "Conteúdo de Sintaxe..." }],
        Funções: [{ topic: "Funções", content: "Conteúdo de Funções..." }],
        Objetos: [{ topic: "Objetos", content: "Conteúdo de Objetos..." }]
    },
    thema4: {
        "Tudo": [
            { topic: "Circuitos", content: "Conteúdo de Circuitos..." },
            { topic: "Componentes", content: "Conteúdo de Componentes..." },
            { topic: "Sistemas", content: "Conteúdo de Sistemas..." }
        ],
        Circuitos: [{ topic: "Circuitos", content: "Conteúdo de Circuitos..." }],
        Componentes: [{ topic: "Componentes", content: "Conteúdo de Componentes..." }],
        Sistemas: [{ topic: "Sistemas", content: "Conteúdo de Sistemas..." }]
    }
};

function showContent(subject) {
    const topics = document.getElementById('topics');
    const contentSection = document.getElementById('content');
    const subjectContent = content[subject];
    
    // Limpar conteúdo anterior
    topics.innerHTML = '';
    contentSection.innerHTML = '';

    // Criar e adicionar links para tópicos
    for (let topic in subjectContent) {
        let button = document.createElement('button');
        button.textContent = topic;
        button.onclick = () => loadTopic(subject, topic);
        topics.appendChild(button);
    }

    // Carregar "Tudo" por padrão, se disponível
    if (subjectContent["Tudo"]) {
        loadTopic(subject, "Tudo");
    }
}

function loadTopic(subject, topic) {
    const contentSection = document.getElementById('content');
    const topicContent = content[subject][topic];
    
    // Limpar conteúdo anterior
    contentSection.innerHTML = '';

    if (Array.isArray(topicContent)) {
        topicContent.forEach(item => {
            let article = document.createElement('article');
            let heading = document.createElement('h2');
            heading.textContent = item.topic;

            // Usar innerHTML para renderizar o conteúdo com estilização
            let paragraph = document.createElement('div');
            paragraph.innerHTML = item.content;

            article.appendChild(heading);
            article.appendChild(paragraph);
            contentSection.appendChild(article);
        });
    }
}
