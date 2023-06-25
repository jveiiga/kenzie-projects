import express from "express";
import { v4 as uuidv4 } from "uuid";

const app = express();
app.use(express.json());

const cars = [];

app.post("/cars", (request, response) => {
  const { model, brand, year, color, plate } = request.body;

    const car = cars.push({
      model,
      brand,
      year,
      color,
      plate,
      id: uuidv4(),
  });

  return response.status(201).json(car);
});

app.get("/cars", (request, response) => {
  return response.json(cars);
});

app.listen(3000, () => {
  console.log('Server running in port 3000')
});


