# Leucine OS Frontend

## Overview
Frontend implementation for the Leucine OS Manufacturing Execution System (MES). This modern web application provides an intuitive interface for pharmaceutical manufacturing management.

## Project Structure
```
frontend/
├── public/
│   └── assets/
│       ├── images/
│       ├── icons/
│       └── logos/
└── src/
    ├── components/
    │   ├── layout/
    │   │   ├── Layout.jsx
    │   │   ├── Sidebar.jsx
    │   │   └── Topbar.jsx
    │   ├── DashboardCard.jsx
    │   └── DashboardGrid.jsx
    ├── pages/
    │   ├── landing/
    │   ├── Dashboard.jsx
    │   └── aps/
    │       └── index.jsx
    ├── services/
    ├── utils/
    └── styles/
```

## Technology Stack
- React 18 for UI components
- TailwindCSS for styling
- HeadlessUI for accessible components
- React Router for navigation
- Heroicons for iconography
- Vite for development and building

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation
1. Clone the repository
2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development
Run the development server:
```bash
npm run dev
```
The application will be available at http://localhost:5175

### Building for Production
Build the application:
```bash
npm run build
```

## Features
- Modern React-based architecture
- Responsive layout with sidebar navigation
- Dashboard with module cards and metrics
- Advanced Planning & Scheduling (APS) module with:
  - Real-time metrics display
  - Planning & Scheduling overview
  - Optimization metrics
  - Execution tracking
- Performance optimized
- Accessibility compliant

## Current Status
- Modern React architecture implemented
- Dashboard with navigation to modules
- APS module with metrics and KPIs
- Responsive layout with sidebar and topbar
- Development environment configured

## Next Steps
- Implement remaining modules:
  - Real-Time Task Execution
  - Quality Management
  - Maintenance Management
  - Performance Metrics
  - Operator Empowerment
  - Traceability
  - Collaboration
- Add authentication
- Connect with backend API
- Implement testing
