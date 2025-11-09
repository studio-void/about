import { IconDeviceDesktop, IconMoon, IconSun } from '@tabler/icons-react';

import { useTheme } from './theme-provider';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center justify-center w-9 h-9 rounded-md hover:bg-accent transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <IconMoon className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
      ) : theme === 'light' ? (
        <IconSun className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
      ) : (
        <IconDeviceDesktop className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
      )}
    </button>
  );
}
