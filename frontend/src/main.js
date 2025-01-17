import './styles/main.css'
import Alpine from 'alpinejs'

// Initialize Alpine.js
window.Alpine = Alpine
Alpine.start()

// Simple router
const router = {
    init() {
        // Get current route
        const path = window.location.pathname
        
        // Route handling
        if (path === '/' || path === '') {
            // Always redirect to landing page as default
            window.location.href = '/landing'
            return
        }
        
        // Handle other routes
        this.loadContent(path)
    },
    
    async loadContent(path) {
        const mainContent = document.getElementById('main-content')
        
        try {
            // Load content based on route
            switch (path) {
                case '/landing':
                    const landingContent = await fetch('/pages/landing/index.html')
                    mainContent.innerHTML = await landingContent.text()
                    break
                    
                case '/login':
                    // Load login page (to be implemented)
                    mainContent.innerHTML = '<h1>Login Page Coming Soon</h1>'
                    break
                    
                case '/signup':
                    // Load signup page (to be implemented)
                    mainContent.innerHTML = '<h1>Signup Page Coming Soon</h1>'
                    break
                    
                case '/dashboard':
                    // Check authentication before showing dashboard
                    if (localStorage.getItem('authenticated') !== 'true') {
                        window.location.href = '/login'
                        return
                    }
                    mainContent.innerHTML = '<h1>Dashboard Coming Soon</h1>'
                    break
                    
                default:
                    // 404 handling
                    mainContent.innerHTML = '<h1>Page Not Found</h1>'
            }
        } catch (error) {
            console.error('Error loading content:', error)
            mainContent.innerHTML = '<h1>Error loading content</h1>'
        }
    }
}

// Initialize router when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    router.init()
})

// Handle navigation without page reload
document.addEventListener('click', (e) => {
    // Find closest anchor tag
    const anchor = e.target.closest('a')
    if (!anchor) return
    
    // Get href attribute
    const href = anchor.getAttribute('href')
    
    // Only handle internal navigation
    if (href && href.startsWith('/')) {
        e.preventDefault()
        window.history.pushState({}, '', href)
        router.loadContent(href)
    }
})
