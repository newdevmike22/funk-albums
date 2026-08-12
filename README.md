# Dr. Jockkenstein's 12 Favorite Funk Albums

A responsive, multi-page music showcase built with **Next.js and TypeScript** featuring Dr. Jockkenstein's fictional collection of 12 favorite funk albums.

This project was created as my **second independent Next.js project** while progressing through my Next.js studies. The project expands upon the fundamentals from my first Next.js project by introducing multiple routes, reusable components, imported data, dynamic rendering with `.map()`, Next.js navigation, and individual audio clips for each album.

## 🚀 Live Demo

https://dr-jockkenstein.netlify.app/

## 🛠️ Built With

* **Next.js**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **CSS**
* **Next.js Image**
* **Next.js Link**
* **Next.js Font Optimization**
* **Google Fonts**

  * Archivo Black
  * Fraunces
  * PT Sans
* **HTML5 Audio**
* **Netlify**

## ✨ Features

* Multi-page application using the Next.js App Router
* Home page featuring 12 funk albums
* Dedicated About page
* Reusable `Header` component
* Reusable `Albums` component
* Album information stored separately in a data file
* Data-driven album cards rendered with `.map()`
* Individual album artwork
* Individual audio clips for all 12 albums
* Built-in HTML5 audio controls
* Client-side navigation using Next.js `Link`
* Optimized images using `next/image`
* Optimized Google Fonts using `next/font/google`
* Fully responsive album grid
* Tailwind CSS combined with custom CSS
* Original fictional biography for Dr. Jockkenstein
* Original custom artwork for the project
* Deployed to Netlify

## 📚 Project Structure

The project separates routes, reusable components, and application data:

```text
src/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── Albums.tsx
│   └── Header.tsx
│
└── data/
    └── data.ts
```

## 🧩 Application Architecture

The home page is intentionally kept simple by separating the major pieces of the interface into reusable components.

The `Header` component handles the project's branding, logo, typography, title, and introductory text.

The `Albums` component imports the album data and maps through the collection to generate the album cards, including artwork, album information, and the corresponding audio clip.

The album information is maintained separately in `data.ts`, allowing the UI to be generated from structured data rather than manually creating each album card.

## 🎵 Audio

Each album contains its own audio clip referenced through the project data.

The `Albums` component uses the HTML5 `<audio>` element to provide playback controls for each individual clip.

This allows the same reusable component to display different album information and play the corresponding audio file based on the data associated with each album.

## 🧭 Routing

The project uses the Next.js App Router with separate routes for the main page and About page.

```text
/        → Favorite albums
/about  → Dr. Jockkenstein biography
```

Navigation between routes is handled using Next.js `Link`.

## 🎯 Project Purpose

This project was built as a hands-on learning exercise while studying Next.js.

The primary goal was to take newly learned concepts and apply them independently rather than simply reproducing a course project.

This project provided practical experience with:

* Next.js routing
* Reusable React components
* Importing and exporting components
* Importing structured data
* Data-driven rendering
* Array `.map()`
* Next.js `Link`
* Next.js `Image`
* Next.js font optimization
* Responsive layouts
* Audio integration
* Tailwind CSS
* Custom CSS
* Organizing a Next.js application into logical folders

The project intentionally does not include a functional contact form. That feature will be revisited after learning database integration and form handling.

## 📈 Learning Progression

This is my **second independent Next.js project**.

Compared with my first project, this application introduced a more structured architecture with separate routes, reusable components, external data, data-driven rendering, and interactive audio content.

The project represents the next step in my progression toward building larger and more complex applications with Next.js and TypeScript.

## 📌 Status

**Completed — August 2026**

This project is a learning project created to strengthen my practical Next.js and TypeScript skills while building something independently.

## 👨‍💻 Author

**Michael Dodson**

Frontend Developer | Graphic Designer

Building modern web applications with React, Next.js, TypeScript, and related technologies.

