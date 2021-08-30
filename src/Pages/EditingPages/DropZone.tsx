import react, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Control, Controller } from "react-hook-form";
import { Inputs } from "./EditProfile";

import styles from "./styles.module.css";


export const DropzoneField = ({
  name,
  control,
  ...rest
}: {
  name: any;
  control: Control<Inputs, object>;
}) => {
  // const { control } = useFormContext();

  return (
    <Controller
      render={({ field: { onChange } }) => (
        <Dropzone
          onChange={(e: any) => onChange(e.target.files[0])}
          {...rest}
        />
      )}
      name={name}
      control={control}
      defaultValue=""
    />
  );
};

const Dropzone = ({
  onChange,
  ...rest
}: {
  onChange: (...event: any[]) => void;
}) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // fileName === acceptedFiles[0].name;
    // console.log({ acceptedFiles });
  }, []);
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({ onDrop });
  return (
    <div {...getRootProps({ className: styles.dropzone })}>
      <input {...getInputProps({ onChange })} />
      {isDragActive ? (
        <p>여기에 파일을 드롭 ...</p>
      ) : acceptedFiles.length > 0 ? (
        <p>
          {acceptedFiles[0].name}
        </p>
      ) : (
        <p>
          이미지 파일을 여기로 끌어 놓거나 <br /> 여기를 클릭해서 해당파일을
          첨부하세요.
        </p>
      )}
    </div>
  );
};
