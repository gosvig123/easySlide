import SlidesList from "../SlidesList";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import React from "react";

describe("<SlidesList/>", () => {
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

    const onSelect = jest.fn();
    const updatePresentationState = jest.fn();

    render(
      <SlidesList
        presentation={presentation}
        selectedSlide={0}
        onSelectSlide={onSelect}
        onCreatePresentation={jest.fn()}
        onCreateSlide={jest.fn()}
      />
    );
    expect(screen.getByText("test")).toBeInTheDocument();
  });

  test("add slide with +", () => {
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

    const onSelect = jest.fn();
    const onCreateSlide = jest.fn();

    render(
      <SlidesList
        presentation={presentation}
        selectedSlide={0}
        onSelectSlide={onSelect}
        onCreateSlide={onCreateSlide}
        onCreatePresentation={jest.fn()}
      />
    );
    userEvent.click(screen.getByText("+"));
    expect(onCreateSlide).toHaveBeenCalled();
    expect(onCreateSlide).toHaveBeenCalledTimes(1);
  });

  test("select slide", () => {
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

    const onSelect = jest.fn();
    const onCreateSlide = jest.fn();

    render(
      <SlidesList
        presentation={presentation}
        selectedSlide={0}
        onSelectSlide={onSelect}
        onCreateSlide={onCreateSlide}
        onCreatePresentation={jest.fn()}
      />
    );
    userEvent.click(screen.getByText("test"));
    expect(onSelect).toHaveBeenCalled();
    expect(onSelect).toHaveBeenCalledTimes(1);
  });

  test("create presentation", () => {
    const presentation = undefined;

    const onSelect = jest.fn();
    const onCreateSlide = jest.fn();
    const onCreatePresentation = jest.fn();

    render(
      <SlidesList
        presentation={presentation}
        selectedSlide={0}
        onSelectSlide={onSelect}
        onCreateSlide={onCreateSlide}
        onCreatePresentation={onCreatePresentation}
      />
    );
    const presentationName = "My new presentation";
    userEvent.type(
      screen.getByPlaceholderText("Presentation Name"),
      `${presentationName}{enter}`
    );
    expect(onCreatePresentation).toHaveBeenCalledWith(presentationName);
  });
});
