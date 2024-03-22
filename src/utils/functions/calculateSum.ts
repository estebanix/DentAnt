interface Cell {
    value: number | string;
  }
  
  interface Row {
    cells: Cell[];
  }
  
  interface Page {
    pageTitle: string;
    data: Row[];
  }
  
  interface Individual {
    id: number;
    pages: Page[];
  }
  
  interface TestingData {
    individuals: Individual[];
  }
  

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