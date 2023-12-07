import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../App";

describe("App component", () => {
    it("renders without errors", () => {
        render(
            <Router>
                <App />
            </Router>
        );
    });
});
