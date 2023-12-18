import DashboardHeader from "../components/header/DashboardHeader"
import React from 'react';
import {render} from "@testing-library/react";
describe("DashboardHeader", () => {
  it("renders the header", () => {
    const header = render( <DashboardHeader/>);
    expect(header).toBeDefined();
  });
});