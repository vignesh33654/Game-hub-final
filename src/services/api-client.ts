import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f4eabffd98104d7d8c2cffe714d6b999",
  },
});
