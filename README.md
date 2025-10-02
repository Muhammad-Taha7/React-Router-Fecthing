🌐 React Router Website

This is a multi-page React.js application built using React Router DOM. It includes multiple routes (Home, Collections, About, Contact) and also demonstrates API data fetching to display dynamic content.


<img width="1905" height="955" alt="image" src="https://github.com/user-attachments/assets/0cdbc977-6663-46e3-a71d-930530ff889c" />


✨ Features

✅ Multi-Page Routing – Home, Collections, About, Contact
✅ API Data Fetching – Fetch and display data from external API
✅ Responsive Design – Mobile-friendly layout
✅ Error Handling – Custom error page for invalid routes
✅ Reusable Components – Organized structure with layout and pages
✅ Clean Code – Easy to understand and extend

📂 Project Structure
src/
 ├── Pages/
 │   ├── Home.jsx           # Home Page
 │   ├── Collections.jsx    # Collections Page (API Data Display)
 │   ├── About.jsx          # About Page
 │   ├── Contact.jsx        # Contact Page
 │   ├── Layout/
 │   │    └── AppLayout.jsx # Main Layout (Navbar, Footer, Outlet)
 │   └── Error/
 │        └── Error.jsx     # Custom Error Page (404 etc.)
 ├── App.jsx                # React Router Configuration
 ├── main.jsx               # React Entry Point
 └── index.css              # Styling

⚙️ Installation & Setup

 Must Have a 404 Page:

<img width="1920" height="944" alt="image" src="https://github.com/user-attachments/assets/61b006ca-6a50-4129-971b-fe89144ced62" />



Follow these steps to run the project locally:

Clone the repository

git clone https://github.com/your-username/your-repo.git


Navigate into the folder

cd your-repo


Install dependencies

npm install


Start the development server

npm run dev


Now open http://localhost:5173
 in your browser.

🛠️ Tech Stack

⚛️ React.js – UI library

🛣️ React Router DOM – Routing and navigation

🎨 Tailwind CSS (if used) – Styling

🌐 API Fetch – Fetch external data (like OMDB API or any other)

⚡ Vite – Development build tool

🌍 API Integration

This project uses API data fetching to show dynamic content on the Collections page.

Example (OMDb API):

const response = await fetch(URL);
const data = await response.json();

📸 Screenshots

<img width="1905" height="952" alt="image" src="https://github.com/user-attachments/assets/edc6f22e-e854-4fed-8dab-80f84f5b7254" />


🚀 Future Improvements

Add authentication (Login / Signup)

Dark mode support

Backend integration for contact form

More advanced API filtering and search

👨‍💻 Author

Developed by Taha
