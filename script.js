// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  themeToggle.innerHTML = document.body.classList.contains('light-theme')
    ? '<i class="fas fa-moon"></i>'
    : '<i class="fas fa-sun"></i>';
});

// Article data array
const articles = [
  {
    title: "The Rise of Quantum Computing",
    category: "AI",
    date: "March 15, 2024",
    content: "Exploring how quantum computing is revolutionizing machine learning algorithms...",
    image: "https://c4.wallpaperflare.com/wallpaper/967/867/776/abstract-brain-science-artwork-wallpaper-preview.jpg"
  },
  {
    title: "Cybersecurity in 2024: New Threats",
    category: "Security",
    date: "March 14, 2024",
    content: "Understanding the latest cybersecurity threats and defense mechanisms...",
    image: "https://c4.wallpaperflare.com/wallpaper/114/1008/41/one-piece-monkey-d-luffy-hd-wallpaper-preview.jpg"
  },
  {
    title: "Neural Interface Breakthrough",
    category: "Tech",
    date: "March 13, 2024",
    content: "New developments in brain-computer interface technology...",
    image: "https://c4.wallpaperflare.com/wallpaper/403/855/787/sword-blood-fantasy-armor-wallpaper-preview.jpg"
  },
  {
    title: "The Future of Autonomous Vehicles",
    category: "AI",
    date: "March 12, 2024",
    content: "How AI is transforming transportation systems worldwide...",
    image: "https://picsum.photos/seed/autonomous/400/300"
  },
  {
    title: "Blockchain Beyond Cryptocurrency",
    category: "Tech",
    date: "March 11, 2024",
    content: "Innovative uses of blockchain technology in various industries...",
    image: "https://picsum.photos/seed/blockchain/400/300"
  },
  {
    title: "Ethical Hacking: White Hat Strategies",
    category: "Security",
    date: "March 10, 2024",
    content: "Essential techniques for modern ethical hackers...",
    image: "https://c4.wallpaperflare.com/wallpaper/403/855/787/sword-blood-fantasy-armor-wallpaper-preview.jpg"
  },
  {
    title: "AI in Healthcare Diagnostics",
    category: "AI",
    date: "March 9, 2024",
    content: "Revolutionizing medical diagnosis through machine learning...",
    image: "https://picsum.photos/seed/healthcare/400/300"
  },
  {
    title: "SpaceX Mars Colonization Plan",
    category: "Tech",
    date: "March 8, 2024",
    content: "Latest updates on human colonization of Mars...",
    image: "https://picsum.photos/seed/mars/400/300"
  },
  {
    title: "Zero Trust Security Models",
    category: "Security",
    date: "March 7, 2024",
    content: "Implementing zero trust architecture in modern networks...",
    image: "https://picsum.photos/seed/zerotrust/400/300"
  },
  {
    title: "The Metaverse Economy",
    category: "Tech",
    date: "March 6, 2024",
    content: "Economic implications of virtual reality ecosystems...",
    image: "https://picsum.photos/seed/metaverse/400/300"
  }
];

// Generate and inject articles into the container
const container = document.getElementById('articles-container');
articles.forEach(article => {
  const slug = article.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]/g, '');
  const card = document.createElement('a');
  card.className = 'blog-card';
  card.href = `/article/${slug}`; // Update with your actual URL pattern
  card.innerHTML = `
    <div class="card-image">
      <img src="${article.image}" alt="${article.title}">
    </div>
    <div class="card-content">
      <div class="meta">
        <span class="category">${article.category}</span>
        <span class="date">${article.date}</span>
      </div>
      <h3>${article.title}</h3>
      <p>${article.content}</p>
      <div class="read-more">
        Read Article
        <i class="fas fa-arrow-right"></i>
      </div>
    </div>
  `;
  container.appendChild(card);
});

// Intersection Observer with a delay for the animation effect
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 150);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.blog-card').forEach((element) => {
  observer.observe(element);
});

// Mobile menu toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});
