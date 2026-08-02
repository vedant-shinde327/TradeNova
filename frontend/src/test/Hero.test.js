import { describe, expect, test } from "@jest/globals";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Hero from "../landing_page/home/Hero";

//Test Suite

describe("Home component", () => {
  test("renders hero image", () => {
    render(<Hero />);
    const heroImg = screen.getAllByAltText("HeroImg");
    expect(heroImg).toBeInTheDocument();
    expect(heroImg).toHaveAttribute("src", "../../assets/images/homeHero.png");
  });
});
