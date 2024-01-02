'use client';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './GlobalStyle';
import { Header } from '@/components/Header/Header';
import '../i18n';
import { NavBar } from '@/components/NavBar/NavBar';
import { Hero } from '@/components/Hero/Hero';
import { AboutMe } from '@/components/AboutMe/AboutMe';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience/Experience';
import { Projects } from '@/components/Projects/Projects';
import { Contact } from '@/components/Contact/Contact';
import { Footer } from '@/components/Footer/Footer';

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
        {/* <NavBar /> */}
        <Hero />
        <AboutMe />
        <Skills />
        <Experience />
        {/* <Projects /> */}
        {/* <Contact /> */}
        {/* <Footer /> */}
      </ThemeProvider>
    </main>
  );
}
