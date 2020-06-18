import React from 'react';
// import {render} from '@testing-library/react';
import {render} from '../../util/testUtil'

import EventSignUp from '../../components/EventSignUp';

describe('EventSignUp component', () => {
    test('renders EventSignUp component', () => {
        render(<EventSignUp />);
    });
});