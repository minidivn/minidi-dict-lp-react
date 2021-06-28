import axios from "axios";
import { apiUrl } from "../../config/apiConfig";

export async function getDictListApi({ onFinish }) {
  const result = await axios(`${apiUrl}/api/dict/list`);
  // console.log("getDictListApi", result);
  const dictList = result.data;
  if (onFinish) onFinish(dictList);
}

export async function searchByKeywordApi({
  selectedDictDesc,
  keyword,
  onFinish
}) {
  const result = await axios(
    `${apiUrl}/api/word/find?dict=${selectedDictDesc}&word=${keyword}`
  );
  // console.log("searchByKeywordApi", result);
  const data = result.data;
  if (onFinish) onFinish(data);
}
