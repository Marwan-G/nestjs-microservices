# NestJS Microservices Architecture

A comprehensive microservices architecture built with NestJS, TypeScript, and Turborepo for efficient monorepo management.

## 🏗️ Architecture Overview

This project demonstrates a modern microservices architecture with:
- **Independent services** that can be deployed separately
- **Shared packages** for common functionality
- **Monorepo management** with Turborepo for optimal builds
- **TypeScript** throughout the entire stack

## 📦 What's Inside?

### Microservices

- **`orders-service`** - Order management and processing
- **`product-service`** - Product catalog and inventory management  
- **`users-service`** - User authentication and profile management

### Shared Packages

- **`@repo/ui`** - Shared UI components library
- **`@repo/eslint-config`** - ESLint configurations for consistent code quality
- **`@repo/typescript-config`** - TypeScript configurations used across all services

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/Marwan-G/nestjs-microservices.git
cd nestjs-microservices

# Install dependencies
npm install
```

### Development

To develop all microservices simultaneously:

```bash
# Start all services
npm run dev

# Or using turbo directly
npx turbo dev
```

To develop a specific service:

```bash
# Start only the orders service
npx turbo dev --filter=orders-service

# Start only the product service  
npx turbo dev --filter=product-service

# Start only the users service
npx turbo dev --filter=users-service
```

### Building

To build all services and packages:

```bash
# Build everything
npx turbo build

# Build a specific service
npx turbo build --filter=orders-service
```

## 🛠️ Service Details

### Orders Service
- **Port**: 3001
- **Purpose**: Handle order creation, processing, and management
- **Features**: Order lifecycle, payment integration, status tracking

### Product Service  
- **Port**: 3002
- **Purpose**: Manage product catalog and inventory
- **Features**: Product CRUD, inventory management, search functionality

### Users Service
- **Port**: 3003  
- **Purpose**: User authentication and profile management
- **Features**: User registration, authentication, profile management

## 🔧 Development Tools

This monorepo includes:

- **[TypeScript](https://www.typescriptlang.org/)** - Static type checking
- **[ESLint](https://eslint.org/)** - Code linting and quality
- **[Prettier](https://prettier.io)** - Code formatting
- **[Turborepo](https://turborepo.com/)** - Monorepo build system
- **[NestJS](https://nestjs.com/)** - Progressive Node.js framework

## 📁 Project Structure

```
microservices/
├── apps/
│   ├── orders-service/     # Order management microservice
│   ├── product-service/    # Product catalog microservice
│   └── users-service/      # User management microservice
├── packages/
│   ├── ui/                 # Shared UI components
│   ├── eslint-config/      # Shared ESLint configuration
│   └── typescript-config/  # Shared TypeScript configuration
├── package.json
└── turbo.json
```

## 🚀 Deployment

Each service can be deployed independently:

```bash
# Build specific service for production
npx turbo build --filter=orders-service

# Deploy to your preferred platform
# Each service has its own Dockerfile and deployment config
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🔗 Useful Links

- [NestJS Documentation](https://docs.nestjs.com/)
- [Turborepo Documentation](https://turborepo.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Microservices Best Practices](https://microservices.io/)

---

**Built with ❤️ using NestJS and Turborepo**