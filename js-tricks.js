// 🎭 Theme Switcher
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

// Add Dark Theme Styles
const style = document.createElement('style');
style.innerHTML = `
    .dark-theme {
        background-color: #1e1e1e;
        color: #d7ff2f;
    }
    .dark-theme .blog-post {
        background-color: #444;
    }
    .dark-theme #theme-toggle {
        background: #d7ff2f;
        color: #000;
    }
`;
document.head.appendChild(style);

// 🖱️ Smooth Scroll
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// 🎲 Random Quote Generator
const quotes = [
    "Code is like humor. When you have to explain it, it’s bad.",
    "Make it work, make it right, make it fast.",
    "First, solve the problem. Then, write the code.",
    "JavaScript is eating the world."
];
const quoteBtn = document.getElementById('quote-btn');
const quoteDisplay = document.getElementById('quote-display');

quoteBtn.addEventListener('click', () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteDisplay.textContent = randomQuote;
});

// 📊 Progress Bar
const progressBar = document.getElementById('progress-bar');
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollTop / docHeight) * 100;
    progressBar.style.width = `${scrollPercentage}%`;
});
