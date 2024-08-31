# React Dashboard Project

This project is a React-based dashboard application that displays sales and order data using various chart components.

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Overview

This dashboard application provides a visual representation of sales and order data. It includes a sidebar for navigation and two main chart components:

1. Sales vs Orders Chart: A line chart comparing sales and order trends over time.
2. Sales Pie Chart: A pie chart showing the distribution of sales across different channels.

## Installation

To set up this project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/Khasimsaida6667/AdaptNXT.git
   ```

2. Navigate to the project directory:
   ```
   cd react-dashboard
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To run the application in development mode:

```
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To build the application for production:

```
npm run build
```

## Components

### Dashboard

The main component that renders the sidebar and chart components.

### Sidebar

Displays navigation options for the dashboard.

### SalesVsOrdersChart

A line chart component that visualizes the comparison between sales and orders over time.

### SalesPieChart

A pie chart component that shows the distribution of sales across different channels (e.g., WooCommerce Store, Shopify Store).

## Dependencies

- React
- react-chartjs-2
- chart.js
- recharts

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.