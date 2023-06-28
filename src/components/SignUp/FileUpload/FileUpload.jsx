import React, { useState } from "react";
import { FileContainer, StyledError } from "./FileUpload.styled";

const FileUpload = ({ setFieldValue, errors, touched }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <FileContainer>
      <input
        id="photo"
        type="file"
        className="form__file-input-field"
        onChange={(event) => {
          setFieldValue("photo", event.currentTarget.files[0]);
          setSelectedFile(event.currentTarget.files[0]);
        }}
      />
      <label
        htmlFor="photo"
        className={`form__file-input-label ${
          errors.photo ? "error-upload" : ""
        }`}
      >
        Upload
      </label>
      <label
        htmlFor="photo"
        className={`form__file-input-label-placeholder ${
          selectedFile ? "file-selected" : ""
        } ${errors.photo && "error-upload"}`}
      >
        {selectedFile
          ? selectedFile.name.slice(0, 22) + "..."
          : "Upload your photo"}
      </label>
      <StyledError>{errors.photo}</StyledError>
    </FileContainer>
  );
};

export default FileUpload;
