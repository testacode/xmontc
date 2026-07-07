import { Box, Text } from 'ink';
import { theme } from '../theme.js';

type Props = { keys: readonly (readonly [string, string])[] };

export function Footer({ keys }: Props) {
  return (
    <Box marginTop={1} gap={2}>
      {keys.map(([key, label]) => (
        <Text key={key}>
          <Text color={theme.accent} bold>
            {key}
          </Text>
          <Text color={theme.dim}> {label}</Text>
        </Text>
      ))}
    </Box>
  );
}
