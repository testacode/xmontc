import { Box, Text } from 'ink';
import { profile } from '../data/profile.js';
import { theme } from '../theme.js';

const LOGO = `███╗   ███╗ ██████╗ ███╗   ██╗████████╗██╗
████╗ ████║██╔═══██╗████╗  ██║╚══██╔══╝██║
██╔████╔██║██║   ██║██╔██╗ ██║   ██║   ██║
██║╚██╔╝██║██║   ██║██║╚██╗██║   ██║   ██║
██║ ╚═╝ ██║╚██████╔╝██║ ╚████║   ██║   ██║
╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝`;

export function Logo() {
  return (
    <Box flexDirection="column" marginBottom={1}>
      <Text color={theme.accent}>{LOGO}</Text>
      <Box flexDirection="column" marginTop={1}>
        <Text color={theme.text} bold>
          {profile.name}
        </Text>
        <Text color={theme.dim}>{profile.title}</Text>
        <Text color={theme.dim}>{profile.location}</Text>
      </Box>
    </Box>
  );
}
