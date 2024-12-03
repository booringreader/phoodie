### Fixes
    - link login button with singInForm
    - re adjust search-bar, global username form, top restaurants filter
    - build logic for collapsing accordion on menu page
    - refactor code to render stripes section on body page only
    - card size and display information

### Features
#####  Frontend(UI/UX)
- fade-in animation of platters (in component 1)
    1. FADE-IN-OUT: big icon (received from API) on the right
    2. FIXED: lower left populated with a culinary anecdote
    3. FIXED: upper left - logo
    4. Progressive Web App (PWA) features using ```Workbox``` to enhance offline usability.
    5. Microinteractions
        - Loading states with skeleton loaders or spinners when content is fetching
        - Button feedback (e.g., color change or animation) on click or hover
    6. Real-time order tracking with a progress bar or timeline; Notification system for successful actions ("Item added to cart," "Order placed").
    7. Profile customization (default address, favorite cuisines).

- horizontal slider (in component 3)
    1. heading (in component 2) of top restaurants
    2. slider of restaurants received from API
    3. name, rating, menu(with ellipsis for overflow), delivery time, address

- footer

#### Backend
    - `express-rate-limit` middleware to prevent misuse of APIs.
    - ```Helmet``` for securing HTTP headers.
    - Basic Nginx Setup as a reverse proxy for load distribution and static asset delivery
    - payment gateway
#### Database
    - MongoDB
    - Basic Caching: in-memory caching with Node.js’s Map or Redis (if data persists longer) for repeated queries like fetching restaurant menus

### Hosting
1. Host the backend on ```AWS EC2``` or ```AWS Lightsail``` for low-cost deployment.

// ? component(div(div(div)))