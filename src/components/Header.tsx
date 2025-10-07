"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Fade, Flex, Line, Row, ToggleButton } from "@once-ui-system/core";

import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";
import {
  about,
  work,
  blog,
  research,
  resume,
  contact,
  routes,
  display
} from "@/resources";


// type TimeDisplayProps = {
//   timeZone: string;
//   locale?: string; // Optionally allow locale, defaulting to 'en-GB'
// };

// const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "en-GB" }) => {
//   const [currentTime, setCurrentTime] = useState("");

//   useEffect(() => {
//     const updateTime = () => {
//       const now = new Date();
//       const options: Intl.DateTimeFormatOptions = {
//         timeZone,
//         hour: "2-digit",
//         minute: "2-digit",
//         second: "2-digit",
//         hour12: false,
//       };
//       const timeString = new Intl.DateTimeFormat(locale, options).format(now);
//       setCurrentTime(timeString);
//     };

//     updateTime();
//     const intervalId = setInterval(updateTime, 1000);

//     return () => clearInterval(intervalId);
//   }, [timeZone, locale]);

//   return <>{currentTime}</>;
// };

// export default TimeDisplay;

export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <>
      <Fade s={{ hide: true }} fillWidth position="fixed" height="80" zIndex={9} />
      <Fade
        hide
        s={{ hide: false }}
        fillWidth
        position="fixed"
        bottom="0"
        to="top"
        height="80"
        zIndex={9}
      />
      <Row
        fitHeight
        className={styles.position}
        position="sticky"
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
        s={{
          position: "fixed",
        }}
      >
        <Row paddingLeft="12" fillWidth vertical="center" textVariant="body-default-s">
          {/* {display.location && <Row s={{ hide: true }}>{person.location}</Row>} */}
        </Row>
        <Row fillWidth horizontal="center">
          <Row
            background="page"
            border="neutral-alpha-weak"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
          >
            <Row gap="4" vertical="center" textVariant="body-default-s" suppressHydrationWarning>
              {/* (Optional) Home icon — set SHOW_HOME to false to hide */}
              {(() => {
                const SHOW_HOME = true; // ← change to true if you want the home icon back
                return SHOW_HOME && routes["/"] ? (
                  <>
                    <ToggleButton prefixIcon="home" href="/" selected={pathname === "/"} />
                    <Line background="neutral-alpha-medium" vert maxHeight="24" />
                  </>
                ) : null;
              })()}

              {/* About */}
              {routes["/about"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      // prefixIcon="person"
                      href="/about"
                      label={about.label}
                      selected={pathname === "/about"}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton prefixIcon="person" href="/about" selected={pathname === "/about"} />
                  </Row>
                </>
              )}

              {/* Projects (Work) */}
              {routes["/work"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      // prefixIcon="grid"
                      href="/work"
                      label={work.label}
                      selected={pathname.startsWith("/work")}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton prefixIcon="grid" href="/work" selected={pathname.startsWith("/work")} />
                  </Row>
                </>
              )}

              {/* Research & Publications */}
              {routes["/research"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      // prefixIcon="lab"   // pick any icon key your icon set supports
                      href="/research"
                      label={research.label}
                      selected={pathname.startsWith("/research")}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton prefixIcon="lab" href="/research" selected={pathname.startsWith("/research")} />
                  </Row>
                </>
              )}

              {/* Blogs */}
              {routes["/blog"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      // prefixIcon="book"
                      href="/blog"
                      label={blog.label}
                      selected={pathname.startsWith("/blog")}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton prefixIcon="book" href="/blog" selected={pathname.startsWith("/blog")} />
                  </Row>
                </>
              )}

              {/* Resume */}
              {routes["/resume"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      // prefixIcon="file"
                      href="/resume"      // change to "/resume.pdf" if you linked directly to a PDF
                      label={resume.label}
                      selected={pathname.startsWith("/resume")}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton prefixIcon="file" href="/resume" selected={pathname.startsWith("/resume")} />
                  </Row>
                </>
              )}

              {/* Contact */}
              {routes["/contact"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      // prefixIcon="mail"
                      href="/contact"
                      label={contact.label}
                      selected={pathname.startsWith("/contact")}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton prefixIcon="mail" href="/contact" selected={pathname.startsWith("/contact")} />
                  </Row>
                </>
              )}

              {/* Theme switcher */}
              {display.themeSwitcher && (
                <>
                  <Line background="neutral-alpha-medium" vert maxHeight="24" />
                  <ThemeToggle />
                </>
              )}
            </Row>
          </Row>
        </Row>
        <Flex fillWidth horizontal="end" vertical="center">
          <Flex
            paddingRight="12"
            horizontal="end"
            vertical="center"
            textVariant="body-default-s"
            gap="20"
          >
            <Flex s={{ hide: true }}>
              {/* {display.time && <TimeDisplay timeZone={person.location} />} */}
            </Flex>
          </Flex>
        </Flex>
      </Row>
    </>
  );
};
