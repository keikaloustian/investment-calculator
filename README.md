# Investment Allocation Calculator
Web app for calculating how many shares of each asset in a portfolio (e.g. stocks, ETFs, etc) should be purchased based on user-defined contribution amount and allocation.  
  
Price quotes (and therefore the calculation feature) are only available for assets in the US, Canada, UK, India and Russia due to limitations of the free API plan.  
  
Design inspired by Questrade.  
  
## Live Demo  
https://investallocator.netlify.app/  
  
## To-do List  
- [ ] Update remainder % when an asset is removed
- [ ] Finish styling AssetCard
- [ ] Add rolling ticker tape widget across top  
  
## Further Ideas  
* Save contribution, asset selection and allocation in cookies to facilitate regular use
* Filter already selected assets from search options

## Things I Learned
* Vite
* react-select (mainly the AsyncSelect component)
* useContext hook
* JavaScript fetch API and async-await syntax
* Using third-party API's
* Deploying on Netlify
* CSS Grid
* SASS
* Protecting secrets using serverless functions / proxy server and build environment variables
* https://httpstat.us - an "API" that generates all the different HTTP statuses and responses
* https://github.com/public-apis/public-apis - a list of free API's

## Finished Product  
## Dependencies
* vite
* react-select
* dotenv
* node-fetch
* netlify-cli  

## Setup
