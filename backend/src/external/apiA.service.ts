import axios from "axios";
import { retry } from "../utils/retry";

export async function fetchExternalData() {
  return retry(() =>
    axios.get("https://jsonplaceholder.typicode.com/posts", {
      timeout: 2000
    })
  );
}
