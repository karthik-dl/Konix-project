# Tax Harvesting Dashboard

This project is a React-based dashboard built to understand and simulate tax-loss harvesting.

It allows users to view their capital gains, select assets, and see how selling certain assets can help reduce tax liability.


##  Live Demo
https://konix-project-opal.vercel.app/


##  GitHub Repository
https://github.com/karthik-dl/Konix-project



## What I Built

- A dashboard to display Short-Term and Long-Term Capital Gains  
- Selection feature to choose assets for harvesting  
- Real-time calculation of updated gains after selection  
- “Amount to Sell” logic based on selected assets  
- Sorting feature on short-term gains  
- View toggle (show limited / full data)  
- Dark mode toggle for better UI experience  



## Key Features

- Select individual assets or all assets  
- Dynamic updates when assets are selected  
- Clean and responsive table UI  
- Tooltip and disclaimer section  
- Sorting functionality  
- Dark mode support  


## Tech Stack

- React.js  
- Tailwind CSS  
- JavaScript  

---

## Project Structure


src/
    Components/
        Card.jsx
        HoldingsTable.jsx
        HoldingRow.jsx

    pages/
        Dashboard.jsx

    services/
        api.js

    utils/
        calculations.js


## How to Run

bash
npm install
npm run dev