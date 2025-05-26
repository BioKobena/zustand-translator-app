# Multi app language with Zustand

This is an multi app language that I have create with one of best global state management :  [Zustand](https://zustand-demo.pmnd.rs/).

You can use Zustand to translate your app in multiple languages. It's a small and fast state management library that is easy to use and has a simple API. Zustand is a great choice for managing the state of your app, especially if you are using React.

## Getting started

1. Install dependencies

   ```bash
   npm install zustand
   ```

   ```bash
   npm i react-native-i18n
   ```

   or

   ```bash  
   yarn add zustand
   ```

2. Create your files for me I use `fr` (`fr.json`) and `en` (`fr.json`) as the languages.
   Create a new folder called `locales` in the root of your project and add the following files:

   - `en.json`
   - `fr.json`

   The structure of the files should look like this:

   ```json
   {
     "greeting": "Hello"
   }
   ```

   ```json
   {
     "greeting": "Bonjour"
   }
   ```

   The `en.json` file contains the English translations and the `fr.json` file contains the French translations.
   You can add as you want some different translation of your app.
   Don't forget that in your json files, you must have the same keys. (for example `greeting` in both files). The structure must be like this :

   ```json
   {
     "greeting": "Hello",
     "welcome": "Welcome to my app"
   }
   ```

   ```json
   {
     "greeting": "Bonjour",
     "welcome": "Bienvenue dans mon application"
   }
   ``

3. Create your store
   Create a new file called `useLanguageStore.ts` me I have use as name : languageStore.ts (`you can use the name that you want`)in the root of your project and add the following code:

4. In your settings or where you want, you can create a button to change the language. `An example in the index.tsx`

5. Launch the app to see the result, very simple 😎
   ```bash
   npx expo start
   ```
`Made by KobeJS`