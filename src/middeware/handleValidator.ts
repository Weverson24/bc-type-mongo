import { Request, Response, NextFunction } from 'express';
import { validationResult, Result, ValidationError } from 'express-validator';

export const validate = (req: Request, res: Response, next: NextFunction) => {
    const errors: Result<ValidationError> = validationResult(req);

    if (errors.isEmpty()) {
        return next();
    }

    const extractecErrors: object[] = [];

    errors.array().map((err) => extractecErrors.push({ [err.type]: err.msg }))

    return res.status(422).json({
        errors: extractecErrors,
    })
}