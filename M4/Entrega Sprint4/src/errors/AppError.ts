class AppError extends Error {

    statusCode: number

    constructor(message: string, statuscode: number = 400) {
        super()
        this.message = message
        this.statusCode = statuscode
    }
}

export { AppError }