# Leucine OS - System Overview

## Project Structure

The project follows a modern web application architecture with separate frontend and backend components:

### Frontend Architecture
- `/frontend`
  - `/public` - Static assets
    - `/assets`
      - `/images` - Image resources
      - `/icons` - Icon resources
      - `/logos` - Logo resources
  - `/src`
    - `/pages`
      - `/landing` - Landing page implementation
      - `/dashboard` - Main dashboard view
      - `/aps` - Advanced Planning & Scheduling module
    - `/components`
      - `/layout` - Layout components (Sidebar, Topbar)
      - `/DashboardCard.jsx` - Reusable card component
      - `/DashboardGrid.jsx` - Grid layout for dashboard
    - `/services` - API services
    - `/utils` - Utility functions
    - `/store` - State management
    - `/styles` - Global styles

### Backend Architecture
- `/backend`
  - `/src`
    - `/modules` - Core business logic modules
    - `/common` - Shared utilities and services
    - `/config` - Application configuration
    - `/database` - Database models and migrations
    - `/api` - API endpoints and controllers
  - `/tests` - Test suites

## Technology Stack

### Frontend
- React for UI components
- TailwindCSS for styling
- HeadlessUI for accessible components
- React Router for navigation
- Vite for build and development
- Heroicons for iconography

### Development Tools
- Node.js and NPM for package management
- Git for version control
- Development server with hot reload

## Current Implementation Status

### Completed
- Basic project structure setup
- Landing page implementation
- Modern React-based dashboard with:
  - Responsive layout with sidebar and topbar
  - Module cards with metrics
  - Navigation between modules
- Advanced Planning & Scheduling (APS) module with:
  - Real-time metrics and KPIs
  - Planning & Scheduling overview
  - Optimization metrics
  - Execution tracking
- Development environment configuration
  - Package.json setup
  - Git ignore rules
  - Build system setup with Vite
- Routing system implementation
  - React Router setup
  - Navigation between modules
  - Layout persistence

### In Progress
- Individual module implementations:
  - Real-Time Task Execution
  - Quality Management
  - Maintenance Management
  - Performance Metrics
  - Operator Empowerment
  - Traceability
  - Collaboration
- Authentication system implementation
- Backend API development

### Planned
- Database schema design
- Deployment configuration
- Integration testing
- User acceptance testing

## Documentation Structure
- `/docs`
  - `/architecture`
    - `system-overview.md` - This file
    - `frontend-setup.md` - Frontend setup details
    - `routing-and-navigation.md` - Routing implementation
  - `/prd` - Product requirement documents
