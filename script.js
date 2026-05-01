async function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const res = await fetch("/.netlify/functions/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });

  const data = await res.json();

  if (res.status === 200) {
    window.location.href = "home.html";
  } else {
    document.getElementById("message").innerText = data.message;
  }
}


// PAGE NAVIGATION
function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'home.html';
    document.querySelectorAll('.nav-item').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ============================================================
// BURGER MENU — mobile sidebar toggle
// ============================================================
const burger = document.getElementById('burger');
const nav    = document.getElementById('nav');

if (burger && nav) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('show');
    });

    // Close menu when any nav link is clicked
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('show');
        });
    });
}

document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => {
    nav.classList.remove('show');
  });
});

// Set home page as active on load
document.addEventListener('DOMContentLoaded', () => {
    const homePage = document.getElementById('home-page');
    if (homePage) {
        homePage.classList.add('active');
    }
});


// Animate progress bars on page load
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach((bar, index) => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100 * (index + 1));
    });
}


// Handle contact form submission
function handleContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const successMessage = document.getElementById('successMessage');
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;

        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Disable button and show loading state
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';

            // Send to Formspree
            fetch('https://formspree.io/f/mzdkpjgo', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    subject: subject,
                    message: message
                })
            })
            .then(response => {
                if (response.ok) {
                    // Show success message
                    successMessage.classList.add('show');

                    // Reset form
                    contactForm.reset();

                    // Reset button
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalBtnText;

                    // Hide success message after 3 seconds
                    setTimeout(() => {
                        successMessage.classList.remove('show');
                    }, 3000);
                } else {
                    throw new Error('Form submission failed');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error sending your message. Please try again.');
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            });
        });
    }
}

// Smooth scroll handling
document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (link && link !== e.target) {
        e.preventDefault();
        const navItem = link.closest('.nav-item');
        if (navItem) {
            navItem.click();
        }
    }
});

// Initialize on page load IMG CERT full screen load
document.addEventListener('DOMContentLoaded', function() {
    setActiveNav();
    animateProgressBars();
    handleContactForm();
});

function openImage(img){
    var modal = document.getElementById("imgModal");
    var modalImg = document.getElementById("modalImg");

    modal.style.display = "block";
    modalImg.src = img.src;
}

function closeImage(){
    document.getElementById("imgModal").style.display = "none";
}

/* CLOSE WITH ESC KEY */

document.addEventListener("keydown", function(event){
    if(event.key === "Escape"){
        closeImage();
    }
});

console.log('Portfolio sidebar loaded successfully!');