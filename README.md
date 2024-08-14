# Fullstack Example with Next.js and SingleStore Kai (REST API)

This example demonstrates how to implement a **fullstack app with [SingleStore Kai](https://www.singlestore.com/cloud-database/), [Next.js](https://nextjs.org/)** using [React](https://reactjs.org/) (frontend), [Express](https://expressjs.com/) and [Prisma Client](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client) (backend). It uses SingleStore's MongoDB compatibility layer to work with Prisma ORM.

## Prerequisites

- [SingleStore](https://www.singlestore.com/) account
- [Node.js](https://nodejs.org/en/download/) (v14 or higher)
- [Yarn](https://yarnpkg.com/getting-started/install) or [npm](https://www.npmjs.com/get-npm)

## Setup Steps

1. **Clone the repository**

   ```
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies**

   ```
   yarn install
   # or
   npm install
   ```

3. **Enable SingleStore Kai for your workspace**
   
   - Log in to your SingleStore account
   - Navigate to your workspace
   - Enable the Kai feature for MongoDB compatibility

4. **Set up environment variables**

   Create a `.env` file in the root directory and add your SingleStore Kai connection string:

   ```
   DATABASE_URL="mongodb://admin:YourPassword@your-singlestore-kai-url:27017/your_database?authMechanism=PLAIN&tls=true&loadBalanced=true"
   ```

   Replace `YourPassword`, `your-singlestore-kai-url`, and `your_database` with your actual credentials and database name.

5. **Push the Prisma schema to your database**

   ```
   npx prisma db push
   ```

6. **Generate Prisma Client**

   ```
   npx prisma generate
   ```

7. **Seed the database (optional)**

   ```
   npx prisma db seed
   ```

8. **Run the development server**

   ```
   yarn dev
   # or
   npm run dev
   ```

9. **Open the app**

   Your app should now be running on [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel

You can deploy this app to the cloud with [Vercel](https://vercel.com/) ([Documentation](https://nextjs.org/docs/deployment)).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcockroachdb%2Fprisma-examples%2Ftree%2Flatest%2Fjavascript%2Frest-nextjs&integration-ids=oac_h3yNIuHlhe4j9QVzVJ3TS2W0&build-command=yarn%20prisma%20db%20push%20%26%26%20yarn%20next%20build)

## Notes

- This example uses SingleStore's MongoDB compatibility layer (Kai) to work with Prisma ORM. Some MongoDB-specific features may not be available or may work differently.
- Ensure that your SingleStore Kai instance is properly configured for production use, including setting up appropriate security measures and scaling options.
- Remember to update your environment variables in your deployment environment (e.g., Vercel) to match your production database credentials.

## Learn More

To learn more about the technologies used in this example:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [SingleStore Documentation](https://docs.singlestore.com/) - learn about SingleStore features and API.
- [Prisma Documentation](https://www.prisma.io/docs/) - learn about Prisma ORM.
- [React Documentation](https://reactjs.org/docs/getting-started.html) - learn about React.

## Feedback and Issues

If you encounter any issues or have feedback, please file an issue in the GitHub repository.
