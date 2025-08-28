import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      // Bibliotecas
      'vaul': 'vaul',
      'sonner': 'sonner',
      'recharts': 'recharts',
      'react-resizable-panels': 'react-resizable-panels',
      'react-hook-form': 'react-hook-form',
      'react-day-picker': 'react-day-picker',
      'next-themes': 'next-themes',
      'lucide-react': 'lucide-react',
      'input-otp': 'input-otp',
      'embla-carousel-react': 'embla-carousel-react',
      'cmdk': 'cmdk',
      'class-variance-authority': 'class-variance-authority',
      '@radix-ui/react-tooltip': '@radix-ui/react-tooltip',
      '@radix-ui/react-toggle': '@radix-ui/react-toggle',
      '@radix-ui/react-toggle-group': '@radix-ui/react-toggle-group',
      '@radix-ui/react-tabs': '@radix-ui/react-tabs',
      '@radix-ui/react-switch': '@radix-ui/react-switch',
      '@radix-ui/react-slot': '@radix-ui/react-slot',
      '@radix-ui/react-slider': '@radix-ui/react-slider',
      '@radix-ui/react-separator': '@radix-ui/react-separator',
      '@radix-ui/react-select': '@radix-ui/react-select',
      '@radix-ui/react-scroll-area': '@radix-ui/react-scroll-area',
      '@radix-ui/react-radio-group': '@radix-ui/react-radio-group',
      '@radix-ui/react-progress': '@radix-ui/react-progress',
      '@radix-ui/react-popover': '@radix-ui/react-popover',
      '@radix-ui/react-navigation-menu': '@radix-ui/react-navigation-menu',
      '@radix-ui/react-menubar': '@radix-ui/react-menubar',
      '@radix-ui/react-label': '@radix-ui/react-label',
      '@radix-ui/react-hover-card': '@radix-ui/react-hover-card',
      '@radix-ui/react-dropdown-menu': '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-dialog': '@radix-ui/react-dialog',
      '@radix-ui/react-context-menu': '@radix-ui/react-context-menu',
      '@radix-ui/react-collapsible': '@radix-ui/react-collapsible',
      '@radix-ui/react-checkbox': '@radix-ui/react-checkbox',
      '@radix-ui/react-avatar': '@radix-ui/react-avatar',
      '@radix-ui/react-aspect-ratio': '@radix-ui/react-aspect-ratio',
      '@radix-ui/react-alert-dialog': '@radix-ui/react-alert-dialog',
      '@radix-ui/react-accordion': '@radix-ui/react-accordion',

      // Assets
      'figma:asset/e145a070f29a56c1528e48fb47cb8614829f753a.png': path.resolve(__dirname, './src/assets/e145a070f29a56c1528e48fb47cb8614829f753a.png'),
      'figma:asset/b8f21538251027b79dacffc71a0b2e87548c220a.png': path.resolve(__dirname, './src/assets/b8f21538251027b79dacffc71a0b2e87548c220a.png'),
      'figma:asset/9e64b469402ca6a40ac6d4d4709e9052f8b6e24d.png': path.resolve(__dirname, './src/assets/9e64b469402ca6a40ac6d4d4709e9052f8b6e24d.png'),
      'figma:asset/9b5646a7c277647294da72996a28a08ad8b365e7.png': path.resolve(__dirname, './src/assets/9b5646a7c277647294da72996a28a08ad8b365e7.png'),
      'figma:asset/99d6159aa51de80dda7567f1e8ca5a33ee9bb595.png': path.resolve(__dirname, './src/assets/99d6159aa51de80dda7567f1e8ca5a33ee9bb595.png'),
      'figma:asset/67c18ef127c066083e8acb62b6b1d209760c6590.png': path.resolve(__dirname, './src/assets/67c18ef127c066083e8acb62b6b1d209760c6590.png'),
      'figma:asset/33b29e6fad9784859a8647063a4611ee97a84271.png': path.resolve(__dirname, './src/assets/33b29e6fad9784859a8647063a4611ee97a84271.png'),
      'figma:asset/1a3432d91f782191ed7cbd883befb7bf532a0db0.png': path.resolve(__dirname, './src/assets/1a3432d91f782191ed7cbd883befb7bf532a0db0.png'),
      'figma:asset/058ca64e316e09a72f759f7a4f9b04c4a1caf1b0.png': path.resolve(__dirname, './src/assets/058ca64e316e09a72f759f7a4f9b04c4a1caf1b0.png'),

      // Atalho para src
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build',
  },
  server: {
    port: 3000,
    open: true,
  },
});

