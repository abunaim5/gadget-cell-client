# Gadget Cell (Mini E-Commerce SPA)

A responsive single-page e-commerce application built with React and TypeScript. Users can browse products, view detailed info, add items to the cart, remove items from cart and proceed to checkout — all without authentication.

## Live Demo

🔗 [View Live Demo](https://gadget-cell.vercel.app/)

## Features

- 🏠 Home Page: Welcome section with featured call-to-action
- 🧾 Products Page: Full product listing with Add to Cart functionality  
- 📄 Product Detail Page: View detailed information for each product  
- 🛒 Cart Sidebar: Slide-in cart with quantity control and checkout  
- 💳 Checkout Modal: Simulated checkout form (Name, Email, Address)  
- 📱 Fully Responsive: Works on mobile, tablet, and desktop  
- 💡 Clean UI/UX: Built with custom and using shadcn/ui

## Tech Stack

- ⚛️ React
- ⌨️ TypeScript
- 💅 Tailwind CSS
- 🎨 shadcn/ui
- 🧠 React Hooks & Context API (for cart state)
- 🌐 Vercel (for deployment)

## Pages Overview

### 1. Home Page
- Introductory section and navigation
- Quick link to explore products

### 2. Products Page
- Displays at least 8 dummy products
- Each product includes: image, title, price, and “Add to Cart” button
- Cards are clickable and lead to individual Product Detail pages

### 3. Product Detail Page
- Shows complete information about a selected product
- Includes title, description, price, and a larger image
- “Add to Cart” button available

### 4. Cart Sidebar
- Slide-in panel showing selected items
- Includes quantity increase/decrease controls
- Displays total cost and a “Checkout” button

### 5. Checkout Modal
- Modal form triggered from the cart
- Fields: Name, Email, and Address
- Submit button simulates order placement

## Getting Started Locally

To run the project locally:

```bash
# Clone the repository
git clone https://github.com/abunaim5/gadget-cell-client.git

# Navigate into the directory
cd gadget-cell-client

# Install dependencies
npm install

# Run the development server
npm run dev