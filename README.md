# 🎨 Color Scheme Generator

A sleek, responsive web application that generates harmonious color palettes using [The Color API](https://www.thecolorapi.com/). Pick a seed color, choose a color scheme mode, and instantly generate beautiful 5-color palettes perfect for your next design project.

![Color Scheme Generator Preview](https://via.placeholder.com/800x400/F55A5A/FFFFFF?text=Color+Scheme+Generator)

## ✨ Features

- **🎯 Intuitive Color Picker** - Native HTML5 color input for easy seed color selection
- **📊 8 Color Scheme Modes** - Monochrome, Analogic, Complement, Triad, Quad, and more
- **📋 Click to Copy** - Click any color to instantly copy its hex code to clipboard
- **📱 Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **⚡ Fast & Lightweight** - No frameworks, just vanilla HTML, CSS, and JavaScript
- **♿ Accessible** - Proper ARIA labels and keyboard navigation support

## 🚀 Demo

[Live Demo](https://dev-color-generator.netlify.app)

## 🛠️ Technologies Used

- **HTML5** - Semantic markup with accessibility features
- **CSS3** - Flexbox layout, CSS custom properties, responsive design
- **Vanilla JavaScript** - ES6+, Fetch API, Clipboard API
- **[The Color API](https://www.thecolorapi.com/)** - Color scheme generation
- **[Vite](https://vitejs.dev/)** - Development server and build tool
- **[Google Fonts](https://fonts.google.com/)** - Inter font family

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/color-scheme-generator.git
   cd color-scheme-generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 🎮 How to Use

1. **Select a Seed Color** - Click the color picker on the left to choose your base color
2. **Choose a Scheme Mode** - Select from 8 different color harmony modes:
   - `Monochrome` - Variations of a single color
   - `Monochrome Dark` - Darker variations
   - `Monochrome Light` - Lighter variations
   - `Analogic` - Colors adjacent on the color wheel
   - `Complement` - Opposite colors on the color wheel
   - `Analogic Complement` - Analogic + complementary colors
   - `Triad` - Three colors equally spaced on the wheel
   - `Quad` - Four colors forming a rectangle on the wheel
3. **Generate** - Click "Get color scheme" to fetch your palette
4. **Copy Colors** - Click any color column to copy its hex code

## 📁 Project Structure

```
color-scheme-generator/
├── index.html      # Main HTML structure
├── index.css       # Styles and responsive design
├── index.js        # Application logic and API integration
├── package.json    # Project dependencies
├── vite.config.js  # Vite configuration
└── README.md       # Project documentation
```

## 🔌 API Reference

This project uses [The Color API](https://www.thecolorapi.com/) to generate color schemes.

**Endpoint:**
```
GET https://www.thecolorapi.com/scheme
```

**Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `hex` | string | Seed color in hex format (without #) |
| `mode` | string | Color scheme mode |
| `count` | number | Number of colors to return |

**Example Request:**
```
https://www.thecolorapi.com/scheme?hex=F55A5A&mode=monochrome&count=5
```

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Scrimba](https://scrimba.com/) - For the project inspiration and learning platform
- [The Color API](https://www.thecolorapi.com/) - For the excellent color scheme API
- [Google Fonts](https://fonts.google.com/) - For the Inter typeface

---

Made with ❤️ as part of the Scrimba Frontend Developer Career Path
