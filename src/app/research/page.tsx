import { Column, Heading, Text, Row, Button, Badge } from "@once-ui-system/core";

export const metadata = { title: "Research & Publications" };

export default function ResearchPage() {
  return (
    <Column maxWidth="m" gap="l" paddingY="16">

      <Heading variant="display-strong-s">Research & Publications</Heading>

      <Column padding="20" radius="l" border="neutral-alpha-medium" gap="12">
        <Heading variant="heading-strong-m">
          Environmental Impact Analysis using Satellite Image Processing:
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

    </Column>
  );
}