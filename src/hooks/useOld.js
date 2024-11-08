import React from "react";
import { useContext } from "react";
import { OldNewsContext } from "../contexts/OldNewsContextProvider";

export default function useOld() {
  return useContext(OldNewsContext);
}
