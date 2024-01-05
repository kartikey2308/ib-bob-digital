import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SideBar from "@/components/sidebar/SideBar";
import { useRouter } from "next/router";
import { act } from "react-dom/test-utils";

// Mock useRouter
jest.mock("next/router", () => ({
  ...jest.requireActual("next/router"),
  useRouter: jest.fn(),
}));

describe("Sidebar", () => {
  it("renders the sidebar", () => {
    const sidebar = render(<SideBar />);
    expect(sidebar).toBeDefined();
  });

  it("renders sidebar items and handles click", () => {
    render(<SideBar />);
    // Check if sidebar items are rendered
    const accountsItem = screen.getByText("Accounts");
    const saveItem = screen.getByText("Save");
    const investItem = screen.getByText("Invest");
    const borrowItem = screen.getByText("Borrow");
    const shopItem = screen.getByText("Shop");
    const transferItem = screen.getByText("Transfer");
    const passbookItem = screen.getByText("Passbook");
    const taxItem = screen.getByText("Tax Payment");
    const billItem = screen.getByText("Bill Payment");
    const cardsItem = screen.getByText("Cards");
    const serviceItem = screen.getByText("Service Request");

    expect(accountsItem).toBeDefined();
    expect(saveItem).toBeDefined();
    expect(investItem).toBeDefined();
    expect(borrowItem).toBeDefined();
    expect(shopItem).toBeDefined();
    expect(transferItem).toBeDefined();
    expect(passbookItem).toBeDefined();
    expect(taxItem).toBeDefined();
    expect(billItem).toBeDefined();
    expect(cardsItem).toBeDefined();
    expect(serviceItem).toBeDefined();

    // Simulate click on an item
    userEvent.click(accountsItem);
    userEvent.click(transferItem);
  });

//   it("handles navigation when clicking on an item", async () => {
//     // Mock the useRouter implementation
//     const mockRouter = {
//       push: jest.fn(),
//     };
//     (useRouter as jest.Mock).mockReturnValue(mockRouter);

//     // Mock Next.js Link component
//     jest.mock(
//       "next/link",
//       () =>
//         ({ children }: { children: React.ReactNode }) =>
//           children
//     );
//     render(<SideBar />);

//     // Click on an item
//     const transferItem = screen.getByText("Transfer");
//     await act(async () => {
//       userEvent.click(transferItem);
//     });
//     // Check if push was called with the expected path
//     expect(mockRouter.push).toHaveBeenCalledWith("/fund-transfer");
//   });
});
