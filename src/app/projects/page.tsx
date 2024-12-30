// src/app/main/projects/index.tsx
"use client";

import { Card, Col, Row, Button } from "antd";
import { GithubOutlined, LinkOutlined } from "@ant-design/icons";
import Link from "next/link";

const projects = [
  {
    title: "IT Moments",
    description: "A full-stack web application for tech enthusiasts.",
    image: "/assets/image/it-moments.png",
    github: "https://github.com/trhgatu/it-moments-fullstack",
    liveLink: "https://www.your-project-domain.com",
  },
  {
    title: "Movie Station",
    description: "A movie search app using ReactJS and the Movie Database API.",
    image: "/assets/image/movie-app.png",
    github: "https://github.com/trhgatu/movie-app-fe",
    liveLink: "https://www.your-project-domain.com",
  },
];

export default function PageProjects() {
  return (
    <div className="mx-auto w-full max-w-6xl">
      <h1 className="text-4xl font-bold text-center mb-8">Our Projects</h1>

      <Row gutter={[16, 16]}>
        {projects.map((project, index) => (
          <Col span={24} sm={12} lg={8} key={index}>
            <Card
              hoverable
              cover={<img alt={project.title} src={project.image} />}
              actions={[
                <Link href={project.github} target="_blank" passHref>
                  <Button icon={<GithubOutlined />} type="link">
                    GitHub
                  </Button>
                </Link>,
                <Link href={project.liveLink} target="_blank" passHref>
                  <Button icon={<LinkOutlined />} type="link">
                    View Live
                  </Button>
                </Link>,
              ]}
            >
              <Card.Meta title={project.title} description={project.description} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
