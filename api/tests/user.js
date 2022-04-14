module.exports.creatUser = async (app, request) => {
    const response = await request(app)
        .post('/api/customers')
        .send({
            email: "customerFromJES3@test.com",
            companyName: "from JEST"
        })

    expect(response.statusCode).toBe(200)
    expect(response.type).toBe("application/json")

    return response
}

module.exports.getAllUser = async (app, request) => {
    const response = await request(app)
        .get('/api/customers')

    expect(response.status).toBe(200)
    expect(response.type).toBe("application/json")

    return response
}