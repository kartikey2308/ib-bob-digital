import React from 'react';
import {render} from "@testing-library/react";
import Header from "../../../components/Header/Header"
describe("Header", () => {
  it("renders the header", () => {
    const header = render( <Header/>);
    expect(header).toBeDefined();
  });
});