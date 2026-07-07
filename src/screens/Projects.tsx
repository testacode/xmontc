import { useState } from 'react';
import { Box, Text, useInput } from 'ink';
import { Divider } from '../components/Divider.js';
import { Footer } from '../components/Footer.js';
import { projects } from '../data/projects.js';
import { openUrl } from '../services/browser.js';
import { theme } from '../theme.js';

export function Projects() {
  const [index, setIndex] = useState(0);
  const selected = projects[index];

  useInput((_input, key) => {
    if (key.upArrow) setIndex((i) => (i - 1 + projects.length) % projects.length);
    if (key.downArrow) setIndex((i) => (i + 1) % projects.length);
    if (key.return && selected) {
      const url = selected.url ?? selected.githubUrl;
      if (url) openUrl(url);
    }
  });

  return (
    <Box flexDirection="column">
      <Text color={theme.dim}>Projects</Text>
      <Box flexDirection="column" marginY={1}>
        {projects.map((project, i) => (
          <Box key={project.id} justifyContent="space-between" width={44}>
            <Text color={i === index ? theme.accent : theme.text} bold={i === index}>
              {i === index ? '▶ ' : '  '}
              {project.name}
            </Text>
            <Text color={project.status === 'live' ? theme.accent : theme.dim}>
              {project.status === 'live' ? '●' : '○'}
            </Text>
          </Box>
        ))}
      </Box>
      <Divider />
      {selected ? (
        <Box flexDirection="column" marginY={1} width={44}>
          <Text color={theme.text}>{selected.description}</Text>
          <Box marginTop={1}>
            <Text color={theme.dim}>{selected.technologies.join(' · ')}</Text>
          </Box>
          {!selected.url && !selected.githubUrl ? (
            <Text color={theme.dim}>coming soon</Text>
          ) : null}
        </Box>
      ) : null}
      <Divider />
      <Footer
        keys={[
          ['↑↓', 'move'],
          ['enter', 'open'],
          ['esc', 'back'],
          ['q', 'quit'],
        ]}
      />
    </Box>
  );
}
