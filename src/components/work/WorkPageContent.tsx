"use client";

import { useState } from "react";
import { Flex, Text } from "@once-ui-system/core";
import { Projects } from "@/components/work/Projects";

const categories = ["Perception", "Robotics Systems","SLAM"];

export function WorkPageContent() {
  const [category, setCategory] = useState("Perception");

  return (
    <>
      <Flex
        gap="12"
        wrap
        marginBottom="32"
        style={{ justifyContent: "center" }}
      >
        {categories.map((cat) => {
          const active = category === cat;

          return (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              style={{
                padding: "8px 16px",
                borderRadius: "999px",
                border: active
                  ? "1px solid white"
                  : "1px solid var(--once-color-neutral-weak)",
                background: active ? "white" : "transparent",
                color: active ? "black" : "white",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              <Text
                as="span"
                variant="body-default-s"
                style={{ color: "inherit" }}
              >
                {cat}
              </Text>
            </button>
          );
        })}
      </Flex>

      <Projects layout="grid" category={category} />
    </>
  );
}