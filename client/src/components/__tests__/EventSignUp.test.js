import React from 'react';
import {render} from '@testing-library/react';

import EventSignUp from '../../components/EventSignUp';

describe('EventSignUp component', () => {
    test('renders EventSignUp component', () => {
        render(<EventSignUp />);
    });
});