import { useState } from 'react';
import { useInput } from 'ink';

export function useListNav(count: number, onSelect: (index: number) => void) {
  const [index, setIndex] = useState(0);

  useInput((_input, key) => {
    if (count === 0) return;
    if (key.upArrow) setIndex((i) => (i - 1 + count) % count);
    if (key.downArrow) setIndex((i) => (i + 1) % count);
    if (key.return) onSelect(index);
  });

  return index;
}
