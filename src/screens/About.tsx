import { Box, Text } from 'ink';
import { Divider } from '../components/Divider.js';
import { Footer } from '../components/Footer.js';
import { profile } from '../data/profile.js';
import { theme } from '../theme.js';

export function About() {
  return (
    <Box flexDirection="column">
      <Text color={theme.dim}>About</Text>
      <Box flexDirection="column" marginY={1} width={44}>
        <Text color={theme.text}>{profile.bio}</Text>
      </Box>
      <Divider />
      <Box flexDirection="column" marginY={1}>
        <Text color={theme.dim}>Experience</Text>
        {profile.experience.map((line) => (
          <Text key={line} color={theme.text}>
            {'  '}
            {line}
          </Text>
        ))}
      </Box>
      <Divider />
      <Box flexDirection="column" marginY={1}>
        <Text color={theme.dim}>Stack</Text>
        <Text color={theme.accent}>
          {'  '}
          {profile.stack.join(' · ')}
        </Text>
      </Box>
      <Divider />
      <Box flexDirection="column" marginY={1}>
        <Text color={theme.dim}>Philosophy</Text>
        {profile.philosophy.map((line) => (
          <Text key={line} color={theme.text}>
            {'  '}
            {line}
          </Text>
        ))}
      </Box>
      <Divider />
      <Footer
        keys={[
          ['esc', 'back'],
          ['q', 'quit'],
        ]}
      />
    </Box>
  );
}
