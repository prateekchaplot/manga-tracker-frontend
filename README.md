# Manga Bookmarker

- Install linter by running `ng lint`

## Install packages:
- [primeng](https://primeng.org/installation)
- [primeflex](https://primeflex.org/installation)
- [primeicons](https://primeng.org/icons)

```
$ npm i primeng primeflex primeicons

/** file: styles.scss **/
@import "primeng/resources/primeng.css";
@import "primeflex/primeflex.css";
@import "primeicons/primeicons.css";

@import "primeng/resources/themes/lara-light-blue/theme.css";
```

## Folder structure
```
src/
├── app/
│   ├── core/
│   │   ├── services/
│   │   ├── guards/
│   │   ├── interceptors/
│   │   ├── models/
│   │   └── utils/
│   ├── features/
│   │   ├── feature1/
│   │   │   ├── components/
│   │   │   ├── containers/
│   │   │   ├── services/
│   │   │   ├── feature1.module.ts
│   │   │   └── feature1-routing.module.ts
│   │   └── feature2/
│   │       ├── components/
│   │       ├── containers/
│   │       ├── services/
│   │       ├── feature2.module.ts
│   │       └── feature2-routing.module.ts
│   ├── shared/
│   │   ├── components/
│   │   ├── directives/
│   │   ├── pipes/
│   │   └── shared.module.ts
│   ├── app-routing.module.ts
│   ├── app.component.ts
│   ├── app.module.ts
│   └── app.component.html
├── assets/
│   ├── images/
│   └── styles/
├── environments/
│   ├── environment.ts
│   ├── environment.prod.ts
│   └── environment.staging.ts
├── styles/
│   └── global-styles.scss
├── index.html
├── main.ts
├── polyfills.ts
├── styles.scss
├── test.ts
└── tsconfig.app.json
```

### Breakdown of the Folder Structure:

- **`app/`**: Contains the main application code.
  - **`core/`**: Holds singleton services, guards, interceptors, models, and utility classes that are used across the app.
    - **`services/`**: For core services that can be used app-wide.
    - **`guards/`**: For route guards.
    - **`interceptors/`**: For HTTP interceptors.
    - **`models/`**: For TypeScript interfaces and classes that define the shape of data.
    - **`utils/`**: For utility functions and classes.
  - **`features/`**: Modular sections of the app, where each feature can have its own module, components, and services.
    - **`feature1/`**: Contains files related to Feature 1.
      - **`components/`**: Feature-specific UI components.
      - **`containers/`**: Feature-specific container components that manage state and interact with services.
      - **`services/`**: Feature-specific services.
      - **`feature1.module.ts`**: Feature-specific module file.
      - **`feature1-routing.module.ts`**: Feature-specific routing configuration.
    - **`feature2/`**: Contains files related to Feature 2 (similar to Feature 1).
  - **`shared/`**: Commonly used components, directives, pipes, and modules that are shared across features.
    - **`components/`**: Shared components.
    - **`directives/`**: Custom directives.
    - **`pipes/`**: Custom pipes.
    - **`shared.module.ts`**: Module that declares and exports shared components, directives, and pipes.
  - **`app-routing.module.ts`**: Main routing configuration for the application.
  - **`app.component.ts`**: Root component of the application.
  - **`app.module.ts`**: Root module of the application.
  - **`app.component.html`**: Root component's template.

- **`assets/`**: Contains static assets like images and styles.

- **`environments/`**: Contains environment configuration files for different deployment environments (e.g., development, production, staging).

- **`styles/`**: Global styles for the application.

- **`index.html`**: The main HTML file.

- **`main.ts`**: The entry point of the application.

- **`polyfills.ts`**: Polyfills needed for supporting different browsers.

- **`styles.scss`**: Global stylesheet for the application.

- **`test.ts`**: Configuration file for unit tests.

- **`tsconfig.app.json`**: TypeScript configuration specific to the Angular app.

This structure promotes modularity, separation of concerns, and easier maintenance as your application grows. You can adjust it based on the specific needs of your project or team preferences.

## Deploy
ng deploy --repo=https://github.com/<username>/manga-tracker-frontend.git --name="Your Git Username"