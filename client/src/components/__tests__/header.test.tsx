import Header from "../Header";
import userEvent from "@testing-library/user-event";
import { render, screen, act } from "@testing-library/react";
import React from "react";
import * as api from "../../lib/api";

jest.mock("../../lib/api");

describe("<Header/>", () => {
  test("renders Header component", () => {
    const onSubmitTextPrompt = jest.fn();
    const onSubmitImagePrompt = jest.fn();

    const component = render(
      <Header
        onSubmitTextPrompt={onSubmitTextPrompt}
        onSubmitImagePrompt={onSubmitImagePrompt}
      />
    );

    expect(component).toMatchSnapshot();
  });

  test("updates the slide's text with a prompt", async () => {
    const promise = Promise.resolve();
    const onSubmitTextPrompt = jest.fn();
    const onSubmitImagePrompt = jest.fn();

    const component = render(
      <Header
        onSubmitTextPrompt={onSubmitTextPrompt}
        onSubmitImagePrompt={onSubmitImagePrompt}
      />
    );

    const prompt = "types of bees";

    userEvent.type(
      component.getByPlaceholderText("text prompt"),
      `${prompt}{enter}`
    );
    expect(onSubmitTextPrompt).toHaveBeenCalledWith(prompt);
    await act(async () => {
      await promise;
    });
  });

  test("updates the slide's image with a prompt", async () => {
    const promise = Promise.resolve();
    const onSubmitTextPrompt = jest.fn();
    const onSubmitImagePrompt = jest.fn();

    const component = render(
      <Header
        onSubmitTextPrompt={onSubmitTextPrompt}
        onSubmitImagePrompt={onSubmitImagePrompt}
      />
    );

    const prompt = "a bee exiting a slide";

    userEvent.type(
      component.getByPlaceholderText("image prompt"),
      `${prompt}{enter}`
    );
    expect(onSubmitImagePrompt).toHaveBeenCalledWith(prompt);
    await act(async () => {
      await promise;
    });
  });
});
