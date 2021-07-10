import { Chip, ChipProps, Container, Grid, Link, LinkProps, Typography } from '@material-ui/core';
import { Dashboard, GitHub, LinkedIn } from '@material-ui/icons';
import GridBreak from 'components/extensions/GridBreak';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

function Section({ children }: React.PropsWithChildren<unknown>): React.ReactElement {
  return (
    <Grid item container direction="column" spacing={1}>
      {children}
    </Grid>
  );
}

function SectionHeader({ children }: React.PropsWithChildren<unknown>): React.ReactElement {
  return (
    <Grid item>
      <Typography variant="h4" className="underline">
        {children}
      </Typography>
    </Grid>
  );
}

function SectionContent({ children }: React.PropsWithChildren<unknown>): React.ReactElement {
  return <Grid item>{children}</Grid>;
}

function Skills({ children }: React.PropsWithChildren<unknown>): React.ReactElement {
  return (
    <Grid item container spacing={1} md={4} xs={12}>
      {children}
    </Grid>
  );
}

function SkillsHeading({ children }: React.PropsWithChildren<unknown>): React.ReactElement {
  return (
    <Grid item>
      <Typography variant="h5">{children}</Typography>
    </Grid>
  );
}

function SkillsContent({ children }: React.PropsWithChildren<unknown>): React.ReactElement {
  return (
    <Grid item container spacing={1}>
      {children}
    </Grid>
  );
}

function Skill(props: ChipProps): React.ReactElement {
  return (
    <Grid item>
      <Chip {...props} />
    </Grid>
  );
}

function Employment({ children }: React.PropsWithChildren<unknown>): React.ReactElement {
  return (
    <Grid item container direction="column" spacing={1}>
      {children}
    </Grid>
  );
}

function EmploymentHeading({ children }: React.PropsWithChildren<unknown>): React.ReactElement {
  return (
    <Grid item container justify="space-between" alignItems="center">
      {children}
    </Grid>
  );
}

function EmploymentHeadingText({ children }: React.PropsWithChildren<unknown>): React.ReactElement {
  return (
    <Grid item>
      <Typography variant="h5">{children}</Typography>
    </Grid>
  );
}

function EmploymentHeadingDuration({ children }: React.PropsWithChildren<unknown>): React.ReactElement {
  return (
    <Grid item>
      <Typography>{children}</Typography>
    </Grid>
  );
}

function EmploymentDescription({ children }: React.PropsWithChildren<unknown>): React.ReactElement {
  return (
    <Grid item>
      <Typography>
        <ul>{children}</ul>
      </Typography>
    </Grid>
  );
}

function EmploymentDescriptionItem({ children }: React.PropsWithChildren<unknown>): React.ReactElement {
  return <li>{children}</li>;
}

function EmployerLink(props: LinkProps): React.ReactElement {
  return <Link color="textSecondary" className="underline" {...props} />;
}

export default function ResumeView(): React.ReactElement {
  return (
    <Container maxWidth="md">
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Typography variant="h3" component="h1">
            Joshua D. Raker
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4">
            <Grid container spacing={1} justify="space-between">
              {[
                {
                  icon: <GitHub />,
                  content: (
                    <Link href="https://github.com/joshraker" color="textSecondary">
                      GitHub
                    </Link>
                  )
                },
                {
                  icon: <LinkedIn />,
                  content: (
                    <Link href="https://www.linkedin.com/in/josh-raker-56652689/" color="textSecondary">
                      LinkedIn
                    </Link>
                  )
                },
                {
                  icon: <Dashboard />,
                  content: (
                    <Link component={RouterLink} to="/projects" color="textSecondary">
                      Projects
                    </Link>
                  )
                }
              ].map(({ icon, content }, index) => (
                <Grid key={index} item xs={12} sm="auto">
                  <Grid container spacing={1}>
                    <Grid item>{icon}</Grid>
                    <Grid item>{content}</Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Typography>
        </Grid>

        <Section>
          <SectionHeader>Education</SectionHeader>
          <SectionContent>
            <Typography>
              <Grid container direction="column" spacing={1}>
                <Grid item container justify="space-between">
                  <Grid item>Purdue School of Science, IUPUI</Grid>
                  <Grid item>Graduated May 2017</Grid>
                </Grid>
                <Grid item container justify="space-between">
                  <Grid item>
                    Bachelor of Science in Computer Science
                    <br />
                    Minor in Mathematics
                  </Grid>
                  <Grid item>GPA: 3.83</Grid>
                </Grid>
              </Grid>
            </Typography>
          </SectionContent>
        </Section>

        <Section>
          <SectionHeader>Skills</SectionHeader>
          <SectionContent>
            <Grid container spacing={2}>
              <Skills>
                <SkillsHeading>Programming Languages</SkillsHeading>
                <SkillsContent>
                  {['Ruby', 'TypeScript', 'JavaScript', 'Go', 'Python', 'Kotlin', 'Java', 'Bash', 'C#', 'C++'].map(
                    (item, i) => (
                      <Skill key={i} label={item} />
                    )
                  )}
                </SkillsContent>
              </Skills>

              <Skills>
                <SkillsHeading>Web Development</SkillsHeading>
                <SkillsContent>
                  {['HTML5', 'CSS', 'Sass', 'React', 'Ruby on Rails', 'NodeJS', 'Django', 'Angular', 'Bootstrap'].map(
                    (item, i) => (
                      <Skill key={i} label={item} />
                    )
                  )}
                </SkillsContent>
              </Skills>

              <Skills>
                <SkillsHeading>Software</SkillsHeading>
                <SkillsContent>
                  {[
                    'Aptible Deploy',
                    'Amazon Web Services',
                    'Google Cloud Platform',
                    'Docker',
                    'Nginx',
                    'SQL',
                    'MongoDB'
                  ].map((item, i) => (
                    <Skill key={i} label={item} />
                  ))}
                </SkillsContent>
              </Skills>
            </Grid>
          </SectionContent>
        </Section>

        <Section>
          <SectionHeader>Employment History</SectionHeader>
          <SectionContent>
            <Grid container direction="column" spacing={1}>
              <Employment>
                <EmploymentHeading>
                  <EmploymentHeadingText>
                    Senior Customer Reliability Engineer -{' '}
                    <EmployerLink href="https://www.aptible.com">Aptible</EmployerLink>
                  </EmploymentHeadingText>
                  <EmploymentHeadingDuration>March 2020 - Present</EmploymentHeadingDuration>
                  <GridBreak />
                  <EmploymentHeadingText>Customer Reliability Engineer</EmploymentHeadingText>
                  <EmploymentHeadingDuration>March 2019 - March 2020</EmploymentHeadingDuration>
                  <SkillsContent>
                    {['Aptible Deploy', 'Docker', 'Amazon Web Services', 'Ruby on Rails'].map((item, i) => (
                      <Skill key={i} label={item} size="small" />
                    ))}
                  </SkillsContent>
                </EmploymentHeading>
                <EmploymentDescription>
                  <EmploymentDescriptionItem>
                    Assisted customers in understanding and using the Aptible Deploy platform
                  </EmploymentDescriptionItem>
                  <EmploymentDescriptionItem>
                    Diagnosed and addressed customer issues with the platform
                  </EmploymentDescriptionItem>
                  <EmploymentDescriptionItem>Developed new features for the platform</EmploymentDescriptionItem>
                </EmploymentDescription>
              </Employment>

              <Employment>
                <EmploymentHeading>
                  <EmploymentHeadingText>
                    Safety App - <EmployerLink href="https://www.archwalls.net">Architectural Walls</EmployerLink>
                  </EmploymentHeadingText>
                  <EmploymentHeadingDuration>August 2020 - May 2021</EmploymentHeadingDuration>
                  <SkillsContent>
                    {['Ruby on Rails', 'TypeScript', 'React', 'Aptible Deploy', 'Google Cloud Storage'].map(
                      (item, i) => (
                        <Skill key={i} label={item} size="small" />
                      )
                    )}
                  </SkillsContent>
                </EmploymentHeading>
                <EmploymentDescription>
                  <EmploymentDescriptionItem>
                    Developed an API and progressive web application to increase construction site safety
                  </EmploymentDescriptionItem>
                  <EmploymentDescriptionItem>
                    Workers are awarded points by observers for certain actions e.g. giving a safety presentation
                  </EmploymentDescriptionItem>
                  <EmploymentDescriptionItem>
                    Leaderboards encourage workers to exhibit safe behavior on an ongoing basis
                  </EmploymentDescriptionItem>
                </EmploymentDescription>
              </Employment>

              <Employment>
                <EmploymentHeading>
                  <EmploymentHeadingText>
                    Software Engineer -{' '}
                    <EmployerLink href="https://www.earthwavetech.com/">Earthwave Technologies</EmployerLink>
                  </EmploymentHeadingText>
                  <EmploymentHeadingDuration>April 2017 - March 2019</EmploymentHeadingDuration>
                  <SkillsContent>
                    {['Kotlin', 'Android Studio', 'Python', 'Django', 'MariaDB'].map((item, i) => (
                      <Skill key={i} label={item} size="small" />
                    ))}
                  </SkillsContent>
                </EmploymentHeading>
                <EmploymentDescription>
                  <EmploymentDescriptionItem>
                    Developed a fleet management application for construction equipment
                  </EmploymentDescriptionItem>
                  <EmploymentDescriptionItem>Developed custom integrations for customers</EmploymentDescriptionItem>
                  <EmploymentDescriptionItem>Maintained databases and other systems</EmploymentDescriptionItem>
                </EmploymentDescription>
              </Employment>

              <Employment>
                <EmploymentHeading>
                  <EmploymentHeadingText>
                    Software Testing Technician -{' '}
                    <EmployerLink href="https://www.kinneygroup.com/">Kinney Group</EmployerLink>
                  </EmploymentHeadingText>
                  <EmploymentHeadingDuration>October 2016 - December 2016</EmploymentHeadingDuration>
                  <SkillsContent>
                    {['Python', 'Bash'].map((item, i) => (
                      <Skill key={i} label={item} size="small" />
                    ))}
                  </SkillsContent>
                </EmploymentHeading>
                <EmploymentDescription>
                  <EmploymentDescriptionItem>
                    Developed automated tests for software developed by other teams
                  </EmploymentDescriptionItem>
                </EmploymentDescription>
              </Employment>

              <Employment>
                <EmploymentHeading>
                  <EmploymentHeadingText>
                    Application Developer Intern -{' '}
                    <EmployerLink href="https://www.genesys.com/inin">Interactive Intelligence</EmployerLink>
                  </EmploymentHeadingText>
                  <EmploymentHeadingDuration>May 2016 - August 2016</EmploymentHeadingDuration>
                  <SkillsContent>
                    {['JavaScript', 'Bootstrap', 'Knockout', 'Java', 'Spring', 'C#', 'ASP.NET', 'AWS'].map(
                      (item, i) => (
                        <Skill key={i} label={item} size="small" />
                      )
                    )}
                  </SkillsContent>
                </EmploymentHeading>
                <EmploymentDescription>
                  <EmploymentDescriptionItem>
                    Developed and tested a project management web application
                  </EmploymentDescriptionItem>
                  <EmploymentDescriptionItem>Maintained legacy application</EmploymentDescriptionItem>
                </EmploymentDescription>
              </Employment>
            </Grid>
          </SectionContent>
        </Section>

        <Section>
          <SectionHeader>Projects</SectionHeader>
          <SectionContent>
            <Grid container direction="column" spacing={1}>
              <Employment>
                <EmploymentHeading>
                  <EmploymentHeadingText>joshraker.com</EmploymentHeadingText>
                  <SkillsContent>
                    {['TypeScript', 'React'].map((item, i) => (
                      <Skill key={i} label={item} size="small" />
                    ))}
                  </SkillsContent>
                </EmploymentHeading>
                <EmploymentDescription>
                  <EmploymentDescriptionItem>This website</EmploymentDescriptionItem>
                </EmploymentDescription>
              </Employment>

              <Employment>
                <EmploymentHeading>
                  <EmploymentHeadingText>Sudoku Solver</EmploymentHeadingText>
                  <SkillsContent>
                    {['Typescript', 'Java'].map((item, i) => (
                      <Skill key={i} label={item} size="small" />
                    ))}
                  </SkillsContent>
                </EmploymentHeading>
                <EmploymentDescription>
                  <EmploymentDescriptionItem>
                    Developed a constraint solving system and implemented it to solve sudoku puzzles
                  </EmploymentDescriptionItem>
                  <EmploymentDescriptionItem>Implemented in Java and JavaScript (TypeScript)</EmploymentDescriptionItem>
                </EmploymentDescription>
              </Employment>

              <Employment>
                <EmploymentHeading>
                  <EmploymentHeadingText>Functional Dependency Finder</EmploymentHeadingText>
                  <SkillsContent>
                    {['JavaScript'].map((item, i) => (
                      <Skill key={i} label={item} size="small" />
                    ))}
                  </SkillsContent>
                </EmploymentHeading>
                <EmploymentDescription>
                  <EmploymentDescriptionItem>
                    Developed a web application that determines the functional dependencies of a universal relation
                  </EmploymentDescriptionItem>
                  <EmploymentDescriptionItem>
                    It can also find composite functional dependencies with two determinant attributes
                  </EmploymentDescriptionItem>
                </EmploymentDescription>
              </Employment>

              <Employment>
                <EmploymentHeading>
                  <EmploymentHeadingText>Courses - IUPUI</EmploymentHeadingText>
                </EmploymentHeading>
                <EmploymentDescription>
                  <EmploymentDescriptionItem>Software Engineering</EmploymentDescriptionItem>
                  <EmploymentDescriptionItem>Principals of Software Design</EmploymentDescriptionItem>
                  <EmploymentDescriptionItem>Database Systems</EmploymentDescriptionItem>
                  <EmploymentDescriptionItem>Artificial Intelligence</EmploymentDescriptionItem>
                  <EmploymentDescriptionItem>Computer Networking</EmploymentDescriptionItem>
                  <EmploymentDescriptionItem>Operating Systems</EmploymentDescriptionItem>
                </EmploymentDescription>
              </Employment>
            </Grid>
          </SectionContent>
        </Section>
      </Grid>
    </Container>
  );
}
