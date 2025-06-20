import { classNames } from "shared/lib/classNames/classNames";

describe("classNames", () => {
  test("with only first param", () => {
    expect(classNames("someClass")).toBe("someClass");
  });

  test("with addittonal class", () => {
    const expected = "someClass class1 class2";
    expect(classNames("someClass", {}, ["class1", "class2"])).toBe(expected);
  });

  test("with mods", () => {
    const expected = "someClass class1 class2 hovered scrollbar";
    expect(
      classNames("someClass", { hovered: true, scrollbar: true }, [
        "class1",
        "class2",
      ])
    ).toBe(expected);
  });

  test("with mods false", () => {
    const expected = "someClass class1 class2 hovered";
    expect(
      classNames("someClass", { hovered: true, scrollbar: false }, [
        "class1",
        "class2",
      ])
    ).toBe(expected);
  });
});
//узнать почему mode добавляется в самый конец + посмотреть как они работают
