# BhangariWala_Shop

A React storefront for BhangariWala, a small shop that sells upcycled goods made from glass and plastic.

## What it does

- Shop page (home) listing products from a static data file, with a search bar and a category filter (glass, plastic, metal).
- Product detail page at `/shop/:id` with reviews.
- Cart page at `/cart` with add, decrease quantity and remove actions, kept in Redux state.
- Toast notifications and a loading fallback while pages load.

The catalogue is hard-coded in `src/utils/products.js` (7 items at the time of writing). There is no backend, checkout or payment.

## Tech stack

React 18, React Router 6, Redux Toolkit, Bootstrap and React-Bootstrap, react-select, react-slick, react-toastify. Built with Create React App (`react-scripts` 5).

## Folder layout

- `src/pages` - Shop, Product and Cart pages
- `src/components` - product card, product details and reviews, search bar, filter, loader, layout wrapper
- `src/app` - Redux store and cart slice
- `src/utils/products.js` - product data
- `src/Images` - product images
- `public` - HTML shell and manifest

## Install and run

```bash
pnpm install
pnpm run start   # dev server
pnpm run build   # production build
pnpm run test    # tests
```

## Environment variables

None.

## Status

Small front-end project. The `package.json` name is still `react-ecommerce`, which suggests it was started from a generic e-commerce template.
