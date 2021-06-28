import React from "react";
import { useState, useEffect, useContext } from "react";
import wiki from "wikijs";

async function searchWikipediaByKeyword({ keyword, lang = "en" }) {
  const page = await wiki({
    apiUrl: `https://${lang}.wikipedia.org/w/api.php`
  }).find(keyword);
  console.log(page);
  return page;
}
export default function WikipediaResult({ keyword, lang = "en", isSearching }) {
  const [content, setContent] = useState(null);
  useEffect(() => {
    const getNewContent = async () => {
      if (keyword && keyword !== "") {
        try {
          const page = await searchWikipediaByKeyword({ keyword, lang });
          if (page) {
            // const { content, title } = page.content();
            const summary = await page.summary();
            // const html = await page.html();
            // console.log({ summary });
            // console.log(html);
            setContent({ summary });
          }
        } catch (err) {
          console.log("Has error for wiki");
        }
      }
    };
    if (isSearching) {
      getNewContent();
    }
  }, [isSearching, lang, keyword]);
  return keyword ? (
    <div className="box">
      <a
        href={`https://${lang}.wikipedia.org/`}
        className="is-link is-title is-4"
      >
        Wikipedia {lang}
      </a>{" "}
      result for <b>{keyword}</b>
      <hr />
      {content && <div className="content">{content.summary}</div>}
    </div>
  ) : (
    <div></div>
  );
}
