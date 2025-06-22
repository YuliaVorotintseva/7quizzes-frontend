export const fetchGET = async (currentUrl: string) => {
  const token = localStorage.getItem("authToken");

  return await fetch(`http://localhost:8080/${currentUrl}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => response.json());
};

export const fetchPOST = async (currentUrl: string, requestBody: string) => {
  const token = localStorage.getItem("authToken");

  return await fetch(`http://localhost:8080/${currentUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: requestBody,
  }).then((response) => response.json());
};
