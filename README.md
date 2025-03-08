# DashLink - Delivery Platform Management System

A professional delivery platform management service for convenience stores and gas stations. Connect with DoorDash, Uber Eats, and more - all managed in one place.

## Features

- Multi-platform integration (DoorDash, Uber Eats, Grubhub)
- Professional platform management
- Real-time analytics and reporting
- Dedicated support system
- Contact form for business inquiries

## Local Development

### Prerequisites

- Node.js 20.x or higher
- npm 8.x or higher

### Setup

1. Clone the repository:
```bash
git clone [https://github.com/Alnotha/DashLink]
cd dashlink
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following variables:
```env
DATABASE_URL=your_database_url
# Add any other required environment variables
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Deployment

### Deploying to Vercel

This project is optimized for deployment on Vercel.

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy the application:
```bash
vercel
```

#### Environment Variables on Vercel

Make sure to set up the following environment variables in your Vercel project settings:
- `DATABASE_URL`: Your database connection string
- Add any other required environment variables

### Alternative Deployment Options

#### Using Docker

1. Build the Docker image:
```bash
docker build -t dashlink .
```

2. Run the container:
```bash
docker run -p 5000:5000 -e DATABASE_URL=your_database_url dashlink
```

## Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── lib/
├── server/
│   ├── routes.ts
│   └── storage.ts
├── shared/
│   └── schema.ts
└── package.json
```

## Support

For any questions or support, please contact:
- Alyan Tharani
- [Your Contact Information]

## License

This project is proprietary and confidential. Unauthorized copying, modification, distribution, or use of this software is strictly prohibited.
