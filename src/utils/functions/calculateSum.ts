import { TestingData } from "../types/functionsTypes";

export const calculateSum = (data : TestingData) => {
    let sum = 0;
    data.individuals.forEach((individual) => {
      individual.pages.forEach((page) => {
        page.data.forEach((row) => {
          row.forEach((cell) => {
            if (!isNaN(cell)) {
              sum += parseInt(cell);
            }
          });
        });
      });
    });
    return sum;
}