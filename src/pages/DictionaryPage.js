import React from "react";
import { useState, useEffect } from "react";

import DictSearchBox from "../components/dictionary/DictSearchBox";
import DictWordList from "../components/dictionary/DictWordList";
import DictWordMeaning from "../components/dictionary/DictWordMeaning";
import WikipediaResult from "../components/searchEngine/WikipediaResult";

import { getDictListApi, searchByKeywordApi } from "../data/hooks/dictHooks";

const DictSearchResult = ({ meaningData }) => {
  return <DictWordMeaning meaningData={meaningData} />;
};

const langPair = (selectedDict) => {
  const selectedDictDesc = selectedDict ? selectedDict.name : "en-vi";
  return selectedDictDesc.split("-");
};
/**
 * DictionaryPage has effects:
 * - get dictList
 * - search by word to miniDict
 * - search by word to wikipedia
 * @param {*} param0
 */
export default function DictionaryPage({}) {
  const [keyword, setKeyword] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [dictList, setDictList] = useState([]);
  const [selectedDict, setSelectedDict] = useState(null);
  const [isHasDictList, setIsHasDictList] = useState(false);
  const [meaningData, setMeaningData] = useState(null);

  const startSearchByKeyword = (word) => {
    // console.log("searchByKeyword", word, "isSearching", isSearching);
    setKeyword(word);
    setIsSearching(true);
  };

  //getDictList-Effect
  useEffect(() => {
    getDictListApi({
      onFinish: (dictList) => {
        setDictList(dictList);
        setIsHasDictList(true);
        setSelectedDict(dictList[0]);
      }
    });
  }, [isHasDictList]);

  //search-Effect
  useEffect(() => {
    const selectedDictDesc = selectedDict ? selectedDict.name : "en-vi";

    if (
      selectedDictDesc &&
      selectedDictDesc != "" &&
      keyword &&
      keyword !== "" &&
      isSearching
    ) {
      searchByKeywordApi({
        keyword,
        selectedDictDesc,
        onFinish: (resultData) => {
          // console.log("searchByKeyword", keyword, "selectedDict", selectedDict);
          // console.log("searchByKeyword Result", resultData);
          setMeaningData(resultData);
          setIsSearching(false);
        }
      });
    } else {
      // console.log("Keyword is empty!", keyword, "isSearching", isSearching);
    }
  }, [isSearching, keyword, selectedDict]);
  // console.log("meaningData", meaningData);

  return (
    <section className="section">
      <div className="container">
        {/* <h1 className="title">Dictionary</h1> */}
        <div className="collumns">
          <div className="collumn is-3"></div>
          <div className="collumn">
            <DictSearchBox
              keyword={keyword}
              changeKeyword={setKeyword}
              onSearch={startSearchByKeyword}
              dictList={dictList}
              selectedDict={selectedDict}
              changeSelectedDict={setSelectedDict}
            />
            <DictSearchResult meaningData={meaningData} />
            <WikipediaResult
              keyword={keyword}
              isSearching={isSearching}
              lang={langPair(selectedDict)[0]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
