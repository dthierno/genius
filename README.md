# Genius Artificial Intelligence
Genius  stands at the forefront of innovation, providing users with access to a suite of AI tools designed to enhance productivity, creativity, and problem-solving capabilities. Powered by Next.js 13, the platform delivers unparalleled performance, scalability, and security, ensuring that users can leverage AI capabilities with confidence.


## Overview

The Next.js 13 App Router is a groundbreaking addition to the Next.js framework, allowing developers to design intricate client-side routing effortlessly. Leveraging this powerful tool, we'll integrate a seamless Stripe subscription system, ensuring a smooth billing process for your users. Beyond the core functionalities, we'll embark on an instructive journey of building our SaaS application using a rich palette of web development technologies like React, Tailwind, Prisma, MySQL, Clerk, and more. Each step is elucidated in detail, ensuring a comprehensive learning experience.


## Technologies Used
This SaaS application involves the utilization of various web development technologies, including:

- React: A popular JavaScript library for building user interfaces.
- Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.
- Prisma: A modern database toolkit for TypeScript and Node.js.
- MySQL: An open-source relational database management system.
- Clerk: An authentication and user management solution.
- Stripe: A payment processing platform.
- Crisp: A customer support platform.


## Core Functionalities

Beyond basic features, our platform includes several core functionalities:

- Clerk Authentication: Implement secure authentication using Clerk.
- Sidebar: Create an intuitive navigation experience for users.
- Dashboard: Design a comprehensive dashboard for managing AI tools.
- Conversation AI: Integration with OpenAI for conversational AI.
- Code Generation AI: Utilize OpenAI for code generation tasks.
- Image Generation AI: Leverage OpenAI for image generation tasks.
- Music Generation AI: Harness Replicate AI for music generation.
- Video Generation AI: Use Replicate AI for video generation.


## Additional Features

- API Limit: Implement API usage limits for better resource management.
- API Limit UI Counter: User interface element to display API usage limits.
- Pro Modal UI: Design modal when user exceeds free plan usage.
- Stripe Integration: Seamlessly integrate Stripe for subscription management.
- Customer Support: Integrate Crisp for customer support.
- Landing Page: Create an engaging landing page to attract users.

## Getting Started
### Prerequisites

**Node version 18.x.x**

### Cloning the repository

```shell
git clone https://github.com/dthierno/genius.git
```

### Install packages

```shell
npm install
```

### Setup .env file


```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

DATABASE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Setup Prisma

Create a MySQL Database (I used PlanetScale for this project)

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
