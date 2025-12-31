# Interactive Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations, interactive elements, and a beautiful gradient design.

## Features

- ✨ **Modern Design**: Beautiful gradient backgrounds and smooth animations
- 📱 **Responsive**: Works perfectly on all devices
- 🎯 **Interactive**: Smooth scrolling navigation and hover effects
- 🚀 **Fast**: Built with Vite for optimal performance
- 🎨 **Customizable**: Easy to personalize with your own content

## Sections

1. **Hero Section**: Eye-catching introduction with animated elements
2. **About**: Personal information and experience highlights
3. **Skills**: Technical skills with animated progress bars
4. **Projects**: Showcase of your work with hover effects
5. **Contact**: Contact form and information

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Navigate to the project directory:
   ```bash
   cd myportfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

## Customization Guide

### Personal Information

Update the following in `src/App.jsx`:

1. **Name**: Replace `[Your Name]` with your actual name
2. **Title**: Update the job title in the hero section
3. **Description**: Modify the about section text
4. **Contact Info**: Update email and location in the contact section

### Skills

Modify the `skills` array in `src/App.jsx`:

```javascript
const skills = [
  { name: "Your Skill", level: 90 },
  // Add more skills...
]
```

### Projects

Update the `projects` array with your own projects:

```javascript
const projects = [
  {
    id: 1,
    title: "Your Project",
    description: "Project description",
    technologies: ["React", "Node.js"],
    image: "your-image-url",
    link: "project-link"
  },
  // Add more projects...
]
```

### Styling

- **Colors**: Modify the gradient colors in the CSS classes
- **Fonts**: Update the font family in `src/index.css`
- **Animations**: Adjust animation durations in `src/App.css`

### Images

Replace the placeholder images with your own:
- Project images in the projects section
- Profile picture (if desired)
- Background images

## Deployment

### Build for Production

```bash
npm run build
```

### Deploy Options

1. **Netlify**: Drag and drop the `dist` folder
2. **Vercel**: Connect your GitHub repository
3. **GitHub Pages**: Use the `gh-pages` package
4. **Firebase**: Use Firebase Hosting

## Technologies Used

- **React 19**: Latest React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool
- **JavaScript ES6+**: Modern JavaScript features

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images and assets
- Lazy loading for better performance
- Minimal bundle size
- Fast loading times

## Accessibility

- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Focus indicators

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing your portfolio, feel free to reach out!

---

**Happy Coding! 🚀**
