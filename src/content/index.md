---
---

# Frontend/Web Engineer Intermediate-Advanced Topics Review

## 1. Bundlers and Build Tools

- **Webpack, Vite, and Rollup**: Understand their use cases, configuration options, and when to choose one over another.
- **Module Formats**: Differences between CommonJS, AMD, UMD, and ES Modules, and how they impact bundling.
- **Code Splitting**: Techniques for optimizing load times (e.g., dynamic imports, lazy loading).
- **Tree Shaking**: How it works and how to ensure your code is optimized to take advantage of it.
- **Minification and Compression**: Tools like Terser and Brotli and how to implement them.

## 2. CSS and Styling Internals

- **CSS Architecture**: BEM, ITCSS, and CSS-in-JS libraries like styled-components, Emotion, etc.
- **CSS Specificity, Inheritance, and Cascade**: Advanced understanding of selectors, specificity calculations, and the cascade.
- **Responsive Design**: Using CSS Grid, Flexbox, and media queries, along with techniques like fluid typography and container queries.
- **CSS Performance**: Avoiding costly selectors, managing reflows/repaints, and optimizing animations/transitions.

## 3. JavaScript Internals and Optimization

- **JavaScript Engine Mechanics**: How JavaScript engines (like V8) work, including event loop, call stack, and garbage collection.
- **Memory Management and Leaks**: Identifying and avoiding memory leaks, garbage collection strategies.
- **Asynchronous Programming**: Mastery of Promises, async/await, and error handling. Event loop intricacies.
- **Web Workers and Offloading**: Using Web Workers to offload tasks from the main thread.
- **Performance Profiling**: Tools like Chrome DevTools and techniques to profile, diagnose, and optimize code.

## 4. Frontend Performance

- **Critical Rendering Path**: Understanding the steps browsers take to render a page and how to optimize each step.
- **Lazy Loading and Code Splitting**: Breaking up large assets and resources.
- **Optimizing Images**: Modern formats (e.g., WebP, AVIF), responsive images, and image lazy loading.
- **Third-Party Scripts**: How to manage and audit third-party scripts to reduce their impact on performance.
- **Service Workers and Caching**: Using service workers to cache assets and data for faster page loads and offline support.

## 5. Testing and Quality Assurance

- **Unit and Integration Testing**: Using Jest, Mocha, or Jasmine with a focus on test-driven development (TDD) principles.
- **End-to-End (E2E) Testing**: Familiarity with tools like Cypress and Playwright for UI testing.
- **Performance and Accessibility Testing**: Lighthouse, Axe, and other tools to test for accessibility and performance.
- **Continuous Integration (CI) for Frontend**: Setting up CI pipelines, automated testing, and deployment strategies.

## 6. Accessibility (a11y)

- **WCAG Standards**: Understanding Web Content Accessibility Guidelines (WCAG) and best practices.
- **Semantic HTML**: Using HTML elements appropriately for structure and meaning.
- **ARIA Roles**: Leveraging ARIA attributes to improve screen reader support.
- **Keyboard Navigation**: Ensuring full operability via keyboard alone.

## 7. Security Practices

- **Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF)**: How these vulnerabilities occur and how to mitigate them.
- **Content Security Policy (CSP)**: How to set up CSP headers for additional security.
- **Secure Data Storage**: Best practices for client-side data storage, especially with cookies, LocalStorage, and session tokens.

## 8. Framework-Specific Topics

- **React/Angular/Vue Internals**: Understanding Virtual DOM, component lifecycle, state management (Redux, Vuex, etc.).
- **Server-Side Rendering (SSR) and Static Site Generation (SSG)**: Concepts, pros, cons, and implementations (e.g., Next.js, Nuxt.js).
- **State Management**: Advanced concepts in global state management, optimization, and best practices.

## 9. API Integration and State Management

- **REST vs. GraphQL**: Choosing and optimizing each for frontend applications.
- **Error Handling and Caching**: Techniques for handling API errors gracefully and caching API responses.
- **Offline Storage and Sync**: IndexedDB, Service Worker caching, and PouchDB for offline support and data synchronization.
