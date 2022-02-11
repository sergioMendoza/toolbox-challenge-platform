import { RETRIEVE_FILE_DATA } from "./types";
import FileService from "../services/fileService";

export const retrieveFilesData = () => async (dispatch) => {
    try {
      const res = await FileService.getAll();
      dispatch({
        type: RETRIEVE_FILE_DATA,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  export const findFileDataByName = (title) => async (dispatch) => {
    try {
      const res = await FileService.findByName(title);
      dispatch({
        type: RETRIEVE_FILE_DATA,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
