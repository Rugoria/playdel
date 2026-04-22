import { render, screen } from '@testing-library/react';
import About from '../About';

describe('About Component', () => {
  it('renders Short_Story with founder names "Sheis" and "Shumail"', () => {
    render(<About />);
    
    expect(screen.getByText(/Sheis/i)).toBeInTheDocument();
    expect(screen.getByText(/Shumail/i)).toBeInTheDocument();
  });

  it('renders CTA link with href="/about"', () => {
    render(<About />);
    
    const ctaLink = screen.getByRole('link', { name: /Read Our Full Story/i });
    expect(ctaLink).toHaveAttribute('href', '/about');
  });

  it('renders all three Theme_Pillar badge labels', () => {
    render(<About />);
    
    expect(screen.getByText('Community')).toBeInTheDocument();
    expect(screen.getByText('Connection')).toBeInTheDocument();
    expect(screen.getByText('Frictionless Experience')).toBeInTheDocument();
  });
});
