import { useState } from 'react';
import { Box, Text, useApp, useInput } from 'ink';
import { Home } from './screens/Home.js';
import { About } from './screens/About.js';
import { Projects } from './screens/Projects.js';
import { quickLinks } from './data/profile.js';
import { openUrl } from './services/browser.js';
import { theme } from './theme.js';

export type Screen = 'home' | 'about' | 'projects';

export function App() {
  const { exit } = useApp();
  const [screen, setScreen] = useState<Screen>('home');

  useInput((input, key) => {
    if (input === 'q') exit();
    if (input === 'g') openUrl(quickLinks.github);
    if (input === 'w') openUrl(quickLinks.website);
    if (key.escape) setScreen('home');
  });

  return (
    <Box flexDirection="column" paddingX={1} paddingY={1}>
      {screen === 'home' && <Home onNavigate={setScreen} />}
      {screen === 'about' && <About />}
      {screen === 'projects' && <Projects />}
      <Box marginTop={1}>
        <Text color={theme.dim}>xmontc v{__VERSION__}</Text>
      </Box>
    </Box>
  );
}
