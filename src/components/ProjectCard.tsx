"use client";

import { Column, Flex, Heading, SmartLink, Text } from "@once-ui-system/core";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tools: string[];
  github?: string;
  demo?: string;
  priority?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  tools = [],
  github,
  demo,
}) => {
  return (
    <Column fillWidth gap="m">
      <div
        style={{
          width: "100%",
          height: "260px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          borderRadius: "16px",
          background: "var(--once-color-neutral-medium)",
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>

      <Column fillWidth paddingX="s" paddingTop="12" paddingBottom="24" gap="16">
        {title && (
          <Heading
            as="h2"
            wrap="balance"
            variant="heading-strong-xl"
            style={{
              minHeight: "72px",
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            {title}
          </Heading>
        )}

        {description?.trim() && (
          <Text
            wrap="balance"
            variant="body-default-s"
            onBackground="neutral-weak"
            style={{
              minHeight: "96px",
            }}
          >
            {description}
          </Text>
        )}

        {tools.length > 0 && (
          <Flex gap="8" wrap>
            {tools.map((tool) => (
              <Text
                key={tool}
                as="span"
                variant="label-default-s"
                onBackground="neutral-strong"
                style={{
                  border: "1px solid var(--once-color-neutral-weak)",
                  padding: "4px 10px",
                  borderRadius: "999px",
                }}
              >
                {tool}
              </Text>
            ))}
          </Flex>
        )}

        {(github || demo) && (
          <Flex gap="12" wrap>
            {github && (
              <SmartLink
                href={github}
                suffixIcon="arrowUpRightFromSquare"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  border: "1px solid var(--once-color-neutral-weak)",
                  borderRadius: "10px",
                  padding: "8px 14px",
                  width: "fit-content",
                  textDecoration: "none",
                }}
              >
                <Text variant="body-default-s">GitHub</Text>
              </SmartLink>
            )}

            {demo && (
              <SmartLink
                href={demo}
                suffixIcon="arrowUpRightFromSquare"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  border: "1px solid var(--once-color-neutral-weak)",
                  borderRadius: "10px",
                  padding: "8px 14px",
                  width: "fit-content",
                  textDecoration: "none",
                }}
              >
                <Text variant="body-default-s">View deployment</Text>
              </SmartLink>
            )}
          </Flex>
        )}
      </Column>
    </Column>
  );
};