import React from "react";

const WordMainDisplay = ({ main }) =>
  main.wordClasses && (
    <>
      {/* <h4 className="title is-4">Main</h4> */}
      {main.wordClasses.map((wordClass, index) => (
        <div className="block" key={wordClass.title + "_" + index}>
          {wordClass.title && wordClass.title !== "" && (
            <h5 className="title is-5">
              <span className="tag is-primary is-medium">
                {wordClass.title}
              </span>
            </h5>
          )}
          <ul>
            {wordClass.list.map((wcs) => (
              <li key={wcs.text}>
                {wcs.text}
                {wcs.examples && <ExamplesDisplay examples={wcs.examples} />}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
const ExamplesDisplay = ({ examples }) => (
  <ul>
    {examples.map((ex, index) => (
      <li key={index}>
        <i>{ex.phrase}</i> : {ex.text}
      </li>
    ))}
  </ul>
);
const WordCategoriesMeaningDisplay = ({ categories }) =>
  categories &&
  categories.length > 0 && (
    <div className="block">
      {/* <h4 className="title is-5">More ...</h4> */}
      {categories.map((category, index) => (
        <div className="block" key={category.title + "_" + index}>
          {category.title && category.title !== "" && (
            <h5 className="title is-5">
              <span className="tag is-primary is-medium">{category.title}</span>
            </h5>
          )}
          <ul>
            {category.list.map((entry) => (
              <li key={entry.text || entry}>
                {entry.text ? entry.text : entry}

                {entry.examples && (
                  <ExamplesDisplay examples={entry.examples} />
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
const PronunciationDisplay = ({ pronunciation }) => (
  <span>
    {pronunciation && (
      <>
        <i>/{pronunciation.transcription}/</i> <i className="fa fa-volume-up" />
      </>
    )}
  </span>
);
export default function DictWordMeaning({ meaningData }) {
  return (
    <div className="box">
      {meaningData && meaningData.detail ? (
        <div className="content">
          <h3 className="title">
            {meaningData.word}
            {"  "}
            <PronunciationDisplay
              pronunciation={meaningData.detail.pronunciation}
            />
          </h3>
          <hr />
          <div style={{ paddingLeft: "10px" }}>
            {meaningData.detail.main && (
              <>
                <WordMainDisplay main={meaningData.detail.main} />
                <WordCategoriesMeaningDisplay
                  categories={meaningData.detail.categories}
                />
              </>
            )}
          </div>
        </div>
      ) : (
        <h3>Not found</h3>
      )}
    </div>
  );
}
