# Parsons Venues

This project is a simple venue management system built with a **SilverStripe CMS backend** and a **React frontend**.

---

## Getting Started

### Prerequisites

- PHP 8.3
- Composer
- MySQL
- Node.js & npm/yarn

Make sure you have the above tools installed and configured on your machine.

---

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/parsons-venues.git
   ```
   
2. **Set Up the backend**:
   ```bash
   cd parsons-venues
   cd backend
   ```
   ```bash
   composter install
   ```
   ```bash
   cp .env.example .env
   ```
   Update .env with your database credentials and other settings.
   
3. **Set Up the frontend**:
   - In a new terminal:
   ```bash
   cd parsons-venues
   cd frontend
   ```
   Install dependencies:
   ```bash
   npm install
   ```

---

## Backend Setup

### Running the Backend

   1. **Run the development server for SilverStripe**:
      ```bash
      php -S localhost:8000 -t public
      ```
   2. **Access the CMS at**:
      ```bash
      http://localhost:8000/admin
      ```

         ---

   ## Frontend Setup

   ### Running the Frontend

   1. **Start the React development server**:
      ```bash
      npm start
      ```
   2. **Access the frontend at**:
      ```bash
      http://localhost:3000
      ```
