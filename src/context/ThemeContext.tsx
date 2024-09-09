import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  ReactNode,
} from 'react';
import { theme } from 'antd';

type ModeType = 'default' | 'dark';

interface ThemeContextProps {
  mode: ModeType;
  toggle: () => void;
}

// 创建 Context，初始值为 undefined
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ModeType>('default');

  const toggle = useCallback(() => {
    setMode((prevMode) => (prevMode === 'default' ? 'dark' : 'default'));
  }, []);

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 创建自定义 Hook 来使用 ThemeContext
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
