import { Column, Heading, Text, Row, Button, Badge } from "@once-ui-system/core";

export const metadata = { title: "Research & Publications" };

export default function ResearchPage() {
  return (
    <Column maxWidth="l" gap="l" paddingY="16">
      <Heading variant="display-strong-s">Research & Publications</Heading>

      <Row
        padding="20"
        radius="l"
        border="neutral-alpha-medium"
        gap="24"
        horizontal="between"
        vertical="start"
        s={{ direction: "column" }}
      >
        {/* Left side */}
        <Column gap="12" flex={1}>
          <Heading variant="heading-strong-m">
            Environmental Impact Analysis using Satellite Image Processing:
            <br />
            A Case Study on Bangalore STRR Phase-1
          </Heading>

          <Text onBackground="neutral-medium">
            <b>V. P. Shrivathsa</b>, G. Singh BS, S. Reddy U, R. T M
          </Text>

          <Row gap="12">
            <Badge>IEEE ASIANCON 2024</Badge>
          </Row>

          <Row gap="12">
            <Button
              href="https://ieeexplore.ieee.org/document/10838099"
              prefixIcon="openLink"
              size="s"
            >
              View Paper
            </Button>
          </Row>
        </Column>

        {/* Right side images */}
        <Row gap="16" s={{ direction: "column" }}>
          <a href="/research/strr-1.png" target="_blank" rel="noopener noreferrer">
            <img
              src="/research/strr-1.png"
              alt="Research figure 1"
              style={{
                width: "220px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "12px",
                cursor: "pointer",
                display: "block",
              }}
            />
          </a>

          <a href="/research/strr-2.png" target="_blank" rel="noopener noreferrer">
            <img
              src="/research/strr-2.png"
              alt="Research figure 2"
              style={{
                width: "220px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "12px",
                cursor: "pointer",
                display: "block",
              }}
            />
          </a>
        </Row>
      </Row>
    </Column>
  );
}