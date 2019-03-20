import * as string_functions from "../functions/string";

describe("String functions", () => {
  it("capitalizes the first letter of a string", () => {
    expect(string_functions.capitalize("capitalize")).toEqual("Capitalize");
  });

  it("converts a parameterized string to multiple space-separated words", () => {
    expect(string_functions.sentenceFromParam("to_object_param")).toEqual("to object param");
  });
});
