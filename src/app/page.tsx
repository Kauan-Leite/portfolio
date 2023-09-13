'use client';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './GlobalStyle';
import { Header } from '@/components/Header/Header';
import '../i18n';
import { NavBar } from '@/components/NavBar/NavBar';
import { Hero } from '@/components/Hero/Hero';

export default function Home() {
  const [theme, setTheme] = useState('dark');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <main>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Header theme={theme} themeToggler={themeToggler} />
        <NavBar />
        <Hero />
      </ThemeProvider>
    </main>
  );
}
