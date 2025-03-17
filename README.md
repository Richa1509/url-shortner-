# URL Shortener  

A simple URL shortening service that converts long URLs into short, easily shareable links. The service also tracks the total number of visits (clicks) for each shortened URL.  

## Features  
- Generate a short URL for any valid long URL.  
- Redirect users from the short URL to the original URL.  
- Track the total number of clicks on each short URL.  
- Retrieve analytics for a specific short URL, including visit counts.  

## API Routes  
### 1️⃣ Create a Short URL  
**POST /URL**  
- **Description:** Generates a new short URL and returns it.  
- **Response Format:** `{ "short_url": "example.com/random-id" }`  

### 2️⃣ Redirect to Original URL  
**GET /:id**  
- **Description:** Redirects the user to the original URL.  

### 3️⃣ Get Analytics for a Short URL  
**GET /URL/analytics/:id**  
- **Description:** Returns the total number of visits (clicks) for the given short URL.  
- **Response Format:** `{ "clicks": 42 }`  

## Tech Stack  
- **Backend:** Node.js / Express 
- **Database:** MongoDB 
- **Frontend (Optional):**  HTML + CSS for UI  

## Installation & Setup  
1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/url-shortener.git
   cd url-shortener
   ```
2. Install dependencies:  
   ```bash
   npm install  # or pip install -r requirements.txt (if using Python)
   ```
3. Start the server:  
   ```bash
   npm start  # or python app.py (if using Flask/Django)
   ```  

## Contributing  
Feel free to submit issues and pull requests to enhance the project. 🚀  

## License  
MIT License  
