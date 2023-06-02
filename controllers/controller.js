import userCredentials from '../models/userCredentialsModel.js'
import userFinancialData from '../models/userFinancialDataModel.js'

const create = async (req, res) => {
    
    const proposedUserEmail = await userCredentials.find({ userEmail:  req.body.userName});
    //Check if username already exists in DB
    if (Object.keys(proposedUserEmail).length === 0) {
        console.log('Username does not already exist in DB.');

        //Create new user in financials collection with default Bob Financial Data
        const newUserFinancials = new userFinancialData({
            Age: 26,
            MNI: 4000,
            MS: 3000,
            TA: 25000,
            ER: 0.09,
            EI: 0.04,
            EEA: 67,
            LE: 90
        })
        await newUserFinancials.save()

        //Create new user in credentials collection and set userFinancialData to the newly created _id above
        const newUserCreds = new userCredentials({
            userEmail: req.body.userName,
            userPassword: req.body.password,
            userFinancialData: newUserFinancials._id
        })
        await newUserCreds.save()

        //Pull out _id of this newly created User to apply to financials collection below
        let userID;
        try {
            const docs = await userCredentials.find({ userEmail: req.body.userName }, '_id');
            if (docs.length > 0) {
              userID = docs[0]._id;
            } else {
              console.log('No matching record found');
            }
          } catch (error) {
            console.error(error);
          }

        res.send("Account Created")

      } else {
        res.send("Username already exists, try again")
      }
}

const logIn = async (req, res) => {
  //Check username and see if it matches a PW
  let userEmail =  req.body.userName
  let userProvidedPassword =  req.body.password
  const userObject = await userCredentials.find({ userEmail:  userEmail});
  if (Object.keys(userObject).length === 0) {
    
    console.log('Username does not exist');
} else {
  let DB_password = userObject[0].userPassword
  if (Number(userProvidedPassword) === DB_password) {
    //Build an object that sends the 3 things

    const userFinancialsObject = await userFinancialData.find({ _id:  userObject[0].userFinancialData});

    const responseObject = {
      userEmail: userObject[0].userEmail,
      message: "Log in successful... rerouting to homepage",
      loggedIn: true,
      MNI: userFinancialsObject[0].MNI,
      MS: userFinancialsObject[0].MS,
      TA: userFinancialsObject[0].TA,
      ER: userFinancialsObject[0].ER,
      EI: userFinancialsObject[0].EI,
      EEA: userFinancialsObject[0].EEA,
      LE: userFinancialsObject[0].LE

    };
    res.send(responseObject)

  } else {
    res.send("Log in unsuccessful. Try again")
  }

  }
}

//export default create;
export { create, logIn}