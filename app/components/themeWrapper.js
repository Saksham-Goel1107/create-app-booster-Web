'use client';
import DarkModeWrapper from '../actions/DarkMode';

export default function ThemeWrapper({ children }) {
  return (
    <DarkModeWrapper>
      {children}
    </DarkModeWrapper>
  );
}
