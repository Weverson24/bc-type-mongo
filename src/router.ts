import { Router, Request, Response } from 'express'
import { createMovie, findMovieById, getAllMovies, removeMovie, updateMovie } from './controllers/MovieControllers';
import { validate } from './middeware/handleValidator';
import { movieCreateValidation } from './middeware/movieVlidation';

const router = Router();

export default router.get("/test", (req: Request, res: Response) => {
    res.status(200).send("API working!");
}).post("/movie", movieCreateValidation(), validate, createMovie)
    .get("/movie/:id", findMovieById)
    .get("/movie", getAllMovies)
    .delete("/movie/:id", removeMovie)
    .patch("/movie/:id", movieCreateValidation(), validate, updateMovie);
