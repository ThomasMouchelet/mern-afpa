const app = require('../index')
const request = require('supertest');
const { customersDatabaseClear, invoicesDatabaseClear } = require('./utils');
const { creatUser, getAllUser } = require('./user');
const { createInvoice } = require('./invoice');

describe("User tests", () => {
    test('Create new customer', async () => {
        creatUser(app, request)
    })

    test("Get all customers", async () => {
        getAllUser(app, request)
    })

    afterAll(() => {
        customersDatabaseClear()
    })
})

describe('Create a new invoice', () => {
    test('Create new invoice', async () => {
        createInvoice(app, request)
    })

    afterAll(() => {
        customersDatabaseClear()
        invoicesDatabaseClear()
    })
})

