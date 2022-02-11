import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

import fileReducer from "./reducers/files";
import expect from "expect";

test("renders Toolbox title link", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/Toolbox Challenge React App/i);
  expect(linkElement).toBeInTheDocument();
});

describe("Get File Reducer", () => {
  it("should return the initial state", () => {
    expect(fileReducer(undefined, [])).toEqual([]);
  });
});
