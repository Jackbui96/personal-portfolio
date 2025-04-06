# 🌐 Portfolio Website — portfolio.a-pani.com

This is the frontend of Nguyen Bui’s personal portfolio, built to showcase projects, resume, and work experience.

## 🛠️ Tech Stack

- **React** + **Vite**
- **Tailwind CSS** for styling
- **Axios** for API integration
- **Hosted on AWS EC2** with NGINX + SSL (Let's Encrypt)

## 🔥 Features

- Resume download via signed S3 URL
- Analytics tracking via backend API
- Project filtering by tag/category
- Timeline visualization of experience
- Responsive and clean UI

## 📁 Structure

```
src/
├── components/
├── pages/
├── api-clients/
├── assets/
└── utils/
```

## 🚀 Setup

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Build for production
npm run build
```

## 🌍 Environment (optional)

```env
VITE_API_BASE=https://api.a-pani.com/v1
```

## 📦 Deployment

The `build/` folder is served by NGINX:

```nginx
server {
    listen 80;
    server_name portfolio.a-pani.com;

    root /var/www/portfolio/build;
    index index.html;

    location / {
        try_files $uri /index.html;
    }

    location ~ /.well-known/acme-challenge/ {
        allow all;
    }
}
```
