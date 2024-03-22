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
  
 export interface TestingData {
    individuals: Individual[];
  }