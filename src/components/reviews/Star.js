import React from "react";

function Star({number}) {
  return (
    <>
      <tr className="">
        <td>
          <span>
            <button className="fit-button fit-button-color-blue fit-button-fill-ghost fit-button-size-medium stars-filter">{number} Stars</button>
          </span>
        </td>
        <td className="progress-bar-container">
          <div className="fit-progressbar fit-progressbar-bar star-progress-bar">
            <div className="fit-progressbar-background">
              <span className="progress-fill" style={{ width: "97.2973%" }}></span>
            </div>
          </div>
        </td>
        <td className="star-num">(36)</td>
      </tr>
    </>
  );
}

export default Star;
