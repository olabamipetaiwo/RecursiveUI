import React, { CSSProperties } from "react";
import { AppStyles } from "utils/styles";

interface Props {
  error: string | null;
  handleError: () => void;
}

const Error = ({ error, handleError }: Props) => {
  return (
    <section style={AppStyles.errorContiner as CSSProperties}>
      <p style={AppStyles.error}>{error}</p>
      <button style={AppStyles.btnPrimary} onClick={() => handleError()}>
        Clear Error
      </button>
    </section>
  );
};

export default Error;
