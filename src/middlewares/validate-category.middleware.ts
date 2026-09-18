import {
  Request,
  Response,
  NextFunction
} from "express";

import {
  PRODUCT_CATEGORIES
} from "../data/products.data";

export function validateCategory(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const rawCategory = Array.isArray(req.params.category)
    ? req.params.category[0]
    : req.params.category;

  const category = rawCategory?.trim();

  if (!category) {
    res.status(400).json({
      message: "La categoría es obligatoria"
    });
    return;
  }

  const isValidCategory = PRODUCT_CATEGORIES.some(
    item => item.toLowerCase() === category.toLowerCase()
  );

  if (!isValidCategory) {
    res.status(400).json({
      message: `La categoría '${category}' no es válida. Categorías permitidas: ${PRODUCT_CATEGORIES.join(", ")}`
    });
    return;
  }

  req.params.category = category;
  next();
}