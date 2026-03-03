import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Content from "../src/components/Content";
import Heading from "../src/components/Heading";
import Quote from "../src/components/Quote";
import Home from "../src/pages/Home";
import NotFound from "../src/pages/NotFound";

describe("Heading", () => {
  it("renders text with default h1 tag", () => {
    render(<Heading>Hello World</Heading>);
    const el = screen.getByRole("heading", { level: 1 });
    expect(el).toHaveTextContent("Hello World");
  });

  it("renders with a custom tag", () => {
    render(<Heading tag="h2">Subtitle</Heading>);
    const el = screen.getByRole("heading", { level: 2 });
    expect(el).toHaveTextContent("Subtitle");
  });
});

describe("Quote", () => {
  it("renders the quote text and citation", () => {
    render(<Quote cite="John 3:16">For God so loved the world</Quote>);
    expect(screen.getByText("For God so loved the world")).toBeInTheDocument();
    expect(screen.getByText("John 3:16")).toBeInTheDocument();
  });
});

describe("Content", () => {
  it("renders a title and children", () => {
    render(<Content title="About Us">Some content here</Content>);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("About Us");
    expect(screen.getByText("Some content here")).toBeInTheDocument();
  });
});

describe("Home page", () => {
  it("renders all main sections", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(screen.getByText("Who Is Way Maker")).toBeInTheDocument();
    expect(screen.getByText("Our Goals")).toBeInTheDocument();
    expect(screen.getByText("Current Products")).toBeInTheDocument();
    expect(screen.getByText("Contact Us!")).toBeInTheDocument();
  });

  it("renders product pricing", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText("Chicken Eggs")).toBeInTheDocument();
    expect(screen.getByText("Duck Eggs")).toBeInTheDocument();
  });

  it("renders the Isaiah quote", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText("Isaiah 30:21 CSB")).toBeInTheDocument();
  });
});

describe("NotFound page", () => {
  it("renders 404 status and message", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText("Page not found")).toBeInTheDocument();
  });
});
