import React, { useState } from "react";

const initialState = [
  {
    tab: "tab 1",
    content: "tab one",
    // active: false,
  },
  {
    tab: "tab 2",
    content: "tab two",
    // active: false,
  },
  {
    tab: "tab 3",
    content: "tab three",
    // active: false,
  },
];

// const initialState = {
//   tab: "",
//   content: "",
// };

const Tab = () => {
  const [tab, setTab] = useState(initialState);
  const [values, setValues] = useState(initialState);
  const [activeTab, setActiveTab] = useState(0);
  console.log(values);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTab((current) => [
      ...current,
      {
        tab: e.target.tab.value,
        content: e.target.content.value,
        // active: active,
      },
    ]);
    setValues(initialState);
  };

  // const handleDisplay = (e, value, index) => {
  //   // console.log(e);
  //   // console.log("handleDisplay VALUE: ", value, "\nid:  ", index);

  //   setActiveTab(index);
  // };

  return (
    <>
      <div className="tab-btn-container">
        {tab.map((item, i) => (
          <button key={i} onClick={(e) => handleDisplay(e, item, i)}>
            {item.tab}
          </button>
        ))}
      </div>
      <div className="tab-content">{values[activeTab].content}</div>
      {/* <div>
        {tab.map((item, i) =>
          item.active === true ? (
            <p key={i}>{item.content}</p>
          ) : item.active === false ? (
            <p>nothing</p>
          ) : null
        )}
      </div> */}

      {/* <div className="tab-content">{item.content}</div> */}
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="tab name"
            name="tab"
            onChange={handleChange}
            value={values.tab}
          />
          <input
            type="text"
            placeholder="tab content"
            name="content"
            onChange={handleChange}
            value={values.content}
          />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Tab;
