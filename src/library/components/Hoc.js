import { useIsFocused } from "@react-navigation/native";
import React from "react";

const IsFocusedHoc = (TargetComp) => {
  const HOC = (props) => {
      const isFocused = useIsFocused()
    return (
        <TargetComp
            isFocused={isFocused}
            {...props}
        />
    );
  };
  return HOC;
};

export default IsFocusedHoc;
