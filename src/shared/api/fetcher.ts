const getHeaders = () => {
  const token = localStorage.getItem("accessToken");

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  if (token != null) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  return headers;
};

export const fetchGET = async (currentUrl: string) =>
  await fetch(`http://localhost:8080/${currentUrl}`, {
    method: "GET",
    headers: getHeaders(),
  }).then((response) => response.json());

export const fetchPOST = async (currentUrl: string, requestBody: string) =>
  await fetch(`http://localhost:8080/${currentUrl}`, {
    method: "POST",
    headers: getHeaders(),
    body: requestBody,
  }).then((response) => response.json());
