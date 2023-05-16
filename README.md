# Developer Challenge for DALI Lab application
This is my submission for the developer challenge for DALI lab. 

This is a very simple image search website which queries both the NASA images API and the Unsplash API to get images based on a search query.

## To run:
If you are not from DALI lab, you will need to put in your own Unsplash API key. You can get one by creating an Unsplash developer account, navigating to "your apps", creating a new application, and using the generated access key. Link here: [Unsplash Developers page.](https://unsplash.com/developers)

You will then need to replace the value for `client-id` found in src/App.jsx in the function `fetchUnsplashImages` with your own access key.

In a terminal window where the current directory is this repository, run the following commands:
        
        npm install
        npm run dev
