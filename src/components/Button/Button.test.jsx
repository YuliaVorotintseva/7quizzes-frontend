import React from "react";
import { describe, expect, vi, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import Button from "./Button";

describe("Button component", () => {
  test("renders with correct text", () => {
    const buttonText = "Click me";
    render(
      <Button className="test-class" onClick={() => {}} text={buttonText} />,
    );

    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });

  test("calls onClick callback when clicked", () => {
    const handleClick = vi.fn();
    render(
      <Button className="test-class" onClick={handleClick} text="Click me" />,
    );

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("has disabled class when disabled", () => {
    render(
      <Button
        className="test-class"
        onClick={() => {}}
        text="Disabled button"
        disabled={true}
      />,
    );

    const button = screen.getByRole("button");
    expect(button).toHaveClass("disabled");
  });

  test("does not call onClick when disabled", () => {
    const handleClick = vi.fn();
    render(
      <Button
        className="test-class"
        onClick={handleClick}
        text="Disabled button"
        disabled={true}
      />,
    );

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  test("applies custom className", () => {
    const testClassName = "custom-class";
    render(
      <Button
        className={testClassName}
        onClick={() => {}}
        text="Test button"
      />,
    );

    const button = screen.getByRole("button");
    expect(button).toHaveClass(testClassName);
    expect(button).toHaveClass("button");
  });
});
