import { Box, Text } from 'ink';
import { theme } from '../theme.js';

export type ListItem = { label: string; hint?: string };

type Props = {
  items: readonly ListItem[];
  selected: number;
  offset?: number;
};

export function List({ items, selected, offset = 0 }: Props) {
  return (
    <Box flexDirection="column">
      {items.map((item, i) => {
        const isSelected = offset + i === selected;
        return (
          <Box key={item.label} justifyContent="space-between" width={44}>
            <Text color={isSelected ? theme.accent : theme.text} bold={isSelected}>
              {isSelected ? '▶ ' : '  '}
              {item.label}
            </Text>
            {item.hint ? <Text color={theme.dim}>{item.hint}</Text> : null}
          </Box>
        );
      })}
    </Box>
  );
}
