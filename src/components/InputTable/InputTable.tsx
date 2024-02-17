import { useState } from "react";
import styles from "./InputTable.module.scss";

type DataArray = (string | number)[][];

const colArr = [
  "18",
  "17",
  "16",
  "15",
  "14",
  "13",
  "12",
  "11",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28"
];
const dentalParameters = [
  "Tooth presence, absence, carious",
  "Occlusal surface caries (fissure, groove, fossa sites)",
  "Pit caries",
  "Occlusal attrition score (Smith 1984)",
  "Occlusal attrition facet dentine caries",
  "Attrition facet enamel rim chipping/caries",
  "Mesial attrition score",
  "Mesial contact area caries",
  "Mesial root surface caries",
  "Mesial root exposure, CEJ-AC (mm)",
  "X. Mesial dental calculus presence",
  "Distal attrition score",
  "Distal contact point caries",
  "Distal root surface caries",
  "Distal root exposure, CEJ-AC (mm)",
  "X. Distal dental calculus presence",
  "Buccal smooth surface enamel caries",
  "Buccal root surface caries",
  "Buccal root exposure, CEJ-AC (mm)",
  "X. Buccal dental calculus presence",
  "Palatinal smooth surface, enamel caries",
  "Palatinal root surface caries",
  "Palatinal root exposure, CEJ-AC (mm)",
  "X. Palatinal dental calculus presence",
  "DDE in the occlusal region",
  "DDE in the contact area",
  "DDE lower down crown side or in cervical area",
  "Deformities of the alveolar process (Karn et al., 1984)",
  "Periodontal status (Kerr 1991)",
];

const initialRows = dentalParameters.length;
const initialCols = 17;

console.log(colArr.length);

const rowNames = Array.from({ length: 29 }, (_, index) => dentalParameters[index]);

const colNames = Array.from({ length: 17 }, (_, index) => colArr[index]);

export const InputTable = () => {
  const createEmptyRow = () => Array(initialCols).fill("");
  const [data, setData] = useState<DataArray>(() => [
    colNames,
    ...Array(initialRows).fill(0).map(createEmptyRow),
  ]);

  const handleChange = (rowIndex: number, colIndex: number, value: string) => {
    const newValue = value !== "" ? parseInt(value, 10) : "";
    const newData: DataArray = data.map((row, i) =>
      i === rowIndex
        ? row.map((cell, j) => (j === colIndex ? newValue : cell))
        : row
    );
    setData(newData);
  };

  return (
    <div className={styles.inputTable}>
      <table className={styles.table}>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex} className={styles.cell}>
                  {rowIndex === 0 && colIndex > 0 ? (
                    // Column labels
                    <label>{colNames[colIndex - 1]}</label>
                  ) : colIndex === 0 && rowIndex > 0 ? (
                    // Row labels
                    <label>{rowNames[rowIndex - 1]}</label>
                  ) : colIndex > 0 && rowIndex > 0 ? (
                    // Input cells
                    <label>
                      <input
                        type="text"
                        value={cell.toString()}
                        onChange={(e) =>
                          handleChange(rowIndex, colIndex, e.target.value)
                        }
                        className={styles.input}
                      />
                    </label>
                  ) : null}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
