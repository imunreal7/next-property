# Next Property

> A web application to help you find your next rental property.

**Live URL:** <https://next-property-omega.vercel.app/>

**Demo Video:** [![](/public/Next-Property.png)](https://www.youtube.com/watch?v=Curs-2fkWEI)

## Table of Contents

-   [Introduction](#introduction)
-   [Features](#features)
-   [Tech Stack](#tech-stack)
-   [Prerequisites](#prerequisites)
-   [Installation](#installation)
-   [Environment Variables](#environment-variables)
-   [Running the Development Server](#running-the-development-server)
-   [Building for Production](#building-for-production)
-   [Deployment](#deployment)
-   [Project Structure](#project-structure)
-   [Contributing](#contributing)
-   [License](#license)

## Introduction

Next Property is a Next.js 14-based web application designed to streamline the process of finding and listing rental properties. Built during the [Next 14 From Scratch Course](https://www.traversymedia.com/nextjs-from-scratch), App that leverages Next.js Server Actions instead of traditional API routes.

## Features

-   User authentication with Google & NextAuth.js
-   Protected routes & user authorization
-   User profiles with personal listings
-   Property listing CRUD operations
-   Multiple image uploads via Cloudinary
-   Property search & filtering
-   Internal messaging with unread count notifications
-   PhotoSwipe image gallery
-   Interactive Mapbox maps
-   Toast notifications for user feedback
-   Bookmark & share properties on social media
-   Responsive design with Tailwind CSS
-   Custom 404 & loading states
-   Next.js Server Actions for data mutations

## Tech Stack

-   Next.js
-   React
-   Tailwind CSS
-   MongoDB & Mongoose
-   NextAuth.js
-   Cloudinary
-   Mapbox (react-map-gl)
-   PhotoSwipe
-   React Toastify
-   React Spinners

## Prerequisites

-   Node.js v18+
-   MongoDB Atlas cluster
-   Cloudinary account
-   Google Cloud credentials
-   Mapbox account

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/next-property.git
    cd next-property
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

## Environment Variables

Create a `.env` file at the project root and fill in the following keys:

```bash
MONGODB_URI=
NEXT_PUBLIC_DOMAIN=
NEXT_PUBLIC_API_DOMAIN=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
CLOUDINARY_CLOUD_NAME=
NEXTAUTH_URL=
NEXTAUTH_URL_INTERNAL=
NEXTAUTH_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXT_PUBLIC_MAPBOX_TOKEN=
```

## Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in the browser.

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This project is deployed on Vercel:
<https://next-property-omega.vercel.app/>

## Project Structure

```
.
├─ app/               # Next.js App Router pages & layouts
├─ components/        # Reusable React components
├─ context/           # React context for global state
├─ config/            # Cloudinary, database config
├─ models/            # Mongoose schemas
├─ public/            # Static assets (images, favicon)
├─ styles/            # Global & component CSS (Tailwind entry)
├─ utils/             # Helper functions & options
├─ tailwind.config.js
├─ postcss.config.js
├─ next.config.js
├─ package.json
└─ README.md
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.

## Author

Developed by Aman Dubey

