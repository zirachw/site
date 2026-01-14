import { styled } from "@linaria/react";
import Link from "next/link";
import Image from "next/image";

import { IMAGES, SKILL_CATEGORIES, AWARDS, WRITINGS, PROJECTS, EXPERIENCES } from "./constants";
import Carousel from "@/components/Carousel";
import Chip from "@/components/Chip";
import Award from "@/components/Award";
import Button from "@/components/Button";

export default function Home() {
  return (
    <HomeWrapper>
      {/* Introduction */}
      <Header>
        <Left1>
          <Location>
            <Flag>🇮🇩</Flag>
            <span>Bandung, Indonesia</span>
          </Location>
          <Title>
            Welcome, I&apos;m <Highlight>Razi.</Highlight>
          </Title>
          <Role>AI Engineer • Data Scientist • Software Engineer</Role>
          <Description>
            A third-year{" "}
            <Highlight>
              <b>Computer Science</b>
            </Highlight>{" "}
            student at{" "}
            <Highlight>
              <b>Bandung Institute of Technology</b>
            </Highlight>
            , passionate about data science, machine learning, and web development.
          </Description>
        </Left1>
        <Right1>
          <Carousel>
            {IMAGES.map((item, i) => (
              <ImageItem key={i}>
                {item.isGalleryLink ? (
                  <GalleryLinkWrapper href="/gallery">
                    <GalleryLinkText>
                      Check the gallery <span>→</span>
                    </GalleryLinkText>
                  </GalleryLinkWrapper>
                ) : (
                  <Image
                    src={item.path!}
                    alt={item.alt}
                    fill
                    sizes="600px"
                    priority={i === 0}
                    loading={i === 0 ? "eager" : "lazy"}
                    draggable={false}
                  />
                )}
              </ImageItem>
            ))}
          </Carousel>
        </Right1>
      </Header>

      {/* Latest Writings */}
      <Section>
        <SectionHeader>
          <SectionTitle>Latest Writings</SectionTitle>
          <AllButtonWrapper>
            <Button href="/writings" variant="simple" icon="→">
              All Writings
            </Button>
          </AllButtonWrapper>
        </SectionHeader>
        <WritingsGrid>
          {WRITINGS.map((writing, i) => (
            <WritingCard key={i}>
              <WritingTitle>{writing.title}</WritingTitle>
              <WritingDate>{writing.date}</WritingDate>
              <WritingPreview>{writing.preview}</WritingPreview>
              <Button href={`/writings/${writing.slug}`} variant="simple" icon="→">
                Read more
              </Button>
            </WritingCard>
          ))}
        </WritingsGrid>
      </Section>

      {/* Projects */}
      <Section>
        <SectionHeader>
          <SectionTitle>Projects</SectionTitle>
          <AllButtonWrapper>
            <Button href="/projects" variant="simple" icon="→">
              All Projects
            </Button>
          </AllButtonWrapper>
        </SectionHeader>
        <ProjectsGrid>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={i}>
              <ProjectImageWrapper>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="400px"
                  style={{ objectFit: "cover", filter: "brightness(0.8)" }}
                />
                <ProjectOverlay>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectTechTags>
                    {project.techTags.map((tag, j) => (
                      <Chip key={j} variant="transparent">
                        {tag}
                      </Chip>
                    ))}
                  </ProjectTechTags>
                </ProjectOverlay>
              </ProjectImageWrapper>
              <ProjectContent>
                <ProjectDescription>{project.description}</ProjectDescription>
                {project.isPrivate ? (
                  <Button variant="project" disabled>
                    Private
                  </Button>
                ) : (
                  <Button href={project.link} variant="project">
                    View Project
                  </Button>
                )}
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Section>

      {/* Experience */}
      <Section>
        <SectionHeader>
          <SectionTitle>Experiences</SectionTitle>
          <AllButtonWrapper>
            <Button href="/experiences" variant="simple" icon="→">
              All Experiences
            </Button>
          </AllButtonWrapper>
        </SectionHeader>
        <ExperiencesList>
          {EXPERIENCES.slice(0, 3).map((experience, i) => (
            <ExperienceItem key={i}>
              <ExperienceDate>
                <ExperiencePeriod>{experience.date}</ExperiencePeriod>
                <ExperienceLocation>{experience.location}</ExperienceLocation>
              </ExperienceDate>
              <ExperienceDetails>
                <ExperienceTitle>{experience.title}</ExperienceTitle>
                <ExperienceOrganization>{experience.organization}</ExperienceOrganization>
                <ExperienceDescription>{experience.description}</ExperienceDescription>
                <ExperienceSkills>
                  {experience.skills.map((skill, j) => (
                    <Chip key={j}>{skill}</Chip>
                  ))}
                </ExperienceSkills>
              </ExperienceDetails>
            </ExperienceItem>
          ))}
        </ExperiencesList>
      </Section>

      {/* Skills & Awards */}
      <Section>
        <ContentWrapper>
          <SkillsSection>
            <SectionTitle>Technical Skills</SectionTitle>
            <SkillsGrid>
              {SKILL_CATEGORIES.map((category, i) => (
                <SkillCategory key={i}>
                  <CategoryTitle>{category.title}</CategoryTitle>
                  <SkillsList>
                    {category.skills.map((skill, j) => (
                      <Chip key={j}>{skill}</Chip>
                    ))}
                  </SkillsList>
                </SkillCategory>
              ))}
            </SkillsGrid>
          </SkillsSection>

          <AwardsSection>
            <SectionTitle>Latest Awards</SectionTitle>
            <AwardsList>
              {AWARDS.map((award, i) => (
                <Award
                  key={i}
                  year={award.year}
                  title={award.title}
                  organization={award.organization}
                />
              ))}
            </AwardsList>
          </AwardsSection>
        </ContentWrapper>
        <ButtonWrapper>
          <Button href="/about" variant="simple" icon="→">
            More about me
          </Button>
        </ButtonWrapper>
      </Section>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  --css-file: homepage;
`;

const Header = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  gap: 1rem;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Left1 = styled.div`
  flex: 1 1 55%;
  text-align: left;

  @media (max-width: 1024px) {
    flex: 1 1 100%;
  }
`;

const Location = styled.div`
  font-family: "Inter";
  font-size: 0.95rem;
  color: var(--color-text-muted);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;

  @media (max-width: 640px) {
    font-size: 0.85rem;
    margin-bottom: 1rem;
  }
`;

const Flag = styled.span`
  margin-right: 0.75rem;
  font-size: 1.25rem;

  @media (max-width: 640px) {
    font-size: 1.1rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: var(--color-text-subtle);
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 640px) {
    font-size: 2rem;
  }
`;

const Highlight = styled.span`
  color: var(--color-text);
  font-weight: bold;
  transition: color 0.3s ease;
`;

const Role = styled.p`
  font-family: "Inter";
  font-size: 1.1rem;
  color: var(--color-text-muted);
  margin-bottom: 1.5rem;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 640px) {
    font-size: 0.95rem;
    margin-bottom: 1rem;
  }
`;

const Description = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }

  @media (max-width: 640px) {
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
  }
`;

const Right1 = styled.div`
  flex: 1 1 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 280px;
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    flex: 1 1 100%;
    width: 100%;
    min-height: 238px;
  }

  @media (max-width: 768px) {
    min-height: 210px;
  }

  @media (max-width: 640px) {
    min-height: 182px;
  }
`;

const ImageItem = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  img {
    object-fit: cover;
    user-select: none;
    -webkit-user-drag: none;
    -moz-user-drag: none;
  }
`;

const GalleryLinkWrapper = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(160, 160, 160, 0.9) 0%, rgba(208, 208, 208, 0.9) 100%);
  text-decoration: none;
  transition: all 0.3s ease;

  .dark & {
    background: linear-gradient(135deg, rgba(30, 30, 30, 0.98) 0%, rgba(18, 18, 18, 0.98) 100%);
  }

  &:hover {
    transform: scale(1.02);
  }
`;

const GalleryLinkText = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;

  span {
    font-size: 1.25rem;
    transition: transform 0.3s ease;
  }

  ${GalleryLinkWrapper}:hover & span {
    transform: translateX(5px);
  }

  @media (max-width: 768px) {
    font-size: 1rem;

    span {
      font-size: 1.15rem;
    }
  }

  @media (max-width: 640px) {
    font-size: 0.95rem;

    span {
      font-size: 1.1rem;
    }
  }
`;

const Section = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2.5rem 0;

  @media (max-width: 640px) {
    padding: 2rem 0;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;

  @media (max-width: 640px) {
    margin-bottom: 1.5rem;
  }
`;

const AllButtonWrapper = styled.div`
  font-size: 1.5rem;
  padding-top: 0.25rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 640px) {
    font-size: 1.1rem;
  }
`;

const WritingsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const WritingCard = styled.article`
  background-color: var(--color-background-secondary);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px var(--color-shadow-light);
  }

  @media (max-width: 640px) {
    padding: 1.5rem;
  }
`;

const WritingTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.75rem;
  line-height: 1.3;
  transition: color 0.3s ease;

  /* Ensure single line for consistency */
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 640px) {
    font-size: 1.25rem;
  }
`;

const WritingDate = styled.time`
  font-size: 0.875rem;
  color: var(--color-text-muted);
  display: block;
  margin-bottom: 1rem;
  transition: color 0.3s ease;
`;

const WritingPreview = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
  transition: color 0.3s ease;

  /* Limit to 3 lines for consistency */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 640px) {
    font-size: 0.95rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ProjectCard = styled.article`
  background-color: var(--color-background-secondary);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px var(--color-shadow-light);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px var(--color-shadow-light);
  }
`;

const ProjectImageWrapper = styled.div`
  position: relative;
  height: 220px;
  overflow: hidden;
`;

const ProjectOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%);
  padding: 1.25rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  color: white;
  margin: 0 0 0.625rem 0;
  font-weight: 600;
`;

const ProjectTechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const ProjectContent = styled.div`
  padding: 1.25rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProjectDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin-bottom: 1rem;
  transition: color 0.3s ease;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 5rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 4rem;
  }

  @media (max-width: 640px) {
    gap: 3rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;

  @media (max-width: 640px) {
    margin-top: 2rem;
  }
`;

const SkillsSection = styled.div`
  flex: 2;
`;

const AwardsSection = styled.div`
  flex: 1;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2.5rem;
  color: var(--color-text);
  position: relative;
  display: inline-block;
  transition: color 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -12px;
    width: 100%;
    height: 12px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 10'%3E%3Cpath d='M0,5 Q25,0 50,5 T100,5' stroke='%23888' stroke-width='2' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
    background-repeat: repeat-x;
    background-size: 100px 12px;
  }

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media (max-width: 640px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const SkillCategory = styled.div``;

const CategoryTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
  color: var(--color-text-secondary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;

  &::before {
    content: "";
    width: 4px;
    height: 20px;
    background: linear-gradient(
      to bottom,
      var(--color-category-gradient-start),
      var(--color-category-gradient-end)
    );
    border-radius: 2px;
  }

  @media (max-width: 640px) {
    font-size: 1.1rem;
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: flex-start;
`;

const AwardsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 640px) {
    gap: 1.5rem;
  }
`;

const ExperiencesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.125rem;

  @media (max-width: 640px) {
    gap: 2.5rem;
  }
`;

const ExperienceItem = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const ExperienceDate = styled.div`
  flex-shrink: 0;
  width: 150px;
  text-align: right;

  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
  }
`;

const ExperiencePeriod = styled.p`
  font-family: "Inter";
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;

  @media (max-width: 640px) {
    font-size: 0.9rem;
  }
`;

const ExperienceLocation = styled.div`
  font-family: "Inter";
  font-size: 0.85rem;
  color: var(--color-text-muted);
  transition: color 0.3s ease;

  @media (max-width: 640px) {
    font-size: 0.8rem;
  }
`;

const ExperienceDetails = styled.div`
  flex: 1;
`;

const ExperienceTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.375rem;
  transition: color 0.3s ease;

  @media (max-width: 640px) {
    font-size: 1.1rem;
  }
`;

const ExperienceOrganization = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  margin-bottom: 0.75rem;
  transition: color 0.3s ease;

  @media (max-width: 640px) {
    font-size: 0.95rem;
  }
`;

const ExperienceDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin-bottom: 0.9375rem;
  transition: color 0.3s ease;

  @media (max-width: 640px) {
    font-size: 0.9rem;
  }
`;

const ExperienceSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
