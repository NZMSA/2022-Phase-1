# 2022 React Workshop

Welcome to the React workshop!

Note that if you have not already, it is highly suggested you complete [this learning path](https://docs.microsoft.com/en-us/learn/paths/react/) before attempting this workshop.

## Requirements:

* [Visual Studio Code](https://code.visualstudio.com/) - Code editor.
* [Git](https://git-scm.com/) - Version Control system software.
* [GitHub Account](https://github.com/) - For hosting & storing your projects.
* [NodeJS v16](https://nodejs.org/en/download/) - We are using version 16 Node for this project.

## Contents:

* A sample project demonstrating the usage of components.
* This `README.md`.

## Recap:

This react project consists of basic implementations of what you have learnt when you completed the React learning path. Feel free to play around with the existing implementations in this project.

To get started with playing with this react project:

1. Open a terminal in this directory and install libraries via:
```bash
npm install
```

2. Start the application via:
```bash
npm start
```

3. You should see some UI elements. Feel free to play around, make changes and explore the source code.

Suggested starting points to change for interest:

1. Change the string `A hard-coded value` to another word or sentence(s) and watch the value property of `SampleComponentWithProps` change in the app.
```jsx
<SampleComponentWithProps value={'A hard-coded value'} />
```

2. Change the number `8` to another integer in the numberOfButtons value property of `ButtonBoard` and see the number of buttons spawn in the app.
```jsx
<ButtonBoard numberOfButtons={8} />
```
Note: You may also noticed that the project is using TypeScript instead of JavaScript. You can still use some JavaScript here but TypeScript is preferred mainly because of its ability to enforce type checking.

## Assignment:

Fork the [2022 Phase 1 React Assignment Repository](https://github.com/NZMSA/2022-Phase-1-React-Assignment) and follow the instructions in its README to complete the assignment. You can also choose to submit your entry to win prizes.

## Submission guidelines:

The submission is to be done as a pull request to the `2022-Phase-1-React-Assignment` main branch.

The submission is deemed valid if it:
- [ ] Passed all test cases.
- [ ] Does not show any changes in `App.test.tsx` and any `.yml` files.
- [ ] Has no changes to the version of existing (you may install new ones) libraries.
- [ ] Is actually usable.

The **first 3 users** to make a __valid submission__ with their __accessible emails__ posted as a comment will **win swags**. We will be contacting winners via the email listed in the pull request submission.

## Extras:

While the react learning path tells you a manual way to setup the react application structure, there are template react projects that you can use to get started. 

Run this command to create a template React JavaScript project:
```bash
npx create-react-app your_project_name
```

or a template React TypeScript project:
```bash
npx create-react-app --template typescript your_project_name
```

That will create the respective templates in a directory named `your_project_name`.