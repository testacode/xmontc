import { Text } from 'ink';
import { theme } from '../theme.js';

export function Divider() {
  return <Text color={theme.dim}>{'─'.repeat(44)}</Text>;
}
