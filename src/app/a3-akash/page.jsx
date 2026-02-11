"use client";

import Button from "@mui/material/Button";

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Assignment 3: My New Page</h1>

      <p>
        <strong>URL:</strong> /a3-akash
      </p>

      <p>
        <strong>File:</strong> src/app/a3-akash/page.jsx
      </p>

      <Button
        variant="contained"
        color="primary"
        onClick={() => (window.location.href = "/")}
      >
        Back to Home
      </Button>
    </main>
  );
}
