import React, { useState } from "react";
import "./style.css";


const Accordion = ({ data }) => {
  const [selected, setSelected] = useState(null);
  const [enabledMultiSelect, setEnabledMultiSelect] = useState(false);
  const [multiSelectArr, setMultiSelectArr] = useState([]);

  //Handle single click
  const singleClickHandler = (currentId) => {
    console.log(currentId);
    setSelected(currentId === selected ? null : currentId);
  };

  //Multi Selection
  const multiSelectHandler = (currentId) => {
    let arrMultipleSelection = [...multiSelectArr];
    const findIndexOfSel = arrMultipleSelection.indexOf(currentId);
    if (findIndexOfSel === -1) {
      arrMultipleSelection.push(currentId);
    } else {
      arrMultipleSelection.splice(findIndexOfSel, 1);
    }
    setMultiSelectArr(arrMultipleSelection);
  };
  console.log(selected, multiSelectArr);
  return (
    <div className="wrapper">
      <button
        onClick={() => setEnabledMultiSelect(!enabledMultiSelect)}
        className={
          enabledMultiSelect
            ? "multiSelectBtnEnabled"
            : "multiSelectBtnDisabled"
        }
      >
        {!enabledMultiSelect
          ? "Enable Multiple Selection"
          : "Disable Multiple Selection"}
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="dataItem">
              <div
                className="title"
                onClick={
                  enabledMultiSelect
                    ? () => multiSelectHandler(dataItem.id)
                    : () => singleClickHandler(dataItem.id)
                }
              >
                <h3>{dataItem.title}</h3>
                <span className="accordIcon">+</span>
              </div>
              {enabledMultiSelect
                ? multiSelectArr.indexOf(dataItem.id) !== -1 && (
                    <div className="accordBody">{dataItem.body}</div>
                  )
                : selected === dataItem.id && (
                    <div className="accordBody">{dataItem.body}</div>
                  )}
              {/*  {selected === dataItem.id && (*/}
              {/*      <div className="accordBody">{dataItem.body}</div>*/}
              {/*)}*/}
            </div>
          ))
        ) : (
          <div>No Data Found !!</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
