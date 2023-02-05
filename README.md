# Investment Allocation Calculator
Web app for calculating how many shares of each asset in a portfolio (e.g. stocks, ETFs, etc) should be purchased based on user-defined contribution amount and allocation.  
  
Price quotes (and therefore the calculation feature) are only available for assets in the US, Canada, UK, India and Russia due to limitations of the free API plan.  
  
Design inspired by Questrade.  
  
## Live Demo  
https://investallocator.netlify.app/  
  
## To-do List  
- [ ] Bug: remainder % not updating when asset is removed
- [ ] Bug: ticker tape shows "Access Denied!" when cold starting the page
- [x] Bug: remainder % taking on negative value if slider is moved fast or clicked at value greater than remainder
- [x] Finish AssetCard layout for small screens
- [x] Add rolling ticker tape widget across top  
- [x] Create loading indicator to be displayed while asset price is being fetched  
Known issue: Ticker Tape 3rd party widget causing SameSite cookie attribute page error
  
## Further Ideas  
* Save contribution, asset selection and allocation (in cookies?) to facilitate repeated use
* Filter already selected assets from search options

## Things I Used / Learned About
* Vite
* ~~react-select AsyncSelect component~~
* ~~useContext hook~~
* ~~useRef() hook~~
* stale closures in useEffect() 
* JavaScript fetch API and async-await syntax
* Using third-party API's and widgets
* Deploying on Netlify
* CSS Grid
* SASS
* Focus, tabindex attribute & accessibility
* onBlur runs before onClick; solution = onMouseDown w/ event.preventDefault()
* Protecting secrets using serverless functions / proxy server and build environment variables
* https://httpstat.us - an "API" that generates all the different HTTP statuses and responses
* https://github.com/public-apis/public-apis - a list of free API's
* https://danielstern.ca/range.css/#/ - a CSS generator for range inputs

## Finished Product  
## Dependencies
* vite
* react-select
* dotenv
* node-fetch
* netlify-cli  

## Setup
