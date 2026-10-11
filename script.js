// --- VERİ MİMARİSİ ---
const quizData = [
    {
        question: "Tarzını tek kelimeyle anlat desek?",
        image: "img/soru1.jpg",
        options: [
            { text: "Sofistike", image: "img/s1-1.jpg", result: "Sueda" },
            { text: "Asi", image: "img/s1-2.jpg", result: "Hilal" },
            { text: "Yumuşak", image: "img/s1-3.jpg", result: "Lidya" },
            { text: "Enerjik", image: "img/s1-4.jpg", result: "Zeynep Sude" },
            { text: "Net", image: "img/s1-5.jpg", result: "Mina" },
            { text: "Farklı", image: "img/s1-6.jpg", result: "Esin" }
        ]
    },
    {
        question: "Seni anlatan bir hayvan?",
        image: "img/soru2.jpg",
        options: [
            { text: "Panter", image: "img/s2-1.jpg", result: "Hilal" },
            { text: "Kuğu", image: "img/s2-2.jpg", result: "Sueda" },
            { text: "Kedi", image: "img/s2-3.jpg", result: "Lidya" },
            { text: "Papağan", image: "img/s2-4.jpg", result: "Zeynep Sude" },
            { text: "Yunus", image: "img/s2-5.jpg", result: "Esin" },
            { text: "Kartal", image: "img/s2-6.jpg", result: "Mina" }
        ]
    },
    {
        question: "Bir günlüğüne sahnede Manifest'e katılsan hangi rolü üstlenirdin?",
        image: "img/soru3.jpg",
        options: [
            { text: "Görsel lider", image: "img/s3-1.jpg", result: "Sueda" },
            { text: "Ana vokal", image: "img/s3-2.jpg", result: "Hilal" },
            { text: "Vokal destek", image: "img/s3-3.jpg", result: "Lidya" },
            { text: "Dans makinesi", image: "img/s3-4.jpg", result: "Zeynep Sude" },
            { text: "Organizasyon", image: "img/s3-5.jpg", result: "Mina" },
            { text: "Stil danışmanı", image: "img/s3-6.jpg", result: "Esin" }
        ]
    },
    {
        question: "En güçlü yönün nedir?",
        image: "img/soru4.jpg",
        options: [
            { text: "Cesaretim", image: "img/s4-1.jpg", result: "Hilal" },
            { text: "Zerafetim", image: "img/s4-2.jpg", result: "Sueda" },
            { text: "Sezgilerim", image: "img/s4-3.jpg", result: "Lidya" },
            { text: "Pozitifliğim", image: "img/s4-4.jpg", result: "Zeynep Sude" },
            { text: "Analitik zekam", image: "img/s4-5.jpg", result: "Mina" },
            { text: "Orijinalliğim", image: "img/s4-6.jpg", result: "Esin" }
        ]
    },
    {
        question: "Kendine bir renk seç bakalım!",
        image: "img/soru5.jpg",
        options: [
            { text: "Mavi", image: "img/s5-1.jpg", result: "Sueda" },
            { text: "Mor", image: "img/s5-2.jpg", result: "Esin" },
            { text: "Kırmızı", image: "img/s5-3.jpg", result: "Hilal" },
            { text: "Sarı", image: "img/s5-4.jpg", result: "Zeynep Sude" },
            { text: "Pembe", image: "img/s5-5.jpg", result: "Lidya" },
            { text: "Yeşil", image: "img/s5-6.jpg", result: "Mina" }
        ]
    },
    {
        question: "Bir klip çekimi olsa sahnende ne olmalı?",
        image: "img/soru6.jpg",
        options: [
            { text: "Aynalı salonlar", image: "img/s6-1.jpg", result: "Sueda" },
            { text: "Sokaklar, grafitiler", image: "img/s6-2.jpg", result: "Hilal" },
            { text: "Gün batımı", image: "img/s6-3.jpg", result: "Lidya" },
            { text: "Neon ışıklar", image: "img/s6-4.jpg", result: "Zeynep Sude" },
            { text: "Minimal stüdyo", image: "img/s6-5.jpg", result: "Mina" },
            { text: "Retro dekorlar", image: "img/s6-6.jpg", result: "Esin" }
        ]
    },
    {
        question: "Manifest'te en çok neyi beğeniyorsun?",
        image: "img/soru7.png", // DİKKAT: Bu görselin uzantısı klasöründe PNG!
        options: [
            { text: "Stil ve uyum", image: "img/s7-1.jpg", result: "Sueda" },
            { text: "Güçlü mesajlar", image: "img/s7-2.jpg", result: "Hilal" },
            { text: "Duygusal tonlar", image: "img/s7-3.jpg", result: "Lidya" },
            { text: "Yüksek enerji", image: "img/s7-4.jpg", result: "Zeynep Sude" },
            { text: "Disiplinli duruş", image: "img/s7-5.jpg", result: "Mina" },
            { text: "Yenilikçilik", image: "img/s7-6.jpg", result: "Esin" }
        ]
    },
    {
        question: "Hangi sosyal medya platformu senlik?",
        image: "img/soru8.jpg",
        options: [
            { text: "Instagram", image: "img/s8-1.jpg", result: "Sueda" },
            { text: "X/Twitter", image: "img/s8-2.jpg", result: "Hilal" },
            { text: "Pinterest", image: "img/s8-3.jpg", result: "Lidya" },
            { text: "TikTok", image: "img/s8-4.jpg", result: "Zeynep Sude" },
            { text: "Spotify", image: "img/s8-5.jpg", result: "Esin" },
            { text: "YouTube", image: "img/s8-6.jpg", result: "Mina" }
        ]
    },
    {
        question: "Şu an ruh halini anlatan bir kelime?",
        image: "img/soru9.jpg",
        options: [
            { text: "Huzurlu", image: "img/s9-1.jpg", result: "Lidya" },
            { text: "Sıkılgan", image: "img/s9-2.jpg", result: "Hilal" },
            { text: "Dalgalı", image: "img/s9-3.jpg", result: "Esin" },
            { text: "Neşeli", image: "img/s9-4.jpg", result: "Zeynep Sude" },
            { text: "Odaklı", image: "img/s9-5.jpg", result: "Mina" },
            { text: "Dağınık", image: "img/s9-6.jpg", result: "Sueda" }
        ]
    },
    {
        question: "Son olarak favori şarkın hangisi?",
        image: "img/soru10.jpg",
        options: [
            // DİKKAT: Şarkı kapaklarının tamamı klasöründe PNG olarak görünüyor.
            { text: "Zamansızdık", image: "img/s10-1.png", result: "Sueda" },
            { text: "Snap", image: "img/s10-2.png", result: "Hilal" },
            { text: "Manifest", image: "img/s10-3.png", result: "Mina" },
            { text: "Yaşanacaksa", image: "img/s10-4.png", result: "Lidya" },
            { text: "Arıyo", image: "img/s10-5.png", result: "Zeynep Sude" },
            { text: "KTS", image: "img/s10-6.png", result: "Esin" }
        ]
    }
];

const resultProfiles = {
    "Sueda": {
        desc: "Zarif, sofistike ve her ortamda görsel bir denge kuran sensin. Kuğu gibi asil bir duruşun var.",
        image: "img/sonuc-sueda.jpeg" // Veya .png ise burayı değiştir
    },
    "Hilal": {
        desc: "Cesur, asi ve sesi gür çıkan bir pantersin! Sahnede veya hayatta öne çıkmayı seviyorsun.",
        image: "img/sonuc-hilal.jpeg"
    },
    "Lidya": {
        desc: "Sezgileri güçlü, duygusal ve ortamı yumuşatan kedi ruhlu birisin.",
        image: "img/sonuc-lidya.jpeg"
    },
    "Zeynep Sude": {
        desc: "Bitmek bilmeyen bir enerjin var! Tıpkı bir dans makinesi gibi ortamı canlandırıyorsun.",
        image: "img/sonuc-zeynep.jpeg"
    },
    "Mina": {
        desc: "Net, disiplinli ve analitik zekaya sahipsin. Kartal gibi her şeyi yukarıdan görüp organize edersin.",
        image: "img/sonuc-mina.jpeg"
    },
    "Esin": {
        desc: "Orijinal, farklı ve her zaman yenilikçi! Alışılmışın dışında düşünüyor, özgürce kendi rotanı çiziyorsun.",
        image: "img/sonuc-esin.jpeg"
    }
};

let currentQuestionIndex = 0;
let scores = { "Sueda": 0, "Hilal": 0, "Lidya": 0, "Zeynep Sude": 0, "Mina": 0, "Esin": 0 };
let historySelections = []; // Geri dönüldüğünde puanı silmek için hafıza

// --- FONKSİYONLAR ---
function switchScreen(hideId, showId) {
    document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
    document.getElementById(showId).classList.add('active');
}

// Başla Butonu
document.getElementById('start-btn').addEventListener('click', () => {
    switchScreen('landing-screen', 'quiz-screen');
    renderQuestion();
});

// Geri Butonu
document.getElementById('back-btn').addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--; // Bir önceki soruya dön
        const lastSelection = historySelections.pop(); // Son seçtiği şıkkı hafızadan çıkar
        scores[lastSelection]--; // O şıkkın puanını sil (Puan şişmesini engeller)
        renderQuestion();
    }
});

function renderQuestion() {
    const currentQ = quizData[currentQuestionIndex];

    // Geri butonunu göster/gizle
    const backBtn = document.getElementById('back-btn');
    if (currentQuestionIndex === 0) {
        backBtn.style.display = 'none'; // İlk soruda geri butonu yok
    } else {
        backBtn.style.display = 'block';
    }

    // Progress ve Soru Metni
    document.getElementById('question-counter').innerText = `Soru ${currentQuestionIndex + 1} / ${quizData.length}`;
    document.getElementById('progress-bar').style.width = `${((currentQuestionIndex) / quizData.length) * 100}%`;
    document.getElementById('question-text').innerText = currentQ.question;
    document.getElementById('question-image').src = currentQ.image;

    // Şıkları Bas
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    currentQ.options.forEach(opt => {
        const optDiv = document.createElement('div');
        optDiv.className = 'option-card';
        optDiv.innerHTML = `
            <img src="${opt.image}" class="option-image" alt="Şık">
            <div class="option-text">${opt.text}</div>
        `;

        optDiv.addEventListener('click', () => {
            historySelections.push(opt.result); // Seçimi hafızaya al
            scores[opt.result]++;
            currentQuestionIndex++;

            if(currentQuestionIndex < quizData.length) {
                renderQuestion();
            } else {
                calculateAndShowResult();
            }
        });
        optionsContainer.appendChild(optDiv);
    });
}
function calculateAndShowResult() {
    switchScreen('quiz-screen', 'loading-overlay');
    document.getElementById('progress-bar').style.width = `100%`;

    let topKarakter = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

    setTimeout(() => {
        switchScreen('loading-overlay', 'result-screen');
        document.getElementById('result-name').innerText = topKarakter;
        document.getElementById('result-desc').innerText = resultProfiles[topKarakter].desc;

        // DİKKAT: Resim artık picsum'dan değil, senin klasöründen (resultProfiles'dan) çekiliyor
        document.getElementById('result-image').src = resultProfiles[topKarakter].image;
    }, 2000);
}