import { render, screen } from '@testing-library/react';
import Hero from '../pages/components/Hero';

test('renders Hero section', () => {
    render(<Hero/>);

    const girlsInHeading = document.getElementsByClassName('girls-in')[0];
    expect(girlsInHeading).toBeInTheDocument();

    // edit test to be more flexible (accepts spanning styles)
    const steamHeading = document.getElementsByClassName('STEAM')[0];
    expect(steamHeading).toBeInTheDocument();

    const info = screen.getByText('Supporting access to STEAM education for girls, gender-diverse people, and the LGBTQ+ community.');
    expect(info).toBeInTheDocument();

    const getInvolvedButton = screen.getByRole('button', {name: 'GET INVOLVED'});
    expect(getInvolvedButton).toBeInTheDocument();

    // Change these tests later when placeholder images are replaced
    const cmdfImage = screen.getAllByAltText('cmd-f');
    expect(cmdfImage.length).toEqual(2);

    const panelImage = screen.getByAltText('panel');
    expect(panelImage).toBeInTheDocument();

    const pilatesImage = screen.getByAltText('pilates');
    expect(pilatesImage).toBeInTheDocument();

    const facePaintingImage = screen.getByAltText('face painting');
    expect(facePaintingImage).toBeInTheDocument();

    const panel2Image = screen.getAllByAltText('panel_2');
    expect(panel2Image.length).toEqual(2);
});