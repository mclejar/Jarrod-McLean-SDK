# Design of LOTR_SDK

LOTR_SDK has the following design goals:
- Provide an easy to use interface to The One API
- To allow developers to use auto complete in their local programming language
- To be performant and easily extensible

# Philosophy

This project is a simple proof of concept SDK for The One API.  It allows a user to make a single call to retrieve the list of Movies and their details based on the LOTR.  This SDK allows the developer to make a simple call and not worry about the details of making the http call, the security, the error handling and any other complexities the SDK may handle for the developer.

# Design Patterns

The design pattern of this project is a simple base class that handles the http request and error handling.  Concrete instances of the class allow the full suite of API's to be easily implemented.  This project does not take into account many things that a Production SDK would handle.  

## Included in the SDK

1. SDK Code
2. Documentation
3. Available test application

## Not included in the SDK

This SDK is not a Production ready implementation.  In order to be Production ready we would need to implement, or decide not to implement depending on the API the following:

1. Tests
2. Logging and Analytics reporting to server
3. Full error and exception handling and proper error response to the client app
4. Proper initialization to the server allowing for the server to control aspects of the SDK
5. Retry
6. Restart
7. SDK Updates
8. Cacheing
9. Rate Limiting
10. Paging
11. Filtering
12. Locale handling, translation
13. GDPR, SOC 2, HIPPA, etc... depending on the field the API is in

