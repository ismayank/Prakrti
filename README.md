# Prakrti - Waste Management System

A comprehensive waste management platform that helps users schedule pickups, track waste collection, and promote environmental sustainability through efficient recycling and waste disposal services.

## 🌟 Features

### User Management
- **User Registration & Authentication**: Secure signup and login system
- **Profile Management**: Personal dashboard with user information
- **Role-based Access**: Different interfaces for users and administrators

### Waste Management
- **Category-based Classification**: 
  - 🏠 Domestic waste
  - 🏭 Industrial waste  
  - 🌾 Agricultural waste
  - 🏢 Commercial waste
  - 🏥 Healthcare waste
- **Pickup Scheduling**: Easy waste pickup request system
- **Real-time Tracking**: Monitor pickup status and delivery progress
- **Order Management**: Complete waste collection lifecycle tracking

### User Interface
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, intuitive interface with smooth animations
- **Interactive Dashboard**: Central hub for all waste management activities

## 🖼️ Screenshots

### How to Add Screenshots

To add screenshots to this README:

1. **Start the application:**
   ```bash
   # Terminal 1: Start backend
   cd backend && npm start
   
   # Terminal 2: Start frontend  
   cd frontend && npm start
   ```

2. **Navigate to each page and capture screenshots:**
   - Home Page: `http://localhost:3000/`
   - Login: `http://localhost:3000/Login`
   - Signup: `http://localhost:3000/Signup`
   - Dashboard: `http://localhost:3000/Dash` (after login)
   - Categories: `http://localhost:3000/Cate`
   - Pickup: `http://localhost:3000/Pickup`
   - Tracking: `http://localhost:3000/Track`

3. **Save screenshots in the screenshots/ directory:**
   - `screenshots/home.png` - Landing page
   - `screenshots/login.png` - Login interface
   - `screenshots/signup.png` - Registration form
   - `screenshots/dashboard.png` - User dashboard
   - `screenshots/categories.png` - Waste categories
   - `screenshots/pickup.png` - Pickup request form
   - `screenshots/tracking.png` - Order tracking

### Screenshot Placeholders

Once screenshots are captured, they will appear here:

### Home Page
![Home Page](screenshots/home.png)
*Landing page with navigation to all major features*

![Prakrti Home Page](<image_url>)
*Landing page with navigation to all major features*

### User Authentication
![Signup Page](screenshots/signup.png)
*Easy registration process with form validation*

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Prakrti
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install frontend dependencies
   cd frontend
   npm install
   
   # Install backend dependencies
   cd ../backend
   npm install
   ```

3. **Environment Setup**
   ```bash
   # Backend environment
   cd backend
   cp .env.example .env
   # Edit .env with your configuration
   
   # Frontend environment
   cd ../frontend
   cp .env.example .env
   # Edit .env with API endpoints
   ```

4. **Database Setup**
   ```bash
   cd backend
   npm run init-db
   ```

### Running the Application

1. **Start Backend Server**
   ```bash
   cd backend
   npm start
   # Backend runs on http://localhost:5000
   ```

2. **Start Frontend Application**
   ```bash
   cd frontend
   npm start
   # Frontend runs on http://localhost:3000
   ```

## 📁 Project Structure

```
Prakrti/
├── backend/                 # Node.js/Express backend
│   ├── server.js            # Main server file
│   ├── package.json          # Backend dependencies
│   └── prakrti.db          # SQLite database
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── containers/      # Page components
│   │   ├── css/           # Stylesheets
│   │   └── services/       # API services
│   └── public/            # Static assets
├── php/                   # PHP components (if any)
└── README.md              # This file
```

## 🔧 Technology Stack

### Frontend
- **React 18**: Modern JavaScript library for user interfaces
- **React Router**: Client-side routing
- **CSS3**: Custom styling with responsive design
- **Font Awesome**: Icon library
- **Google Fonts**: Typography (Mali font)

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web framework
- **SQLite**: Lightweight database
- **JWT**: Authentication tokens
- **bcryptjs**: Password hashing
- **CORS**: Cross-origin resource sharing

## 🔐 Security Features

- **Password Encryption**: Bcrypt hashing for secure password storage
- **JWT Authentication**: Secure token-based authentication
- **Input Validation**: Client and server-side validation
- **CORS Protection**: Configured cross-origin policies
- **Rate Limiting**: API request throttling

## 🌍 Environmental Impact

Prakrti contributes to environmental sustainability by:
- **Reducing Landfill Waste**: Efficient recycling and waste separation
- **Promoting Recycling**: User-friendly recycling interfaces
- **Tracking Impact**: Monitor environmental contribution
- **Educational Content**: Information about proper waste disposal

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop** (1200px+): Full-featured experience
- **Tablet** (768px-1024px): Optimized layout
- **Mobile** (≤768px): Touch-friendly interface

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/user/profile` - Get user profile

### Waste Management Endpoints
- `GET /api/categories` - Get waste categories
- `POST /api/pickup` - Create pickup request
- `GET /api/pickup/requests` - Get user pickup requests
- `PUT /api/pickup/:id` - Update pickup status

## 🐛 Troubleshooting

### Common Issues

1. **Port Conflicts**
   - Ensure ports 3000 (frontend) and 5000 (backend) are available
   - Use `lsof -ti:3000` to check port usage

2. **Database Connection**
   - Verify SQLite database permissions
   - Check database file path in .env

3. **CORS Errors**
   - Verify frontend URL in backend CORS configuration
   - Check API endpoints in frontend .env

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and inquiries:
- Create an issue in the GitHub repository
- Check the troubleshooting section above
- Review API documentation for endpoint details

---

**Prakrti** - Making waste management efficient and sustainable! 🌱♻️
