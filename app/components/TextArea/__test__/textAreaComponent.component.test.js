import React from "react";
import renderer from "react-test-renderer";
import TextArea from "../TextArea.component.android";

describe("Some component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <TextArea /> //TODO: dlaczego nie mogę wziąć normalnego TextArea.component tylko musze wziąć TextArea.component.android
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
