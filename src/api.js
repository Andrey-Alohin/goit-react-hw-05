import axios from "axios";

const apiKey =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWE3OWU3OWQ5ZWYzMjFhMjQzY2U3NmMyNzk3NDE1OSIsIm5iZiI6MTc0NzQ4OTc1MC40NzUwMDAxLCJzdWIiOiI2ODI4OTNkNmRmMzFiYzM5MDlmNTUzODUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.IkCJDlwSV90lUlW0CePUAm7TOuQkXOz05yjP3jBbwEw";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

export const trandingFilm = async () => {
  const response = await axios.get("trending/movie/day", {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
    params: { language: "en-US" },
  });
  return response.data;
};
