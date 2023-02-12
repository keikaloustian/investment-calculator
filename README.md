# Investment Allocation Calculator
Web app for calculating how many shares of each asset in a portfolio (e.g. stocks, ETFs, etc) should be purchased based on user-defined contribution amount and allocation.  
  
Price quotes (and therefore the calculation feature) are only available for assets in the US, Canada, UK, India and Russia due to limitations of the free API plan.  
  
Design inspired by Questrade.  
  
## Live Demo  
https://investallocator.netlify.app/  
  
## To-do List  
- [x] Bug: remainder % not updating when asset is removed
- [x] Bug: remainder % taking on negative value if slider is moved fast or clicked at value greater than remainder
- [x] Finish AssetCard layout for small screens
- [x] Add rolling ticker tape widget across top  
- [x] Create loading indicator to be displayed while asset price is being fetched  

### Known issues:
* Adding more than one of same asset causes the "Encountered two children with the same key" warning (thus Further Idea #3)
* Ticker Tape 3rd party widget causing SameSite cookie attribute page error  
* Ticker tape showing "Access Denied!" when cold starting the page
  
## Further Ideas  
* Show "No assets found" if the search yields no results
* Save contribution, asset selection and allocation (in cookies?) to facilitate repeated use
* Filter already selected assets from search options
* Implement up & down arrow key navigation through search options
* Explore useMemo hook for functions used in components that render frequently
* Explore useReducer hook for SearchBar component

## Things I Used / Learned About
* Vite
* ~~react-select AsyncSelect component~~
* ~~useContext hook~~
* useRef hook
* stale closures in useEffect() 
* A React component that detects clicks outside of it's DOM subtree (https://stackoverflow.com/a/42234988)
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
![](https://github.com/keikaloustian/investment-calculator/blob/main/docs/InvestCalc_demo.gif)

## Dependencies
* dotenv
* react
* react-dom
* react-icons
* netlify-cli
* node-fetch
* sass
* vite  

