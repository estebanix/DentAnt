import { TestingData } from "../types/functionsTypes";

export const calculateMean = (data: TestingData): number => {
  let sum = 0;
  let count = 0;

  data.individuals.forEach((individual) => {
    individual.pages.forEach((page) => {
      page.data.forEach((row) => {
        row.forEach((cell) => {
          if (!isNaN(cell)) {
            sum += parseInt(cell);
            count++;
          }
        });
      });
    });
  });
  const mean = count > 0 ? sum / count : 0;

  return mean;
};
