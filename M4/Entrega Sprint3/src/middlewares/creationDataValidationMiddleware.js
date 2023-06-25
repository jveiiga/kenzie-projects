

const creationDataValidationMiddleware = (serializers) => async (request, response, next) => {

  try {
    const validated = await serializers.validate(request.body, {
        //trás todos os erros do cliente no preenchimento
        abortEarly: false,
        //remove possiveis inserções no preenchimento
        stripUnknown: true
    })
    //cria um novo objeto no request
    request.validatedBody = validated

    return next()    
    
  } catch (error) {

    return response.status(400).json({

      message: error.errors

    })
  }
}

export default creationDataValidationMiddleware