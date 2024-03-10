import { useContext } from "react";
import * as XLSX from "xlsx";
import { Context } from "../../context/Context";

export const DataUploader = () => {
  const { setSumData } = useContext(Context);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        setSumData(jsonData);
        console.log(jsonData);
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
