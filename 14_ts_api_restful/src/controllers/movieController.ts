import e, { Request, Response } from "express";
import { MoviModel } from "../models/Movie";
import Logger from "../../config/logger";

export async function createMovie(req: Request, res: Response) {
  try {
    const data = req.body;
    const movie = await MoviModel.create(data);
    return res.status(201).json(movie);
  } catch (e: any) {
    Logger.error(`Erro no sistema: ${e.message}`);
    return res.status(500).json({ error: "Por favor, tente mais tarde" });
  }
}

export async function findMovieById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const movie = await MoviModel.findById(id);

    if (!movie) {
      return res.status(404).json({ error: "O filme não existe" });
    }
    return res.status(200).json(movie);
  } catch (e: any) {
    Logger.error(`Erro no sistema: ${e.message}`);
    return res.status(500).json({ error: "Por favor, tente mais tarde" });
  }
}

export async function getAllMovies(req: Request, res: Response) {
  try {
    const movies = await MoviModel.find();
    res.status(200).json(movies);
  } catch (e: any) {
    Logger.error(`Erro no sistema: ${e.message}`);
    return res.status(500).json({ error: "Por favor, tente mais tarde" });
  }
}

export async function removeMovie(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const movie = await MoviModel.findById(id);

    if (!movie) {
      return res.status(404).json({ error: "O filme não existe" });
    }

    await movie.delete();

    return res.status(200).json({ msg: "Filme removido com sucesso" });
  } catch (e: any) {
    Logger.error(`Erro no sistema: ${e.message}`);
    return res.status(500).json({ error: "Por favor, tente mais tarde" });
  }
}

export async function updateMovie(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const data = req.body;

    const movie = await MoviModel.findById(id);

    if (!movie) {
      return res.status(404).json({ error: "O filme não existe" });
    }

    await MoviModel.updateOne({ _id: id }, data);

    return res.status(200).json(data);
  } catch (e: any) {
    Logger.error(`Erro no sistema: ${e.message}`);
    return res.status(500).json({ error: "Por favor, tente mais tarde" });
  }
}
