# node-cannedio
Canned.IO API Wrapper for NodeJS.

Check the  [node-cannedio API Documentation](https://cannedio.github.io/node-cannedio/) or [REST API Documentation](https://api.canned.io/rest/doc)

## 1 - Signup/Signin
- Access [https://app.canned.io/signup](https://app.canned.io/signup) to create an account.
- After create an account, access [https://app.canned.io/signin](https://app.canned.io/signin) to sign in.

## 2 - Getting the Access Token.
**Notice: Only a superuser account might access the developer tab, make sure you are using a right account and let's get started.**

- Go to the "Settings".
- Click on "Developer" tab.
- Now click on "API Token". This will copy the token.
- Done! Now you have the access token.

## 3 - Using the node-cannedio module.
- Download and install NodeJS in [https://nodejs.org](https://nodejs.org)
- Install the **node-cannedio** module: 
``$npm install node-cannedio``
- Create **canned-test.js** file.
- Paste the following code replacing **MY_API_TOKEN** by your real API Token:
```javascript
const CannedIO = require('node-cannedio');

// try to setup the canned.io module.
const token = 'MY_API_TOKEN';
const setupError = CannedIO.config.setup(token);

// check any error.
if (setupError) {
  console.error('Error on try to setup:', setupError);
  process.exit();
}

// get the user list
CannedIO.api.user
.list()
.then(list => console.log('I got a list with', list.length, 'users'))
.catch(error => console.error('Error on try to load users:', error));

```

- Run ``$node ./canned-test.js``.
- If everything is alright you will see something like this: ``I got a list with 1 users``.
- Check the [node-cannedio API Documentation](https://cannedio.github.io/node-cannedio/) for more details.
- Check also the [REST API Documentation](https://api.canned.io/rest/doc).
