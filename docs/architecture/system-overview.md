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
      - `/GanttChart.jsx` - Custom-built production schedule visualization using Tailwind CSS
      - `/ResourceUtilization.jsx` - Resource usage monitoring with Recharts
      - `/ScheduleMetrics.jsx` - Key performance indicators display
      - `/ConstraintsPanel.jsx` - Active constraints monitoring
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

## Core Modules

### 1. Advanced Planning and Scheduling (APS)
- Production schedule visualization using Gantt charts
- Interactive timeline with zoom capabilities
- Task details and priority management
- Batch management system with detailed views
- Real-time status updates and progress tracking

### 2. Real-Time Task Execution
- Shift management system with start/end functionality
- Real-time performance metrics dashboard
  - Tasks completion tracking
  - On-time performance monitoring
  - Active issues tracking
  - Operator efficiency metrics
- Task management features:
  - Prioritized task lists
  - Step-by-step instructions
  - Parameter validation
  - Verification checklists
  - Resource attachments (videos, documents, images)
- Real-time monitoring dashboard
  - Machine parameters
  - Process variables
  - Quality metrics
- Issue reporting system
  - Quick action buttons
  - Severity classification
  - Attachment support
  - Status tracking

## System Architecture

### Frontend
- React-based SPA
- TailwindCSS for styling
- Component hierarchy:
  - Layout components
  - Feature-specific components
  - Shared UI components
- State management using React hooks

### Backend (Planned)
- API endpoints for:
  - Schedule management
  - Task tracking
  - Real-time monitoring
  - Issue management
  - Shift management

### Data Flow
- Real-time updates using WebSocket connections
- REST APIs for CRUD operations
- File handling for attachments and resources

## Security and Authentication
- Role-based access control
- Shift-based authentication
- Audit logging for critical operations

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

## Future Enhancements
1. Mobile/tablet optimization
2. Offline support
3. Advanced analytics dashboard
4. Integration with external systems
5. Automated quality control
6. Machine learning for predictive maintenance

## Documentation Structure
- `/docs`
  - `/architecture`
    - `system-overview.md` - This file
    - `frontend-setup.md` - Frontend setup details
    - `routing-and-navigation.md` - Routing implementation
  - `/prd` - Product requirement documents
