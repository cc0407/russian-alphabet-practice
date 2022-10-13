# Gatsby-Tailwind-Typescript-GHPages-Template
Boilerplate for React using Gatsby, Tailwind, Typescript, and GHPages. I need these packages very frequently so I created a project template.

## Usage
- "Use Template" through Github.
  - There should be a button somewhere on this page.
  - Make sure to copy all branches!
- Give the repo a name and description.
- Change pathPrefix at end of `gatsby-config.js` to the name of your repo.
  - Used for GHPages.
  - This isnt necessary, but will publish to a subdomain such as `username.github.io/reponame`
- Change site metadata using variables at start of `gatsby-config.js` to match your information.
- cd into your project directory
- Run `npm install`
- Run `npm run develop` to create a localhost live site on port 8000.
- You're all set!

## Other packages included
- react-anime v4.1.1
- react-helmet v6.1.0
- react-icons v4.4.0
- prettier v2.7.1
- react-switch v7.0.0

## Custom NPM Commands
- `npm run build`
  - Cleans and builds a static version of your site in the public directory of your project.
- `npm run develop` or `npm run start`
  - Starts a development server to view live changes to your code on port 8000.
- `npm run format`
  - Uses prettier to format all code files in the project.
- `npm run serve`
  - Starts an http server to view the final built version of the site on port 9000.
  - Uses the static version of the site created using `npm run build` 
- `npm run deploy`
  - Builds a static version of your site and pushes it to the GHPages branch of your repo.
- Additional commands can be found near the bottom of `package.json`

## Adding a Custom Logo
- Your logo can be added as `logo.svg` inside of `static/`
  - This will automatically pull into `gatsby-config.js`
- If you would like a logo in the Nav bar, it can be added to the `src/img` directory
  - Update `MainLogo.tsx` inside `src/components/Img/` with the logo and its alt text

## Using a Custom Font
- Custom fonts can be imported from [Fontsource](https://fontsource.org/fonts)
- To use a custom font:
  - run `npm install @fontsource/FONTNAME`
    - `@fontsource/FONTNAME` will be the same as the import statement provided by fontsource's documentation for each font
    - i.e. [Aileron](https://fontsource.org/fonts/aileron)
  - import the font into `gatsby-browser.js`
    - A comment is provided in the file indicating where to place it
  - The new font must be included in `tailwind.config.js`
    - Search for `fontFamily:` and place inside that object
- A sample custom font (Aileron) is provided so you can see how to use this feature
  - Process is detailed below:
    - run `npm install @fontsource/aileron`
    - Add `require("@fontsource/aileron");` to `gatsby-browser.js`
    - Add `aileron: "Aileron",` under `fontFamily:` in `tailwind.config.js`

## Adding New CSS Files
- CSS files can be added under `src/css/components/*.css`
- They must also be imported inside `src/css/components.css` inside of the layer object 
  - A comment is provided there to show where to put it
- They must also be imported inside `gatsby-browser.js` 
  - A comment is provided there to show where to put it

## Using Google Analytics or Google Tag Manager
- If you want to use these, please uncomment their respective plugins from `gatsby-config.js`
- There are 3 variables provided at the top of `gatsby-config.js` that allow you to input google IDs for the following
  - Google Analytics
  - Google Ad Words
  - Google Tag Manager
