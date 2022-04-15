const app = require('../index')
const request = require('supertest');
const { customersDatabaseClear, invoicesDatabaseClear, usersDatabaseClear } = require('./utils');
const { createCustomer, getAllCustomer } = require('./customer');
const { createInvoice } = require('./invoice');
const { signup, signin } = require('./auth');

// describe('User register and login', () => {
//     test("User create account with email and password receive json web token", async () => {
//         await signup(app, request)
//     })
//     test("User signin with email and password receive json web token", async () => {
//         await signin(app, request)
//     })

//     afterAll(() => {
//         usersDatabaseClear()
//     })
// })

describe('Get list of customers for one user', () => {
    beforeAll(() => {
        signup(app, request)
        createCustomer(app, request)
    })

    test("Get all customers", async () => {
        await getAllCustomer(app, request)
    })

    afterAll(() => {
        usersDatabaseClear()
        customersDatabaseClear()
    })
})

/*
describe("Customer tests", () => {
    test('Create new customer', async () => {
        await createCustomer(app, request)
    })

    test("Get all customers", async () => {
        await getAllCustomer(app, request)
    })

    afterAll(() => {
        customersDatabaseClear()
    })
})

describe('Create a new invoice', () => {
    test('Create new invoice', async () => {
        await createInvoice(app, request)
    })

    afterAll(() => {
        customersDatabaseClear()
        invoicesDatabaseClear()
    })
})
*/
