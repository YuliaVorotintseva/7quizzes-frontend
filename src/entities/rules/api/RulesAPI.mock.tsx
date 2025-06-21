import store from "../../../app/store";
import data from "../../../../public/RulesAPIData.json";

const isMocked: boolean = import.meta.env.VITE_MOCKED === "true";

export const getRulesData = async () => {
  const rulesDataStore = store.getState();
  if (isMocked) {
    return data.rules;
  } else if (rulesDataStore.rulesReducer.rules.length > 0) {
    return rulesDataStore.rulesReducer.rules;
  }

  try {
    const result = await fetch("http://localhost:8080/rules", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((response) => response.json());

    return result.rules;
  } catch (error) {
    console.log(error);
  }
};
