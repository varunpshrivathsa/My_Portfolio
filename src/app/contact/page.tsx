import { Column, Heading, Text } from "@once-ui-system/core";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <Column maxWidth="s" gap="l" paddingY="16">
      <Heading variant="display-strong-s">Contact</Heading>
      <Text>Email: <a href={`mailto:${"vphan@uic.edu"}`}>vphan@uic.edu</a></Text>
      <Text>Mobile: (312)-478-2342</Text>
    </Column>
  );
}
