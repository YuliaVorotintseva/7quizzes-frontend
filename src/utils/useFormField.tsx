import React, { useCallback, useState } from "react";

const useFormField = () => {
  const [value, setValue] = useState("");
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    [],
  );
  return { value, onChange };
};

export default useFormField;
