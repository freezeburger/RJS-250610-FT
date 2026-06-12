import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest'

import Nav from './Nav';

describe('<Nav />', () => {
  test('it should mount', () => {
    render(<Nav />);

    const test = screen.getByTestId('Nav');
    console.log(test)
    expect(test).toBeInTheDocument();
  });
});