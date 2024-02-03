# Colloquium Website

Colloquium is an annual event by the IEEE Computer Society Kerala Chapter, serves as a premier networking platform for IEEE and non-IEEE professionals. This repository serves as the foundation for our team to build and maintain the Colloquium website.The website developed using NextJS - App Router, TypeScript and Tailwind CSS.

The Live version of the website is available at:

## Scripts

Here are the available scripts for this project:

```bash
npm run dev    # Start the development server at port 8080.
npm run build  # Build the NextJS application for production.
npm start      # Start the production server.
```

## Getting Started

To get started with this project, follow these steps:

1. Clone this repository [https://github.com/Code-Theft/Colloquium-website](https://github.com/Code-Theft/Colloquium-webiste)
2. From the root folder, install the dependencies using: `` `npm install` ``
3. Follow the guidelines provided in this readme.

| **Tools Used** | **Version** |
| -------------- | ----------- |
| Node JS        | >=18.0.0    |
| npm            | >=8.6.0     |

## File Structure

Here is an overview of the project structure:

```js
Colloquium Website
├── public/
│   └── images
├── src/
│   ├── app/
│   │   ├── api
│   │   └── routes/
│   │       ├── layout.tsx
│   │       └── page.tsx
│   ├── common/
│   │   ├── components
│   │   ├── core
│   │   ├── icons
│   │   ├── hooks
│   │   ├── lib
│   │   ├── themes
│   │   ├── utils
│   │   └── fonts
│   ├── styles/
│   │   ├── scss
│   │   ├── bootstrap
│   │   ├── custom
│   │   └── main.scss
│   └── widgets/
│       └── Widgets1/
│           ├── components
│           └── index.ts
└── ...config files
```

### Path Aliases

The following path aliases simplify project organization and moduel imports, promoting code reuseability, maintainability, and consistency.

- `@app` ( points to `/src/app`): Central directory housing all pages and routes for the application.

- `@api` (points to `src/app/api`): Module repository dedicated to API integrations, managing HTTP requests, and handling data retrieval. Facilitates seamless communication between the frontend and backend components.
- `@components` (located at `/src/common/components`): Contains common fuctional components used across multiple sections of the application.

- `@utils` (located at `/src/common/utils`): Contains Utility functions and helper modules designed to streamline and enhance code efficiency.

- `@fonts` (located at `/src/common/fonts`): Repository for custom fonts utilized in the project, ensuring consistent typography throughout the application.

- `@hooks` (located at `/src/common/hooks`): Contains Custom React hooks used to encapsulate and reuse logic across different components.

- `@themes` (located at `/src/common/themes`): Housing themes and styling configurations to maintain a unified visual appearance throughout the application.

- `@styles` (located at `/src/styles`): Centralized location for managing styles, including global styles and styling utilities.

- `@widgets` (located at `/src/widgets`): Collection of reusable and modular UI widgets to facilitate consistent design patterns.

## Creating Commit Message

Creating well-formatted commit messages is crucial for effective version control. Adhering to the specified pattern, each commit should follow the structure: `type: commit message`.
Utilizing the type prefix in your commit messages is vital for clear communication. Common prefixes include:

- `feat` Introducing a new feature
- `fix` Fixing a bug.
- `refactor` A code change that neither adds a feature nor fixes bugs
- `style` A changes made to the CSS module only
- `build` A code change that affect the build systems or external dependencies.

## Creating a Pull Request

- PR shall be raised from a specific branch to the `master` branch. The branch name shall be in the format: `branch/[AUTHOR_NAME]`
- PR titles are expected to be meaningful, providing clear insights into the changes introduced.
- The PR description should include the following details:
  - **Packages Added:** Enumerate all newly added packages to the project.
  - **Build Status:** Include a screenshot of the build status to verify that the production environment remains unaffected.
  - **Output:** Attach a screenshot capturing the development environment for comprehensive review.

  ![PR example](/public//images/samplePR.png)


