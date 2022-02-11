import http from "../http-common";
const getAll = () => {
  return http.get("/files/data");
};
const findByName = fileName => {
  return http.get(`/files/data?fileName=${fileName}`);
};
const FileService = {
  getAll, 
  findByName
};
export default FileService;