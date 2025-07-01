import { CustomError } from "../../entities/user/model/actionTypes";

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

const getErrorMessage = (status?: number) => {
  switch (status) {
    case 400:
      return "Incorrect data";
    case 404:
      return "Invalid login or password";
    case 409:
      return "User already exists";
    case 500:
      return "Server is unavailable";
    default:
      return "Registration failed";
  }
};

export const fetchGET = async (currentUrl: string) =>
  await fetch(`http://localhost:8080/${currentUrl}`, {
    method: "GET",
    headers: getHeaders(),
  }).then((response) => response.json());

export const fetchPOST = async (currentUrl: string, requestBody: string) => {
  const response = await fetch(`http://localhost:8080/${currentUrl}`, {
    method: "POST",
    headers: getHeaders(),
    body: requestBody,
  });

  const contentLength = response.headers.get("Content-Length");
  if (contentLength === "0" && response.ok) {
    console.log("Response body is empty");
    return null;
  } else if (contentLength === "0" && !response.ok) {
    throw new CustomError({
      status: response.status,
      message: getErrorMessage(response.status),
    });
  }

  return response.json();
};
