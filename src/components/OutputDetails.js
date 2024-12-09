import React from "react";
import { solvedProblems } from "../constants/questions";

const OutputDetails = ({ outputDetails }) => {
  if (atob(outputDetails?.stdout).trim() === "6") {
    solvedProblems[0].solvedStatus = true;
  }
  return (
    <div className="flex flex-col mt-4 space-y-3 metrics-container">
      <p className="text-sm">
        Submission:{" "}
        <span className="px-2 py-1 font-semibold rounded-md bg-stone-700">
          {outputDetails?.status?.description === "Accepted" &&
          atob(outputDetails?.stdout).trim() === "6"
            ? `Correct`
            : `Incorrect`}
        </span>
      </p>
      <p className="text-sm">
        Execution Status:{" "}
        <span className="px-2 py-1 font-semibold rounded-md bg-stone-700">
          {outputDetails?.status?.description}
        </span>
      </p>
      <p className="text-sm">
        Memory:{" "}
        <span className="px-2 py-1 font-semibold rounded-md bg-stone-700">
          {outputDetails?.memory} KB
        </span>
      </p>
      <p className="text-sm">
        Time:{" "}
        <span className="px-2 py-1 font-semibold rounded-md bg-stone-700">
          {outputDetails?.time} s
        </span>
      </p>
    </div>
  );
};

export default OutputDetails;
