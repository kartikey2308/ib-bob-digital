import React from 'react';
import {render,screen} from "@testing-library/react";
import Header from "../../../components/Header/Header"
describe("Header", () => {
  it("renders the header", () => {
    const header = render( <Header/>);
    expect(header).toBeDefined();
  });
  it("renders an input search bar",()=>{
    render(<Header/>);
    const searchInput = screen.getAllByPlaceholderText(/search/i);
    expect(searchInput).toBeDefined();
  })
  it("renders notification image",()=>{
    render(<Header/>);
    const images = screen.getAllByAltText("notification");
    expect(images).toBeDefined();
  })
  it("renders add image",()=>{
    render(<Header/>);
    const images = screen.getAllByAltText("add");
    expect(images).toBeDefined();
  })
  it("renders info image",()=>{
    render(<Header/>);
    const images = screen.getAllByAltText("info");
    expect(images).toBeDefined();
  })
  it("renders Search Icon",()=>{
    render(<Header/>);
    const images = screen.getAllByAltText("Search Icon");
    expect(images).toBeDefined();
  })
  it("renders Mic Icon",()=>{
    render(<Header/>);
    const images = screen.getAllByAltText("Mic Icon");
    expect(images).toBeDefined();
  })
  it("renders BobLogo Icon",()=>{
    render(<Header/>);
    const images = screen.getAllByAltText("BobLogo");
    expect(images).toBeDefined();
  })
  it("renders more Icon",()=>{
    render(<Header/>);
    const images = screen.getAllByAltText("more");
    expect(images).toBeDefined();
  })
  it("renders profile Icon",()=>{
    render(<Header/>);
    const images = screen.getAllByAltText("profile");
    expect(images).toBeDefined();
  })
  it("renders issues Icon",()=>{
    render(<Header/>);
    const images = screen.getAllByAltText("issues");
    expect(images).toBeDefined();
  })
});