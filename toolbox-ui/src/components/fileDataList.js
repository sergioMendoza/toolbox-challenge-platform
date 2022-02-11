import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveFilesData, findFileDataByName } from "../actions/files";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const FileDataList = () => {
  const [currentFileData, setCurrentFileData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchFile] = useState("");
  const files = useSelector((state) => state.files);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retrieveFilesData());
  }, []);
  const onChangeSearchFile = (e) => {
    const searchFile= e.target.value;
    setSearchFile(searchFile);
  };
  const refreshData = () => {
    setCurrentFileData(null);
    setCurrentIndex(-1);
  };
  const setActiveFile = (file, index) => {
    setCurrentFileData(file);
    setCurrentIndex(index);
  };

  const findByName = () => {
    refreshData();
    dispatch(findFileDataByName(searchTitle));
  };
  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <InputGroup className=" mt-3 mb-3">
            <FormControl
              placeholder="filename"
              aria-label="filename"
              aria-describedby="basic-addon2"
              value={searchTitle}
              onChange={onChangeSearchFile}
            />
            <Button onClick={findByName} variant="outline-secondary" id="button-addon2">
              Buscar
            </Button>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>file Name</th>
                <th>Text</th>
                <th>Number</th>
                <th>Hex</th>
              </tr>
            </thead>
            <tbody>
              {files &&
                files.map((file, index) => (
                  <tr>
                    <td>{file.file}</td>
                    <td>{file.text}</td>
                    <td>{file.number}</td>
                    <td>{file.hex}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};
export default FileDataList;
