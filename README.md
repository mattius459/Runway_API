# Project 2 - Runway!

## Overview Description

My app is called "Runway". It is an app for those aspiring to get a better hold on their own personal finances in a way that is personalized, engaging, and educational. In a nutshell, it allows users to input information pertaining to their own financial situation and it computes a "personal financial runway" for them which calculates when they might be able to retire.

## Technology Used

- HTML
- CSS
- Javascript
- MongoDB
- Mongoose
- Express
- Nodejs
- Plotly


## MVP goals

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

### Routes

/create -creates new user
/logIn - logs in existing user
/update - updates user financial data
/deleteUser - deletes user data from DB

### Getting Started

- Go to https://silly-centaur-bb26e0.netlify.app/index.html


### Next steps

I intend to:

- Get Age working
- Get better UX
- Make sliders for advanced configs
- Add in EEA computation to chart
- Add in EEA line into chart
- Fix many bugs