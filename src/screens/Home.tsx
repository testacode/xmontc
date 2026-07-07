import { Box, Text } from 'ink';
import { Logo } from '../components/Logo.js';
import { Divider } from '../components/Divider.js';
import { List } from '../components/List.js';
import { Footer } from '../components/Footer.js';
import { useListNav } from '../hooks/useListNav.js';
import { featuredProjects } from '../data/projects.js';
import { links } from '../data/profile.js';
import { openUrl } from '../services/browser.js';
import { theme } from '../theme.js';
import type { Screen } from '../App.js';

type Props = { onNavigate: (screen: Screen) => void };

const sections: readonly { label: string; screen: Screen }[] = [
  { label: 'About', screen: 'about' },
  { label: 'Projects', screen: 'projects' },
];

export function Home({ onNavigate }: Props) {
  const projectItems = featuredProjects.map((p) => ({
    label: p.name,
    hint: p.technologies[0],
  }));
  const sectionItems = sections.map((s) => ({ label: s.label }));
  const linkItems = links.map((l) => ({ label: l.name }));
  const count = projectItems.length + sectionItems.length + linkItems.length;

  const selected = useListNav(count, (index) => {
    if (index < projectItems.length) {
      const project = featuredProjects[index];
      const url = project?.url ?? project?.githubUrl;
      if (url) openUrl(url);
    } else if (index < projectItems.length + sectionItems.length) {
      const section = sections[index - projectItems.length];
      if (section) onNavigate(section.screen);
    } else {
      const link = links[index - projectItems.length - sectionItems.length];
      if (link) openUrl(link.url);
    }
  });

  return (
    <Box flexDirection="column">
      <Logo />
      <Divider />
      <Box flexDirection="column" marginY={1}>
        <Text color={theme.dim}>Recent Projects</Text>
        <List items={projectItems} selected={selected} />
      </Box>
      <Divider />
      <Box marginY={1}>
        <List items={sectionItems} selected={selected} offset={projectItems.length} />
      </Box>
      <Divider />
      <Box marginY={1}>
        <List
          items={linkItems}
          selected={selected}
          offset={projectItems.length + sectionItems.length}
        />
      </Box>
      <Divider />
      <Footer
        keys={[
          ['↑↓', 'move'],
          ['enter', 'open'],
          ['g', 'github'],
          ['w', 'website'],
          ['q', 'quit'],
        ]}
      />
    </Box>
  );
}
