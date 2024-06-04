import { FC } from "react";
import { StyledInput, ErrorMessage } from "./styles";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  errorText?: string;
  id?: string;
}

export const Input: FC<Props> = ({ value, onChange, errorText, id }) => (
  <>
    <StyledInput
      style={errorText?.length ? { borderColor: "red", marginBottom: 0 } : {}}
      value={value}
      onChange={onChange}
      id={id}
    />
    <ErrorMessage>{errorText}</ErrorMessage>
  </>
);
