import {
  Button,
  ButtonProps,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardHeaderProps,
  Grid,
  Typography
} from '@material-ui/core';
import { Assignment, GetApp, GitHub } from '@material-ui/icons';
import fdFinderImage from 'assets/fd-finder.png';
import sudokuSolverImage from 'assets/sudoku-solver.png';
import React, { ImgHTMLAttributes } from 'react';

function ProjectCard(props: React.PropsWithChildren<unknown>): React.ReactElement {
  return (
    <Grid item xs={12} md={6}>
      <Card raised className="h-100">
        <Grid container direction="column" className="h-100" {...props} />
      </Card>
    </Grid>
  );
}

function ProjectCardHeader(props: CardHeaderProps): React.ReactElement {
  return (
    <Grid item>
      <CardHeader {...props} />
    </Grid>
  );
}

function ProjectCardMedia(props: ImgHTMLAttributes<unknown>): React.ReactElement {
  return (
    <Grid item>
      <img className="w-100" {...props} />
    </Grid>
  );
}

function ProjectCardContent(props: React.PropsWithChildren<unknown>): React.ReactElement {
  return (
    <Grid item style={{ flexGrow: 1 }}>
      <CardContent {...props} />
    </Grid>
  );
}

function ProjectCardActions(props: React.PropsWithChildren<unknown>): React.ReactElement {
  return (
    <Grid item>
      <CardActions>
        <Grid container justify="flex-end" spacing={1} {...props} />
      </CardActions>
    </Grid>
  );
}

function ActionButton<T extends React.ElementType>(props: ButtonProps<T>): React.ReactElement {
  return (
    <Grid item>
      <Button {...props} />
    </Grid>
  );
}

export default function ProjectsView(): React.ReactElement {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="h3">Projects</Typography>
      </Grid>
      <Grid item container spacing={1}>
        <ProjectCard>
          <ProjectCardHeader title="Functional Dependency Finder" />
          <ProjectCardMedia src={fdFinderImage} />
          <ProjectCardContent>
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <Typography variant="body1">
                  A simple web app for finding functional dependencies in universal relations.
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">
                  <ul>
                    <li>Takes a .csv upload and produces a table of functional dependencies</li>
                    <li>
                      If there is not a functional dependency with one attribute being the determinant and another being
                      the dependent, then the cell will display which entries in the data set conflict
                    </li>
                    <li>
                      Clicking on the cell highlights the conflicting rows in the data section with the determinant and
                      dependent highlighted in different colors
                    </li>
                    <li>Two attributes can be selected to check for dependencies with a composite determinant</li>
                    <li>The composite table works the same as the main table but only has one row</li>
                  </ul>
                </Typography>
              </Grid>
            </Grid>
          </ProjectCardContent>
          <ProjectCardActions>
            <ActionButton
              startIcon={<GetApp />}
              component="a"
              href={`${process.env.PUBLIC_URL}/fd-finder-data.csv`}
              download
            >
              Download Test File
            </ActionButton>
            <ActionButton
              variant="contained"
              color="primary"
              startIcon={<GitHub />}
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/joshraker/fd-finder"
            >
              Source
            </ActionButton>
            <ActionButton variant="contained" color="primary" component="a" href="https://fd-finder.joshraker.com">
              Try It
            </ActionButton>
          </ProjectCardActions>
        </ProjectCard>

        <ProjectCard>
          <ProjectCardHeader title="Sudoku Solver" />
          <ProjectCardMedia src={sudokuSolverImage} />
          <ProjectCardContent>
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <Typography variant="body1">A React web app that solves sudoku puzzles.</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">
                  <ul>
                    <li>It uses a custom constraint system to determine the possible values for each cell</li>
                    <li>Uses hidden and visible subset methods to eliminate additional possible values for cells</li>
                    <li>
                      If no more possible values can be eliminated using the methods above, it falls back to guessing a
                      value on the cell with the fewest possible values remaining
                    </li>
                    <li>Multiple cells can be filled at once by pasting up to 81 digits or a 9x9 CSV (0 = unknown)</li>
                  </ul>
                </Typography>
              </Grid>
            </Grid>
          </ProjectCardContent>
          <ProjectCardActions>
            <ActionButton
              startIcon={<Assignment />}
              onClick={() =>
                navigator.clipboard.writeText(
                  '1,0,0,0,0,7,0,9,0\n0,3,0,0,2,0,0,0,8\n0,0,9,6,0,0,5,0,0\n0,0,5,3,0,0,9,0,0\n0,1,0,0,8,0,0,0,0\n6,0,0,0,0,4,0,0,2\n3,0,0,0,0,0,0,1,0\n0,4,0,0,0,0,0,0,7\n0,0,7,0,0,0,3,0,0'
                )
              }
            >
              Copy Test Puzzle
            </ActionButton>
            <ActionButton
              variant="contained"
              color="primary"
              startIcon={<GitHub />}
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/joshraker/sudoku-solver-web"
            >
              Source
            </ActionButton>
            <ActionButton variant="contained" color="primary" component="a" href="https://sudoku-solver.joshraker.com">
              Try It
            </ActionButton>
          </ProjectCardActions>
        </ProjectCard>
      </Grid>
    </Grid>
  );
}
