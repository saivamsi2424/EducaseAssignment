This project is a pixel-perfect React JS implementation of the provided Adobe XD design. It showcases a centered mobile app interface with smooth navigation and clean, well-structured code. The application is deployed on a cloud platform and the codebase is publicly available on GitHub.

### Prerequisites

#### UI Prerequisites

<details>
<summary>Click to view</summary>

- What is Adobe XD design?
  - Adobe XD design is refernce design. You can check more info on the <a href="https://xd.adobe.com/view/b68eea25-003d-4a5d-8fdd-d463eeb20b32-e3dd/screen/a516f8e1-a4f2-42a0-b506-92792d076439/" target="_blank">website</a>

</details>

#### Design Files

<details>
<summary>Click to view</summary>

- You can check the **Design Files** for mobile <a href="https://xd.adobe.com/view/b68eea25-003d-4a5d-8fdd-d463eeb20b32-e3dd/screen/a516f8e1-a4f2-42a0-b506-92792d076439/" target="_blank">here</a>.

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>
The app must have the following functionalities

- **Home Route**

  - Intial home page with heading **Welcome to Popx**
  - Description with content **Lorem ipsum dolor sitamet,consectetur adipiscing elit**
  - Button1 with name **Create Account\*** whenever user click this button page should navigate to User Details form page.
  - Button2 with name **Already Registered? Login\*** whenever user click this button page should navigate to Sign in Page.

- **Sign in Route**

  - When the **Already Registered? Login** button in the Home Route is clicked, then the **Sign in Route** view should be displayed as shown in the Adobe XD design.
  - This page should contain Email Address, Password and Login Button as shown in Adobe XD design.
  - Whenever the user click the Login button the page should navigated to Account setting Page.

- **Create Your Accout Rote**

  - This page consist the input fields that are mandatory to create a account.
  - Whenever the user clicked the **Create Account\*** button in Home Route this page should be visible.
  - Whenever user click **Create Account\*** button in this page. Then page should navigate to Account Setting Route.

  **Account Setting Route**

  - This page consist the details of the user.

- ***

- **Routes**

  - `Home` Route should consist of `/Home` in the URL path
  - `SignIN` Route should consist of `/SignIn` in the URL path
  - `CreateAccount` Route should consist of `/CreateAccount` in the URL path
  - `AccountSettings` Route should consist of `/AccountSettings` in the URL path
