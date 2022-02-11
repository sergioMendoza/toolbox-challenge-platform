import { RETRIEVE_FILE_DATA } from "../actions/types";
const initialState = [];
function fileReducer(files = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case RETRIEVE_FILE_DATA:
      const dataToFormat = payload;
      let formatted = [];
      for(let i=0; i < dataToFormat.length; i++){
        if('lines' in dataToFormat[i]){
            for(let j = 0; j < dataToFormat[i]['lines'].length; j++){
                let lines = dataToFormat[i]['lines'][j];
                lines.file = dataToFormat[i].file;
                formatted.push({...lines})
            }
        }
      }
      return formatted;
    default:
      return files;
  }
}
export default fileReducer;
