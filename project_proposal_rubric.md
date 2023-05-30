# Project Proposal
What is your projects goal and purpose?

## Project name and description
Runway App, version 2!

App takes in personal financial information data from user and returns a chart which tells them how much longer they need to work until retirement.

## Routes and models
Define your routes and what HTTP method they will be using

GET / - Retrieves default runway for default user.

GET /user:id - Retrieves existing user's information and populates it into chart.

POST - Sends user inputted data to database

PUT - updates user data in databased with newly inputted data.

DELETE - deletes user data from database and "closes account"

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


## User Stories
Your user stories are a way to talk about your applications features in the following format:

- A user will sign up by creating a username and password.
- The user will then we allowed to enter their financial information into the input fields and generate a financial runway for themselves.
- Once the runway is created, they will be able to play around with it using the sliders functionality to see different outcomes based on changes
in income, spending, etc.
- when they leave and return, their information will repopulate once they log in again.

Example:
- "As a user I should be able to query `/locations` route to GET all locations"

#### MVP Goals

- Signup flow to onboard new user.
- Upon signup, user is assigned default input values and a chart is auto-generated for them.
- Login flow to log in existing user.
- Upon login, input fields populate with data that user had previously submitted during previous login.

- Inputting data into fields generates a "personal financial runway" chart for user.
- Once data is input, sliders appear and allow user to further toggle their data.
- Chart is dynamic and changes instantly with changes in sliders.

- App is responsive and works in both mobile and desktop. But maybe is "desktop first".

- Get live version on netlify and heroku.


#### Stretch Goals

- Add authentication
- Make chart more polished
- Add in some basic input validation for various input fields