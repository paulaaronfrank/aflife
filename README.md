# Aaron Frank Personal Website

A modern, interactive personal website built with Flask, Bootstrap 5, and vanilla JavaScript featuring smooth transitions and dynamic image swapping.

## Features

- **Classical Hero Layout**: Text on the left, dynamic image on the right
- **Image Swapping**: Hover over navigation items to change the hero image
- **View Transitions API**: Smooth page transitions using native browser APIs
- **Responsive Design**: Works perfectly on all devices
- **Bootstrap 5**: Modern, clean styling
- **Fast Loading**: No JavaScript frameworks, pure vanilla JS

## Technology Stack

- **Backend**: Flask (Python)
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Bootstrap 5
- **Animations**: CSS Transitions + View Transitions API
- **Images**: Unsplash placeholder images (replace with your own)

## Project Structure

```
aaron-frank-flask-website/
├── app.py                 # Flask application
├── requirements.txt       # Python dependencies
├── static/
│   ├── css/
│   │   └── style.css     # Custom CSS
│   ├── js/
│   │   └── main.js       # JavaScript functionality
│   └── images/
│       └── hero/         # Hero images for each category
├── templates/
│   ├── base.html         # Base template
│   ├── index.html        # Home page
│   ├── traveling.html    # Traveling page
│   ├── sports.html       # Sports page
│   ├── music.html        # Music page
│   ├── technology.html   # Technology page
│   └── about.html        # About page
└── README.md
```

## Installation & Setup

1. **Clone or download the project**

   ```bash
   cd aaron-frank-flask-website
   ```

2. **Install Python dependencies**

   ```bash
   pip install -r requirements.txt
   ```

3. **Run the Flask application**

   ```bash
   python app.py
   ```

4. **Open your browser**
   Navigate to `http://localhost:5000`

## Customization

### Adding Your Images

Replace the placeholder images in `static/images/hero/` with your own photos:

- `default.jpg` - Main hero image
- `traveling.jpg` - Image for traveling section
- `sports.jpg` - Image for sports section
- `music.jpg` - Image for music section
- `technology.jpg` - Image for technology section
- `about.jpg` - Image for about section

### Updating Content

1. **Personal Information**: Edit the templates in the `templates/` directory
2. **Social Links**: Update links in `templates/base.html`
3. **Styling**: Modify `static/css/style.css`
4. **Functionality**: Update `static/js/main.js`

### Navigation Hover Effects

The image swapping is handled by JavaScript in `main.js`. When you hover over navigation items, the hero image changes based on the `data-category` attribute.

## Features Explained

### Image Swapping

- Hover over navigation items to see the hero image change
- Smooth transitions with opacity and scale effects
- Fallback to default image when not hovering

### View Transitions API

- Smooth page transitions using native browser APIs
- Fallback for browsers that don't support the API
- No external libraries required

### Responsive Design

- Mobile-first approach with Bootstrap 5
- Hamburger menu for mobile devices
- Optimized images and layouts for all screen sizes

## Deployment

### Local Development

```bash
python app.py
```

### Production Deployment

1. Set `debug=False` in `app.py`
2. Use a production WSGI server like Gunicorn
3. Deploy to platforms like Heroku, Vercel, or DigitalOcean

## Browser Support

- **Modern Browsers**: Full support with View Transitions API
- **Older Browsers**: Graceful fallback with CSS transitions
- **Mobile**: Full responsive support

## Performance

- **Fast Loading**: No external JavaScript frameworks
- **Optimized Images**: Compressed placeholder images
- **Minimal Dependencies**: Only Flask and Bootstrap 5
- **Efficient CSS**: Custom CSS with minimal overhead

## License

This project is open source and available under the MIT License.

## Contact

Aaron Frank - World Explorer | Aaron Supertramp

- Instagram: [@aaronsupertramp](https://instagram.com/aaronsupertramp)
- Website: [Your Website URL]

---

Built with ❤️ using Flask, Bootstrap 5, and vanilla JavaScript
