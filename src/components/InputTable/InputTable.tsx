import { useState } from "react";
import Spreadsheet, {
  createFormulaParser,
  Matrix,
  CellBase,
} from "react-spreadsheet";
import { Button } from "../Button";

interface InputTableProps {}

export const InputTable: React.FC<InputTableProps> = () => {
  const [data, setData] = useState<Matrix<CellBase>>([
    [{ value: "2" }],
    [{ value: "2" }],
  ]);
  const customCreateFormulaParser = (data: Matrix<CellBase>) =>
    createFormulaParser(data, { SUM: undefined });

  const columnLabels = ["Number"];
  const rowLabels = ["Item 1", "Item 2"];

  const [sum, setSum] = useState<string | number>("");

  const makeSum = () => {
    const sums = data
      .flat()
      .map((dat) => parseFloat(dat?.value || "0"))
      .reduce((acc, curr) => acc + curr, 0);

    setSum(isNaN(sums) ? "Use numbers!" : sums);
  };
  

  return (
    <>
      <Spreadsheet
        data={data}
        columnLabels={columnLabels}
        rowLabels={rowLabels}
        createFormulaParser={customCreateFormulaParser}
        onChange={(e) => {
          if (e) setData(e), console.log(e);
        }}
        onSelect={(e) => console.log(e)}
      />
      <Button text="Sum" colorVariant="primary" reaction={makeSum} />
      <p>sum is: {sum}</p>
    </>
  );
};
