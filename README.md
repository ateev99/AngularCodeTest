## INSTALLATION INSTRUCTIONS

## AngularCodeTest (Steps to install)
1. Open CMD. Clone the from GIT ()
2. Change directory to AngularCodeTest
3. Hit command a npm install.
4. Hit command ng build
5. Hit command ng serve
6. Application would open in browser, select region then country

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## What could be improved, if i had time (time take to build: 6 hours)
1. Usage of CSS in a better way.
2. Addition of karma test cases.
3. Usage of NGRX store to retrieve information. [NOTE: Currently information is stored but NOT retrieved. Select query not working, needs debugging]
4. Making table display more generic rather than hard coding.
5. More imporved changed detection technique for dropdown components thus increasing reusability.

## flow of application
1. Parent component is app.component.
2. Child component for dropdown is region.component
3. Child component for table is country-details.component. 
