import { NextFunction, Request, Response } from 'express';
import { Product } from '../../entities/products.entities';
import { AppDataSource } from './../../data-source';
import { AppError } from './../../errors/appError';

const ensureUserIsOwnerMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const productRepository = AppDataSource.getRepository(Product);

    const ensureExistId = await productRepository.findOneBy({
        id: req.params.id,
    });
    const userId = req.user.id;
    if (ensureExistId?.user.id !== userId) {
        throw new AppError('You are not allowed to do this', 401);
    }

    next();
};

export { ensureUserIsOwnerMiddleware };
