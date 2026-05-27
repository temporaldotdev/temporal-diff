import React from "react";
import { createRoot } from "react-dom/client";
import DiffView from "../diff-viewer/diff-view";

const root = createRoot(document.getElementById("root"));
root.render(<DiffView />);
