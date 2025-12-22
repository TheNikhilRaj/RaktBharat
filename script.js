// Smooth scrolling for navigation links
document.querySelectorAll(".nav-menu a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const targetId = this.getAttribute("href")
    const targetSection = document.querySelector(targetId)

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }

    // Close mobile nav after selecting a link
    const navMenu = document.querySelector(".nav-menu")
    const toggleBtn = document.querySelector(".menu-toggle")
    if (navMenu && toggleBtn && navMenu.classList.contains("open")) {
      navMenu.classList.remove("open")
      toggleBtn.setAttribute("aria-expanded", "false")
    }
  })
})

// Contact form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault()

  const formData = new FormData(this)
  const name = this.querySelector('input[type="text"]').value
  const email = this.querySelector('input[type="email"]').value
  const message = this.querySelector("textarea").value

  // Here you would typically send this data to a server
  console.log("Form submitted:", { name, email, message })

  // Show success message
  alert("Thank you for your message! We will get back to you soon.")

  // Reset form
  this.reset()
})

// Add active state to navigation based on scroll position
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-menu a")

  let current = ""

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight

    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
})

// Button click handlers
document.querySelectorAll(".btn-donate, .donate-button").forEach((button) => {
  button.addEventListener("click", () => {
    alert("Donation functionality coming soon! Thank you for your interest in saving lives.")
  })
})

const signInBtn = document.querySelector(".btn-signin")
if (signInBtn) {
  signInBtn.addEventListener("click", () => {
    alert("Sign in functionality coming soon!")
  })
}

const ctaBtn = document.querySelector(".cta-button")
if (ctaBtn) {
  ctaBtn.addEventListener("click", () => {
    const contact = document.querySelector("#contact")
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" })
    }
  })
}

// Mobile navigation toggle
const toggleBtn = document.querySelector(".menu-toggle")
const navMenu = document.querySelector(".nav-menu")
if (toggleBtn && navMenu) {
  toggleBtn.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open")
    toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false")
  })

  // Close on Escape key
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu.classList.contains("open")) {
      navMenu.classList.remove("open")
      toggleBtn.setAttribute("aria-expanded", "false")
    }
  })
}

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Apply fade-in to sections
document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = "0"
  section.style.transform = "translateY(20px)"
  section.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(section)
})
