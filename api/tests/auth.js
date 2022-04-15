module.exports.signup = async (app, request) => {
    const response = await request(app)
        .post('/api/auth/signup')
        .send({
            email: "jest@test.com",
            password: "password"
        })

    expect(response.statusCode).toBe(200)
    expect(response.type).toBe("application/json")
    expect(response.body).toEqual(
        expect.objectContaining({
            accessToken: expect.any(String)
        })
    )

    return response
}

module.exports.signin = async (app, request) => {
    const response = await request(app)
        .post('/api/auth/signin')
        .send({
            email: "jest@test.com",
            password: "password"
        })

    expect(response.statusCode).toBe(200)
    expect(response.type).toBe("application/json")
    expect(response.body).toEqual(
        expect.objectContaining({
            accessToken: expect.any(String)
        })
    )

    return response
}