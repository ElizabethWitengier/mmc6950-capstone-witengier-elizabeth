This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## About

Mockup Company is a progressive wellness application that aims to enhance mental, emotional, and physical well-being through diverse practices and products. We believe in the transformative power of art therapy, meditation, and yoga and have created a seamless platform to provide individuals with convenient access to these practices anytime, anywhere.

Our unique and proprietary art therapy program encourages self-expression and creativity, enabling users to explore their emotions and promote healing through various art forms. Through guided exercises and interactive tools, individuals can harness the therapeutic benefits of art to reduce stress, increase self-awareness, and foster personal growth.

Meditation is central to our wellness application, offering a sanctuary of calm in today's fast-paced world. Our platform provides a wide array of guided meditations, breathing exercises, and mindfulness practices to help users find inner peace, improve focus, and cultivate emotional balance. Whether you're a beginner or an experienced meditator, Mockup Company offers tailored programs to suit every individual's needs.

Yoga is an integral part of our holistic approach to well-being. We offer a comprehensive collection of yoga sessions, from gentle flows to restorative practices, led by experienced instructors. Our yoga programs cater to all levels, allowing users to strengthen their bodies, improve flexibility, and achieve a state of harmony between mind, body, and spirit.

In addition to our wellness programs, Mockup Company provides a curated selection of products to enhance the wellness journey. From high-quality yoga apparel and props to art supplies and meditation aids, we ensure users can access the best tools and resources to support their practice.

## Labeling: N2H
Many features would be nice to have; however, the focus for minimum viable product (MVP) components will be the focus of the capstone project. The features that may be sidelined will be marked as `nice to have (N2H).`

## Labeling: L8R
While our platform presents a robust framework for these practices, developing unique content for the art therapy component further and providing insightful articles and engaging blog posts will take longer than the capstone project timeline. These components will be marked as `later (L8R).`

## MVP: Outline
Home Page:
- Welcome message and a brief introduction to the website's offerings.
- Highlight featured content, such as popular yoga or meditation sessions, new blog articles, or product promotions.
- Sign-up form for the newsletter.
- Account log-in or sign-up

About Us Page:
- Provide information about the website, its mission, and the team behind it.
- Highlight the benefits of art therapy, yoga, and meditation for wellness and stress relief.

Contact Us Page:
- Contact form for users to submit inquiries, requests, or feedback. `(N2H)`
- Display contact information, such as email address or phone number.

Product Shop:
- Categorized listing of products related to wellness, art therapy, yoga, and meditation. `(N2H)`
- Product details, including images, descriptions, prices, and add-to-cart functionality. `(N2H)`
- Shopping cart page for users to review and manage their selected products. `(N2H)`
- Integration with a payment gateway to enable secure transactions. `(N2H)`

Art Therapy Section:
- Categorized listing of art therapy resources, such as tutorials, exercises, or courses. `(L8R)`
- Detailed information for each resource, including descriptions and associated images or files. `(L8R)`
- Users can save their favorite art therapy resources to their accounts. `(L8R)`

Yoga Section:
- Categorized listing of yoga videos based on time, type of yoga category, and difficulty level.
- Video player to stream yoga sessions.
- The ability for users to save their favorite yoga videos to their accounts.

Meditation Section:
- Categorized listing of meditation videos based on time and category.
- Video player to stream meditation sessions.
- The ability for users to save their favorite meditation videos to their accounts.

Account Section:
- User authentication and registration functionality.
- User profile management, including personal details and account settings.
- Favorites page to view and manage saved yoga videos, meditation videos, and art therapy resources.

Personalization:
- Option for users to select their interests and preferences for wellness.
- Data storage to track user preferences and customize content recommendations accordingly.

Newsletter Subscription:
- Sign-up form for users to subscribe to the weekly newsletter. `(N2H)`
- Ability to manage newsletter subscriptions within the user account section. `(N2H)`

Subscription Services:
- Provide information about different subscription options available for users. `(N2H)`
- Display details about each subscription plan, such as benefits, pricing, and duration. `(N2H)`
- Allow users to select and subscribe to a desired subscription plan. `(N2H)`
- Integration with a payment gateway to enable secure subscription transactions. `(N2H)`
- The ability for users to manage their subscription details within their account section. `(N2H)`
- Enable users to provide feedback on their experience with the subscription services. `(N2H)`

Article Reviews:
- Allow users to leave ratings for articles and blog posts. `(L8R)`
- Enable users to provide feedback on the quality and helpfulness of the content. `(L8R)`
- Display overall ratings for each article on the article page. `(L8R)`

## MVP: Technology
- Next.js (React +Node.js)
- MongoDB (database)
- Vercel (deployment)
- TailwindCSS (formatting)


## MVP: Data to Store
- User account information (name, email, password, etc.)
- User preferences and selected interests
- Product details (name, description, price, images, etc.) `(N2H)`
- Art therapy resources (name, description, images, files, etc.) `(L8R)`
- Yoga videos (name, description, duration, category, difficulty level, video URL, etc.)
- Meditation videos (name, description, duration, category, video URL, etc.)
- User favorites (saved yoga videos, meditation videos, and art therapy resources)
- Subscription details (name, description, pricing, benefits, duration, feedback, etc.) `(N2H)`
- Article details (title, content, images, author, publication date, etc.) `(L8R)`
- Article reviews (user ID, article ID, rating, etc.) `(L8R)`

## MVP: API Endpoints
- User authentication and registration endpoints.
- Product-related endpoints for listing, searching, and retrieving product details. `(N2H)`
- Art therapy-related endpoints for listing and retrieving art therapy resources. `(L8R)`
- Yoga-related endpoints for listing and retrieving yoga videos.
- Meditation-related endpoints for listing and retrieving meditation videos.
- User profile and account management endpoints.
- Endpoints for saving and retrieving user favorites.
- Newsletter subscription endpoints. `(N2H)`
- Subscription-related endpoints for listing, retrieving, and managing subscription options. `(N2H)`
- Subscription review endpoints for submitting and retrieving subscription feedback. `(N2H)`
- Article-related endpoints for listing, retrieving, and managing articles and blog posts. `(L8R)`
- Article review endpoints for submitting and retrieving article reviews. `(L8R)`
