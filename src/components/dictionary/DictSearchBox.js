import React from "react";

export default function DictSearchBox({
  dictList,
  selectedDict,
  changeSelectedDict,
  keyword,
  changeKeyword,
  onSearch
}) {
  return (
    <div className="box">
      <div className="columns">
        <div className="column is-10">
          <div className="field is-grouped">
            <div className="control">
              <div className="select is-primary">
                <select
                  defaultValue={selectedDict ? selectedDict.name : null}
                  onChange={(evt) => {
                    // console.log("select", evt.target.value);
                    const matchedOptions = dictList.filter(
                      (d) => d.name === evt.target.value
                    );
                    changeSelectedDict(
                      matchedOptions.length > 0 ? matchedOptions[0] : null
                    );
                  }}
                >
                  {(dictList || []).map((dict) => (
                    <option key={dict.name} value={dict.name}>
                      {dict.desc || dict.description}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="control has-icons-left is-expanded">
              <input
                className="input"
                type="text"
                placeholder="Please input a word here..."
                value={keyword}
                onChange={(evt) => changeKeyword(evt.target.value)}
                onKeyPress={(evt) => {
                  if (evt.key === "Enter") {
                    onSearch(keyword);
                  }
                }}
              />
              <span className="icon is-small is-left">
                <i className="fa fa-file-text" />
              </span>
            </div>
            <div className="control">
              <button
                className="button is-primary"
                title="Search"
                onClick={(evt) => {
                  // console.log("Button click", keyword);
                  onSearch(keyword);
                }}
              >
                <i className="fa fa-search" />
              </button>
            </div>
          </div>
        </div>
        <div className="column is-2">
          <div className="select is-primary">
            <select>
              <option>Dictionary</option>
              <option>Termology</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
