const { signin } = require("./auth")

module.exports.createCustomer = async (app, request) => {
    const responseSignin = await signin(app, request)
    const { accessToken } = responseSignin.body

    const response = await request(app)
        .post('/api/customers')
        .set('Authorization', 'bearer ' + accessToken)
        .send({
            email: "customerFromJES3@test.com",
            companyName: "from JEST"
        })

    expect(response.statusCode).toBe(200)
    expect(response.type).toBe("application/json")

    return response
}

module.exports.getAllCustomer = async (app, request) => {
    const responseSignin = await signin(app, request)
    const { accessToken } = responseSignin.body

    const response = await request(app)
        .get('/api/customers')
        .set('Authorization', 'bearer ' + accessToken)

    expect(response.status).toBe(200)
    expect(response.type).toBe("application/json")
    expect(response.body).toEqual(expect.arrayContaining([
        expect.objectContaining({
            _id: expect.any(String),
            email: expect.any(String),
            companyName: expect.any(String),
            invoices: expect.any(Array),
        })
    ]))

    return response
}