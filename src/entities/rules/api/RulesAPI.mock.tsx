import data from "../../../../public/RulesAPIData.json";

const isMocked: boolean = import.meta.env.VITE_MOCKED === "true";

export const getRulesData = async () => {
  if (isMocked) {
    return data.rules;
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
