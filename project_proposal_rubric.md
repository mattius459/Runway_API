# Project Proposal
An app to help people financially empower themselves.

## Project name and description
Runway App, version 2!

App takes in personal financial information data from user and returns a chart which tells them how much longer they need to work until retirement

## Routes and models
Define your routes and what HTTP method they will be using

GET / - Retrieves default runway for default user

GET /user:id - Retrieves existing user's information and populates it into chart

POST /create - Sends user inputted data to database

PUT /update - updates existing user data in database with newly inputted data

DELETE /remove - deletes user and their data from database.

User financial data model:

userID: number //(unique number ID of user)
Age: number //(current age of user)
MNI: number //(monthly net income)
MS: number //(monthly spending)
TA: number //(total assets)
ER: number //(expected return on investments)
EI: number //(expected inflation)
EEA: number //(expected entitlements age)
LE: number //(life expectancy)

User credentials data model:

userName: String
password: String
userID: number //(unique number ID of user)

SP500 data model:

Date: datetime
value: number
YoY_return: number

Provided by: https://rapidapi.com/apidojo/api/yahoo-finance1


## User Stories

- A user will sign up by creating a username and password.
- The user will then we allowed to enter their financial information into the input fields and generate a financial runway for themselves.
- Once the runway is created, they will be able to play around with it using the sliders functionality to see different outcomes based on changes
in income, spending, etc.
- when they leave and return, their information will repopulate once they log in again.
- User will be able to update their existing data
- User will be able to delete data

#### MVP Goals

- Signup flow to onboard new user.
- Upon signup, user is assigned default input values and a chart is auto-generated for them.
- Login flow to log in existing user.
- Upon login, input fields populate with data that user had previously submitted during previous login.

- Inputting data into fields generates a "personal financial runway" chart for user.
- Once data is input, sliders appear and allow user to further toggle their data.
- Changes to user data via sliders are sent to DB and updated.
- Chart is dynamic and changes instantly with changes in sliders.

- App is responsive and works in both mobile and desktop. But maybe is "desktop first"

- Add in some basic input validation for various input fields

- Get live version on netlify and heroku

- Expected return default value will be the average of returns over history as pulled from an outside API.
- Expected return changes according to the age that the user inputs... getting more pessimistic with the younger the user.

#### Stretch Goals

- Add authentication
- Add in more beter input validation for more input fields
- Make chart more attractive/polished
- Make overall app more attractive/polished

- Expected inflation default value will be the average of inflation over history as pulled from an outside API.
- Expected inflation changes according to the age that the user inputs... getting more pessimistic with the younger the user.