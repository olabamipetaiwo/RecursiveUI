import React from "react";
import { AppStyles } from "utils/styles";
import LoadingIcon from "assets/loader.svg";

const Loader = () => {
  return (
    <figure style={AppStyles.loader}>
      <img src={LoadingIcon} alt="loading" />
    </figure>
  );
};

export default Loader;
