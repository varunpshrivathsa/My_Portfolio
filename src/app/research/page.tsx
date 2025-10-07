import { Column, Heading, Text } from "@once-ui-system/core";

export const metadata = { title: "Research & Publications" };

export default function ResearchPage() {
  return (
    <Column maxWidth="m" gap="l" paddingY="16">
      <Heading variant="display-strong-s">Research & Publications</Heading>
      <Text onBackground="neutral-weak">
        Coming soon: publications, preprints, and talks.
      </Text>
    </Column>
  );
}
