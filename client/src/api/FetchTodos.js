const serverUrl = "http://localhost:8080";

function FetchTodos() {
  return fetch(`${serverUrl}/api/v1/todos`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((response) => {
    return response.json();
  });
}
export default FetchTodos;
