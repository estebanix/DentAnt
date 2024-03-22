import { useContext } from "react";
import * as XLSX from "xlsx";
import { Context } from "../../context/Context";

export const DataUploader = () => {
  const { setCurrentIndividual } = useContext(Context);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: "array" });

        const sheetNames = workbook.SheetNames;
        setCurrentIndividual(sheetNames); // Update currentIndividual with sheet names
      };

      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
    </>
  );
};
