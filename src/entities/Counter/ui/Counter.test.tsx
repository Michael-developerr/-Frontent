// интаграционныые тестф
import { screen } from "@testing-library/react";

import { ComponentRender } from "shared/lib/tests/componentRender/ComponentRender";
import { Counter } from "./Counter";

import { userEvent } from "@testing-library/user-event";

describe("Counter", () => {
  test("with only first param", () => {
    ComponentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    expect(screen.getByTestId("value-title")).toHaveTextContent("10");
  });

  test("increment", async () => {
    ComponentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });

    await userEvent.click(screen.getByTestId("increment-btn"));
    expect(screen.getByTestId("value-title")).toHaveTextContent("11");
  });

  test("decrement", async () => {
    ComponentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    await userEvent.click(screen.getByTestId("decrement-btn"));
    expect(screen.getByTestId("value-title")).toHaveTextContent("9");
  });
});
