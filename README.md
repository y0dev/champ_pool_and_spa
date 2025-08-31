# Champion Pool & Spa - Business Website

A professional, modern business website for Champion Pool & Spa, built with Next.js and TailwindCSS. Features a stunning red and blue theme with dynamic hero image transitions and comprehensive pool service information.

## ✨ Features

- **🎨 Red & Blue Theme**: Professional gradient styling throughout
- **🖼️ Hero Image Transitions**: Automatic fade in/out between pool images
- **📱 Responsive Design**: Mobile-first design that works on all devices
- **⚡ Modern UI/UX**: Clean, professional design with smooth animations
- **🔍 SEO Optimized**: Meta tags, structured data, and best practices
- **🚀 Fast Performance**: Built with Next.js 15 and Turbopack
- **📝 Contact Forms**: Integrated contact and quote request forms with Web3Forms
- **🖼️ Gallery**: Portfolio showcase with project filtering
- **⭐ Testimonials**: Customer reviews and ratings
- **🛠️ Services**: Comprehensive service listings with pricing
- **🏆 Trust Indicators**: License, insurance, BBB accreditation display

## 🎯 Pages & Sections

- **🏠 Home**: Hero banner with image transitions, services overview, testimonials
- **ℹ️ About**: Company background, values, team information
- **🛠️ Services**: Detailed service offerings with descriptions
- **🖼️ Gallery**: Project portfolio with filtering and modal views
- **⭐ Testimonials**: Customer reviews and feedback
- **📞 Contact**: Contact form and business information
- **📄 Privacy Policy**: Legal privacy information
- **📋 Terms of Service**: Legal terms and conditions

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: TailwindCSS 4 with custom gradients
- **Fonts**: Dancing Script, Playfair Display, Quicksand
- **Forms**: Web3Forms integration
- **Deployment**: Docker, Docker Compose
- **Build Tool**: Turbopack

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Docker (for deployment)

### Web3Forms Setup
The contact form uses [Web3Forms](https://web3forms.com/) for form submissions. To set this up:

1. **Get Your Access Key:**
   - Visit [https://web3forms.com/](https://web3forms.com/)
   - Click "Get Access Key" 
   - Enter your email and get your free access key

2. **Configure Environment Variables:**
   - Create a `.env.local` file in the root directory
   - Add your access key:
     ```
     NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_actual_access_key_here
     ```
   - Replace `your_actual_access_key_here` with the key you received

3. **Test the Form:**
   - Start the development server
   - Fill out and submit the contact form
   - Check your email for the form submission

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

## 🐳 Docker Deployment

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

## 📁 Project Structure

```
champs_pool_and_spa/
├── src/
│   ├── app/                 # Next.js app router
│   │   ├── privacy/        # Privacy policy page
│   │   ├── terms/          # Terms of service page
│   │   ├── layout.tsx      # Root layout with fonts
│   │   ├── globals.css     # Global styles and fonts
│   │   └── page.tsx        # Home page
│   ├── components/         # Reusable components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Footer.tsx      # Site footer
│   │   ├── Hero.tsx        # Hero section with image transitions
│   │   ├── Services.tsx    # Services showcase
│   │   ├── About.tsx       # About section
│   │   ├── Gallery.tsx     # Portfolio gallery with modal
│   │   ├── Testimonials.tsx # Customer reviews
│   │   ├── Contact.tsx     # Contact form
│   │   └── ServiceAreas.tsx # Service areas display
│   └── utils/
│       └── constants.ts    # Centralized data and configuration
├── public/                  # Static assets
│   ├── images/
│   │   ├── hero/           # Hero images (pool-1.jpeg, pool-2.png)
│   │   ├── cities/         # City images for service areas
│   │   └── gallery/        # Gallery project images
├── Dockerfile              # Docker configuration
├── docker-compose.yml      # Docker Compose setup
├── next.config.ts          # Next.js configuration
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## 🎨 Customization

### Branding Colors

The website uses a professional red and blue gradient theme:

1. **Primary Blue**: `#3b82f6` (blue-600)
2. **Primary Red**: `#dc2626` (red-600)
3. **Gradients**: `from-blue-600 to-red-600`
4. **Dark Blue**: `#1e40af` (blue-700)
5. **Dark Red**: `#b91c1c` (red-700)

### Content Updates

- **Company Information**: Update contact details in `src/utils/constants.ts`
- **Services**: Modify service offerings in `src/utils/constants.ts`
- **About Content**: Edit company story in `src/utils/constants.ts`
- **Testimonials**: Update customer reviews in `src/utils/constants.ts`
- **Gallery**: Add project images and descriptions in `src/utils/constants.ts`

### Images

Replace placeholder images with actual project photos:
- **Hero Images**: Add to `public/images/hero/`
- **Gallery Images**: Add to `public/images/gallery/`
- **City Images**: Add to `public/images/cities/`
- Update image paths in `src/utils/constants.ts`
- Optimize images for web use

### Fonts

The website uses three custom fonts:
- **Dancing Script**: For elegant headings
- **Playfair Display**: For display text
- **Quicksand**: For body text

## 🔍 SEO Features

- Meta tags for all pages
- Open Graph tags for social sharing
- Structured data markup
- Semantic HTML structure
- Fast loading times
- Mobile-friendly design
- Optimized images and fonts

## ⚡ Performance

- Next.js 15 optimization
- Turbopack for faster builds
- TailwindCSS for minimal CSS
- Image optimization
- Code splitting
- Lazy loading components
- Font optimization with `display: swap`

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is proprietary to Champion Pool & Spa.

## 🆘 Support

For technical support or questions about the website, please contact the development team.

---

**Champion Pool & Spa** - Professional Pool & Spa Services  
*Serving the Dallas-Fort Worth Metro Area*
