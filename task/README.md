## Problem Description:

Given a requirement to build a system where
∙ A user can create an account
∙ A user can fund their account
∙ A user can transfer funds to another user’s account
∙ A user can withdraw funds from their account.
Your task is to present
A readme design document for your implementation
An implementation of the project (NodeJS API only)
Notes
1. You may not bother about building a full authentication system, a faux token
   based authentication will suffice.
2. Ensure to write unit tests for the project
3. Using Typescript should be an added advantage

Tech Stack
● NodeJS (LTS version)
● KnexJS ORM
● MySQL database
● Typescript (optional)
  Submission mode:
● Deploy the API on heroku or any free hosting cloud server
● Share the API postman collection public URL
● Share the Github Repo URL

- COLLECTION 1 - transactions
  - reference (unique)
  - senderAccount nr
  - amount
  - receiverAccount nr
  - transferDescription
  - createdAt
  - updatedAt

- COLLECTION 2 - balances
  - account nr (unique, 10 digits)
  - balance (each user should get 5000 when they create an acct)
  - createdAt
  - updatedAt
  - userId

- COLLECTION 3 - users
  - firstName
  - lastname
  - DOB
  - email (unique)
  - phone number (unique)

The transaction Collection registers any transaction in an account (ie. today I paid N2000 for a movie with my card), the balances table represents the account balance of customers (ie. I have N50k in my bank account). If a sender is trying to make a transaction of an amount of money more than his current balance, an error should be returned indicating insufficient funds
The API you are to develop should be able to handle a transfer request of the form below and updates the transactions/balances table accordingly.

```
{
    senderAccount: account,
    receiverAccount: account,
    amount: money,
    transferDescription: transfer description
}
```

### Endpoints to test

| Method | Endpoint                           | Enable a user to:                                            |
| :----- | :--------------------------------- | :----------------------------------------------------------- |
| POST   | /signup                            | Enable user signup |
| POST   | /login                             | Enable user to login |
| POST   | /create-account                    | Enable user to create an account stored in the balance collection |
| GET    | /balance/:accountNumber            | Getting balance for a particular account number              |
|        | /balance/:userId                   | Getting balance for a particular user                        |
| GET    | /balance                           | Getting all accounts and their balance                       |
| POST   | /transfer                          | To make a transaction to another account                     |
| GET.   | /transaction/:accountNumber        | gets all transactions of a particular user                   |
| GET.   | /transaction/credit/:accountNumber | gets all credit transactions of a particular user            |
| GET.   | /transaction/debit/:accountNumber  | gets all debit transactions of a particular user             |

