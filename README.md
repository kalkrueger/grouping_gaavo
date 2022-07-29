# grouping_gaavo

Run Application:
  From the command line:
    1. clone this repo - `git clone https://github.com/kalkrueger/grouping_gaavo.git`
    2. navigate to the cloned repo - `cd grouping_gaavo`
    3. install dependencies - `npm install`
    4. run app using the start script - `npm start`
    5. You will be prompted to enter fare and possessed pieces of Gaavo via the
      command line

Testing Application:
  - Once the application is cloned and `npm install` has been run you can test the
    application by running `npm test` on the command line from within the repo
  - The tests are executed using Jest and additional tests can be added in the
    `tests` folder

Assumptions made while creating this application:
  - Gaavo are only distributed in integers greater than zero
  - Fares are only set using integers greater than zero
  - Gaavo and fares can be any amount as long as they are positive integers

Addition functionality that can be added:
  - Functionality for a user to erase the last input if it is wrong
  - Loop to calculate multiple fares in the same session
	  - remove used pieces of Gaavo from `pieces` array
  - Logic to group like pieces together
	  - e.g. if there are two 3G pieces being used to make 6G respond with
     ’two 3G pieces’ instead of ‘3G and 3G’
  - Logic to implement a minimum length of combinations to check
    - e.g. if the fare is 150G and the descending order of Gaavo entered is
     [70, 50, 20, 15, 5, 5, 2, 1] none of the combinations of a length of 3
     or less need to be checked
