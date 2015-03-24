#Positioning service client

##Instructions

1. Install the rails server by following the instructions under "REST-API" in this repo: https://github.com/hg222dt/positioning_service

2. When you completed the rails server install, retrieve a client api key, by following the instruciton under "Registreringsapplikation" in the same repo. 

3. Retrieve your client specific api-key and add it to this file in this repo: /positioning_service_client/public/js/config.js. Add the key to the "key" value.

3. Clone this repo to your local environment.

4. Run npm install inside the project root folder.

4. You can now run the app by from the project root folder entering the command node app.js.


5. When you run the apps locally, remember to run the rails-server on port 3000 and the client-server on port 4000.

##Functionality

1. Show all registered Doodles. User can click on Doodle card and the specific marker position will appear on map.
2. Search for doodles containing search term.
3. Filter doodle result in terms of username ang tagg.
4. Create an account.
5. Log in to account.
6. Create a Doodle. (For logged in users)
7. Update own Doodle. (For logged in users)
8. Delete own Doodle. (For logged in users)
9. A profile overview of users own Doodles. (For logged in users) User can click on Doodle card and the specific marker position will appear on map.


##What has been changed on the API side since last release?

1. The Rack-CORS gem is now used to allow cross site requests.
2. Changed response to "respond_with" in getDoodleSByTag return.
3. Added methid for getting doodles by username.
4. Fixed method for getting Doodles by username.
5. Now returning doodle_id on recently removed Doodle.
6. Changed return messages when user register, if username och email is already registered.
7. Changed return message when user login, if credentials is not correct.







