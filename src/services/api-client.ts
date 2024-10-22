import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7f571a820bcf4fc19c0d049edbbf09c2",
  },
});
