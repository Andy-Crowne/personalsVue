import axios from "axios";

export const getPeopleFromBack = async () => {
  return axios({ url: `${location.origin}/personal.json` }).then(
    response => response
  );
};
