// src/app/resume/page.tsx (or wherever this file lives)
import { Column, Heading, Text } from "@once-ui-system/core";

export const metadata = { title: "Resume" };

export default function ResumePage() {
  return (
    <Column maxWidth="xl" gap="l" paddingY="16">
      <Heading variant="display-strong-s">Resume</Heading>

      <Text>
        <a href="/resume.pdf" target="_blank" rel="noreferrer">
          Download PDF
        </a>
      </Text>

      {/* Inline PDF viewer */}
      <div
        style={{
          width: "100%",
          height: "82vh",
          borderRadius: "16px",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "0 0 0 1px rgba(0,0,0,0.2) inset",
          background: "rgba(0,0,0,0.2)",
        }}
      >
        {/* Try <object> first (best fallback behavior), then <iframe> */}
        <object
          data="/resume.pdf#toolbar=1&navpanes=0&scrollbar=1"
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <iframe
            src="/resume.pdf#toolbar=1&navpanes=0&scrollbar=1"
            width="100%"
            height="100%"
            style={{ border: "none" }}
          />
          <div style={{ padding: 16 }}>
            <Text>
              Your browser can’t display the PDF here.{" "}
              <a href="/resume.pdf" target="_blank" rel="noreferrer">
                Open it in a new tab
              </a>{" "}
              or download above.
            </Text>
          </div>
        </object>
      </div>
    </Column>
  );
}
