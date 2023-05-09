# Jarrod-McLean-SDK
# LOTR_SDK

The LOTR_SDK is a sample SDK that allows a user to call the Movie endpoint on The One API (https://the-one-api.dev/). The API documentation can be found here: https://the-one-api.dev/documentation.  

## Example

To run the example project:
1. Clone the repo
2. Go to https://the-one-api.dev/sign-up to resister and recieve an Access Token
3. Open the sdk_test project
4. Open the app.ts file and replace <MyAccessToken> with the Access Token you recieved in step 2

At this point you may either run the local code for the SDK that was downloaded from the git repo or you may get the SDK from npm.  The following steps will assume you are getting the SDK from npm as you would in a Production environment.

5. Install the SDK from NPM: npm install @mclejar/lotr_sdk
6. Build the SDK_TEST application: tsc
7. Run the SDK_TEST application: node dist/app.js

This test application calls the movie endpoint and will return the list of all LOTR movies in json format.

## Requirements

LOTR_SDK installed from npm, see step 5 above

## Installation

LOTR_SDK installed from npm, see step 5 above

## Author

Jarrod McLean 

## License

LOTR_SDK is available under the ISC license. 
