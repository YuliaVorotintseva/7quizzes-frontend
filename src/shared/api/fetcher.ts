export const fetchGET = async (currentUrl: string) => {
  const token = localStorage.getItem("accessToken");

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
  const token = localStorage.getItem("accessToken");

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  if (token != null) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  return await fetch(`http://localhost:8080/${currentUrl}`, {
    method: "POST",
    headers,
    body: requestBody,
  }).then((response) => response.json());
};
