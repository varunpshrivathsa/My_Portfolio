import { Text, Button, Avatar, Row, Schema, Meta } from "@once-ui-system/core";
import { home, about, person, baseURL } from "@/resources";
import { StatusBar } from "@/components";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Hero: full-width video with text overlaid at the top */}
      <div style={{
        position: "relative",
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
        marginTop: "-2.5rem",
        marginBottom: "-2.5rem",
        height: "calc(100vh - 80px)",
        overflow: "hidden",
      }}>
        <video
          src="/videos/demo.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />

        {/* Text overlay — upper portion of the video */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
          padding: "5rem 2rem 0",
        }}>
          <Text
            onBackground="neutral-weak"
            variant="display-default-m"
            align="center"
          >
            {home.subline}
          </Text>

          <StatusBar />

          <Button
            id="about"
            data-border="rounded"
            href={about.path}
            variant="secondary"
            size="m"
            weight="default"
            arrowIcon
          >
            <Row gap="8" vertical="center" paddingRight="4">
              {about.avatar.display && (
                <Avatar
                  marginRight="8"
                  style={{ marginLeft: "-0.75rem" }}
                  src={person.avatar}
                  size="m"
                />
              )}
              {about.title}
            </Row>
          </Button>
        </div>
      </div>
    </>
  );
}
