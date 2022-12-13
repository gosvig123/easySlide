import SlidesList from "../slides_list";

import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

describe("SlidesList", () => {
  test("renders SlidesList component", () => {
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
    const changeSlide = jest.fn();
    const presentationState = presentation;
    const updatePresentationState = jest.fn();

    render(
      <SlidesList
        slide={slide}
        onSelect={onSelect}
        changeSlide={changeSlide}
        presentationState={presentationState}
        updatePresentationState={updatePresentationState}
      />
    );
    expect(screen.getByText("test")).toBeInTheDocument();
  });
  test("add slide", () => {
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
    const changeSlide = jest.fn();
    const presentationState = presentation;
    const updatePresentationState = jest.fn();

    render(
      <SlidesList
        slide={slide}
        onSelect={onSelect}
        changeSlide={changeSlide}
        presentationState={presentationState}
        updatePresentationState={updatePresentationState}
      />
    );
    fireEvent.click(screen.getByText("+"));
    expect(presentation.slides.length).toBe(2);
  });
});
