import React from "react";
import { render } from "@testing-library/react";
import SideBar from "@/components/sidebar/SideBar";
describe("Sidebar", () => {
  it("renders the sidebar", () => {
    const sidebar = render(<SideBar />);
    expect(sidebar).toBeDefined();
  });
});
