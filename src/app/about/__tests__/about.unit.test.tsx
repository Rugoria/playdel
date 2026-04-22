import { render, screen } from '@testing-library/react';
import fs from 'fs';
import path from 'path';

// Mock next/navigation (used by Header)
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/about'),
}));

// Mock next/image (used by Header)
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => <img {...props} />,
}));

// Mock Header and Footer to isolate the About page
jest.mock('@/components/Header', () => ({
  __esModule: true,
  default: () => <header data-testid="header">Header</header>,
}));

jest.mock('@/components/Footer', () => ({
  __esModule: true,
  default: () => <footer data-testid="footer">Footer</footer>,
}));

import AboutPage from '../page';

describe('About Page', () => {
  it('renders the Header component', () => {
    render(<AboutPage />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('renders the Footer component', () => {
    render(<AboutPage />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('renders FounderCard for Sheis with Computer Science background', () => {
    render(<AboutPage />);
    expect(screen.getByText('Sheis')).toBeInTheDocument();
    expect(screen.getByText('Computer Science')).toBeInTheDocument();
  });

  it('renders FounderCard for Shumail with Law background', () => {
    render(<AboutPage />);
    expect(screen.getByText('Shumail')).toBeInTheDocument();
    expect(screen.getByText('Law')).toBeInTheDocument();
  });

  it('renders all three Theme_Pillar elements', () => {
    render(<AboutPage />);
    expect(screen.getByText('Community')).toBeInTheDocument();
    expect(screen.getByText('Connection')).toBeInTheDocument();
    expect(screen.getByText('Frictionless Experience')).toBeInTheDocument();
  });

  it('founders grid container has class md:grid-cols-2', () => {
    const { container } = render(<AboutPage />);
    const grid = container.querySelector('.grid.md\\:grid-cols-2');
    expect(grid).toBeInTheDocument();
  });

  it('page.tsx does not contain a "use client" directive', () => {
    const filePath = path.resolve(__dirname, '../page.tsx');
    const source = fs.readFileSync(filePath, 'utf-8');
    expect(source).not.toMatch(/['"]use client['"]/);
  });
});
