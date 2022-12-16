import Header from "../Header";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import React from "react";
import * as api from "../../lib/api";

jest.mock("../../lib/api");

describe("<Header/>", () => {
  test.todo("renders Header component");
  //   , () => {
  //   const presentation = {
  //     id: 0,
  //     name: "",
  //     slides: [
  //       {
  //         id: "1",
  //         image: "",
  //         text: "test",
  //       },
  //     ],
  //   };

  //   const slide = presentation.slides[0];
  //   const onSelect = jest.fn();
  //   const updatePresentationState = jest.fn();

  //   render(
  //     <Header
  //       slide={slide}
  //       onSelect={onSelect}
  //       presentation={presentation}
  //       updatePresentationState={updatePresentationState}
  //     />
  //   );

  //   expect(screen.getByText("Submit")).toBeInTheDocument();
  //   expect(screen.getByText("Presentation Name")).toBeInTheDocument();
  // });
});
