# Champion Pool & Spa - Business Website

A professional, modern business website for Champion Pool & Spa, built with Next.js and TailwindCSS.

## Features

- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI/UX**: Clean, professional design with black and blue branding
- **SEO Optimized**: Meta tags, structured data, and best practices
- **Fast Performance**: Built with Next.js for optimal performance
- **Contact Forms**: Integrated contact and quote request forms
- **Gallery**: Portfolio showcase with project filtering
- **Testimonials**: Customer reviews and ratings
- **Services**: Comprehensive service listings with pricing

## Pages

- **Home**: Hero banner, services overview, testimonials
- **About**: Company background, values, team information
- **Services**: Detailed service offerings with descriptions
- **Gallery**: Project portfolio with filtering
- **Testimonials**: Customer reviews and feedback
- **Contact**: Contact form and business information

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: TailwindCSS 4
- **Deployment**: Docker, Docker Compose
- **Build Tool**: Turbopack

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Docker (for deployment)

### Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd champs_pool_and_spa
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

## Docker Deployment

### Development with Docker

```bash
# Start development environment
docker-compose --profile dev up --build

# Stop development environment
docker-compose --profile dev down
```

### Production with Docker

```bash
# Build and start production environment
docker-compose --profile prod up --build

# Stop production environment
docker-compose --profile prod down
```

### Build Only

```bash
# Build the project in Docker
docker-compose --profile build up --build
```

### Manual Docker Commands

```bash
# Build the image
docker build -t champion-pool-spa .

# Run the container
docker run -p 3000:3000 champion-pool-spa
```

## Project Structure

```
champs_pool_and_spa/
├── src/
│   ├── app/                 # Next.js app router
│   │   ├── about/          # About page
│   │   ├── services/       # Services page
│   │   ├── gallery/        # Gallery page
│   │   ├── testimonials/   # Testimonials page
│   │   ├── contact/        # Contact page
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/         # Reusable components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Footer.tsx      # Site footer
│   │   ├── Hero.tsx        # Hero section
│   │   ├── Services.tsx    # Services showcase
│   │   ├── About.tsx       # About section
│   │   ├── Gallery.tsx     # Portfolio gallery
│   │   ├── Testimonials.tsx # Customer reviews
│   │   └── Contact.tsx     # Contact form
│   └── app/globals.css     # Global styles
├── public/                  # Static assets
├── Dockerfile              # Docker configuration
├── docker-compose.yml      # Docker Compose setup
├── next.config.ts          # Next.js configuration
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## Customization

### Branding Colors

The website uses a black and blue color scheme. To customize:

1. **Primary Blue**: `#3b82f6` (blue-600)
2. **Dark Blue**: `#1e40af` (blue-700)
3. **Navy Blue**: `#1e3a8a` (blue-800)
4. **Black**: `#111827` (gray-900)

### Content Updates

- **Company Information**: Update contact details in `src/components/Contact.tsx`
- **Services**: Modify service offerings in `src/components/Services.tsx`
- **About Content**: Edit company story in `src/components/About.tsx`
- **Testimonials**: Update customer reviews in `src/components/Testimonials.tsx`

### Images

Replace placeholder images with actual project photos:
- Update image paths in components
- Add images to the `public/` directory
- Optimize images for web use

## SEO Features

- Meta tags for all pages
- Open Graph tags for social sharing
- Structured data markup
- Semantic HTML structure
- Fast loading times
- Mobile-friendly design

## Performance

- Next.js optimization
- TailwindCSS for minimal CSS
- Image optimization
- Code splitting
- Lazy loading components

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

This project is proprietary to Champion Pool & Spa.

## Support

For technical support or questions about the website, please contact the development team.

---

**Champion Pool & Spa** - Professional Pool & Spa Services
