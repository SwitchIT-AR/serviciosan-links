import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LandingLinks from "./App.tsx";
import {MantineProvider} from "@mantine/core";
import '@mantine/core/styles.css';
import '@mantine/spotlight/styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <MantineProvider>
    <LandingLinks />
      </MantineProvider>
  </StrictMode>,
)
