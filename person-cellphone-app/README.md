# Person & CellPhone App

This project consists of a Spring Boot backend and an Angular frontend.

## Backend Setup

1.  Navigate to the `backend` folder.
2.  Ensure you have Java 17+ and Maven installed.
3.  Ensure MongoDB is running locally on port 27017.
4.  Run the application:
    ```bash
    mvn spring-boot:run
    ```
    Or open the project in your IDE (IntelliJ, VS Code) and run `DemoApplication.java`.

## Frontend Setup

Since I cannot install the Angular CLI and dependencies for you, please follow these steps to set up the frontend:

1.  **Install Angular CLI** (if not already installed):
    ```bash
    npm install -g @angular/cli
    ```

2.  **Create a new Angular project**:
    Run this command in the `person-cellphone-app` folder (sibling to `backend`):
    ```bash
    ng new frontend
    ```
    -   Would you like to add Angular routing? **Yes**
    -   Which stylesheet format would you like to use? **CSS**

3.  **Copy Source Files**:
    Copy the contents of the `frontend-code/src` folder into the newly created `frontend/src` folder, overwriting existing files if prompted.
    -   Copy `frontend-code/src/app/components` -> `frontend/src/app/components`
    -   Copy `frontend-code/src/app/models` -> `frontend/src/app/models`
    -   Copy `frontend-code/src/app/services` -> `frontend/src/app/services`
    -   Replace `frontend/src/app/app.module.ts` with `frontend-code/src/app/app.module.ts`
    -   Replace `frontend/src/app/app-routing.module.ts` with `frontend-code/src/app/app-routing.module.ts`

4.  **Install Bootstrap** (Optional, for styling):
    Inside the `frontend` folder:
    ```bash
    npm install bootstrap
    ```
    Add `"node_modules/bootstrap/dist/css/bootstrap.min.css"` to the `styles` array in `angular.json`.

5.  **Run the Frontend**:
    ```bash
    cd frontend
    ng serve
    ```
    Open `http://localhost:4200` in your browser.

## Features

-   **Persons**: CRUD operations for Persons.
-   **CellPhones**: CRUD operations for CellPhones.
-   **Association**: Assign a CellPhone to a Person.
