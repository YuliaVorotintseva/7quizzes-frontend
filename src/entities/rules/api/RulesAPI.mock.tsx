import store from "../../../app/store";
import data from "../../../../public/RulesAPIData.json";
import { fetchGET } from "../../../shared/api/fetcher";

const isMocked: boolean = import.meta.env.VITE_MOCKED === "true";

export const getRulesData = async () => {
  const rulesDataStore = store.getState();
  if (isMocked) {
    return data.rules;
  } else if (rulesDataStore.rulesReducer.rules.length > 0) {
    return rulesDataStore.rulesReducer.rules;
  }

  try {
    const result = await fetchGET("rules");

    return result.rules;
  } catch (error) {
    console.log(error);
  }
};
