# URL Shortener  

A simple URL shortener built with **Node.js, MongoDB, HTML, and CSS**. It allows users to shorten URLs, track visit counts, and includes user authentication for managing links. Deployed on **Render** with a clean UI for ease of use.  

## Features  
- ✅ **Shorten URLs:** Generate short links for long URLs.  
- 🔄 **Redirect:** Automatically redirect users to the original URL.  
- 📊 **Analytics:** Track the number of visits for each link.  
- 🔒 **User Authentication:** Secure login to manage personal URLs.  
- 🎨 **Frontend UI:** A simple and responsive interface.  

## API Routes  
### 1️⃣ Create a Short URL  
**POST /URL**  
- **Requires authentication**  
- **Response:** `{ "short_url": "example.com/random-id" }`  

### 2️⃣ Redirect to Original URL  
**GET /:id**  
- **Public access**  

### 3️⃣ Get Analytics for a Short URL  
**GET /URL/analytics/:id**  
- **Requires authentication**  
- **Response:** `{ "clicks": 42 }`  

## Tech Stack  
- **Backend:** Node.js, Express  
- **Database:** MongoDB  
- **Frontend:** HTML, CSS  
- **Deployment:** Render  

## Installation & Setup  
1. Clone the repository:  
   ```bash
   git clone https://github.com/Richa1509/url-shortner-.git
   cd url-shortner-
   ```
2. Install dependencies:  
   ```bash
   npm install
   ```
3. Set up environment variables (`.env` file):  
   ```
   MONGODB_URI=your_database_uri
   JWT_SECRET=your_secret_key
   ```
4. Start the server:  
   ```bash
   npm start
   ```  
5. Visit `http://localhost:3000` to access the UI.  

## Deployment on Render  
- The project is deployed on **Render** for easy access.  

## Contributing  
Open to contributions! Feel free to submit issues and pull requests. 🚀  

## License  
MIT License  

