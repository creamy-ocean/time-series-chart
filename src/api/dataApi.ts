import { ResponseData } from "../types/types";

const dataApi = {
  getData: async (): Promise<ResponseData> => {
    const data = await (await fetch(`/mock_data.json`)).json();
    const res = data.response;
    return res;
  },
};
export default dataApi;
