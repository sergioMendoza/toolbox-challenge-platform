import http from "../http-common";
const getAll = () => {
  return http.get("/files/data");
};
const findByName = title => {
  return http.get(`/files/data?title=${title}`);
};
const FileService = {
  getAll, 
  findByName
};
export default FileService;