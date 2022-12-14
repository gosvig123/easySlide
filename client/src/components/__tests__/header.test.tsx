import Header from "../Header";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import React from "react";
import * as api from "../../lib/api";

jest.mock("../../lib/api");

describe("<Header/>", () => {
  test("renders Header component", () => {
    const presentation = {
      id: 0,
      name: "",
      slides: [
        {
          id: "1",
          image: "",
          text: "test",
        },
      ],
    };

    const slide = presentation.slides[0];
    const onSelect = jest.fn();
    const updatePresentationState = jest.fn();

    render(
      <Header
        slide={slide}
        onSelect={onSelect}
        presentation={presentation}
        updatePresentationState={updatePresentationState}
      />
    );

    expect(screen.getByText("Submit")).toBeInTheDocument();
    expect(screen.getByText("Presentation Name")).toBeInTheDocument();
  });

  test("add project", () => {
    const presentation = {
      id: 0,
      name: "",
      slides: [
        {
          id: "1",
          image: "",
          text: "test",
        },
      ],
    };

    const slide = presentation.slides[0];
    const onSelect = jest.fn();
    const updatePresentationState = jest.fn();
    const requestToCreatePresentation = jest
      .spyOn(api, "createPresentation")
      .mockResolvedValue({ id: 1 });
    const createSlide = jest.spyOn(api, "createSlide");

    render(
      <Header
        slide={slide}
        onSelect={onSelect}
        presentation={presentation}
        updatePresentationState={updatePresentationState}
      />
    );

    userEvent.click(screen.getByText("Submit"));
    expect(requestToCreatePresentation).toHaveBeenCalled();
    // expect(createSlide).toHaveBeenNthCalledWith(1);
    // expect(updatePresentationState).toHaveBeenCalled();
    // expect(updatePresentationState).toHaveBeenCalledTimes(1);
  });
});
