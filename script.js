// Show loading spinner
const loadingSpinner = document.querySelector('.loading-spinner');

// Simulate loading delay
setTimeout(() => {
  loadingSpinner.style.display = 'none';
}, 1000);

// Theme toggle with smooth rotation
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  themeToggle.style.transform = document.body.classList.contains('light-theme') 
    ? 'rotate(360deg)' 
    : 'rotate(0deg)';
  themeToggle.innerHTML = document.body.classList.contains('light-theme')
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});

// Back to top button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.classList.toggle('show', window.scrollY > 500);
});

backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Search and filter functionality
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
let activeFilter = 'all';

function filterArticles() {
  const searchTerm = searchInput.value.toLowerCase();
  
  document.querySelectorAll('.blog-card').forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    const category = card.querySelector('.category').textContent;
    const matchesSearch = title.includes(searchTerm);
    const matchesFilter = activeFilter === 'all' || category === activeFilter;
    
    card.style.display = matchesSearch && matchesFilter ? 'block' : 'none';
  });
}

searchInput.addEventListener('input', filterArticles);

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    filterArticles();
  });
});

// Enhanced mobile menu
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu on resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove('active');
  }
});

// 3D hover effect for cards
document.querySelectorAll('.blog-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = (x - centerX) / 25;
    const rotateX = (y - centerY) / -25;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
  });
});

// Initial filter button activation
document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');