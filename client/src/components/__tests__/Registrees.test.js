/**
 * @jest-environment jsdom
 */

import React from 'react';

// import {render} from '@testing-library/react';
import {render, cleanup, screen, getByTestId, getByText} from '../../util/testUtil';
import Registrees from '../Registrees';
import getRegistrees from '../../api/getRegistrees';
import { act } from 'react-dom/test-utils';
// import getRegistrees from '../../api/getRegistrees';

afterEach(cleanup);

describe('Registrees Component', () => {

    it('loads and renders fetched registrees correctly', async () => {
        const mockRegistree = [{
                _id : 1,
                firstName : 'firstName',
                lastName : 'lastName',
                email: "test@email.com",
                date: "2020-03-09"
        }];

        const mockGetRegistree = jest.spyOn(global, "fetch").mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockRegistree)
            })
        );

        let [getByText, getByTestId] = [null, null];

        await act(async () => {
            const registreesRender = render(<Registrees />);
            getByTestId = registreesRender.getByTestId;
            getByText = registreesRender.getByText;
        });
        expect(mockGetRegistree).toHaveBeenCalled();
        expect(getByTestId('registrees-list')).toBeInTheDocument();
        expect(getByText('firstName lastName')).toBeInTheDocument();
        global.fetch.mockRestore();
    });


    it('"loading..." element not displayed after registrees are fetched', async () => {
        const mockRegistree = [{
                _id : 1,
                firstName : 'firstName',
                lastName : 'lastName',
                email: "test@email.com",
                date: "2020-03-09"
        }];

        const mockGetRegistree = jest.spyOn(global, "fetch").mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockRegistree)
            })
        );
        let getByText = null;
        await act(async () => {
            getByText = render(<Registrees />).getByText;
         
        });
        
        expect(mockGetRegistree).toHaveBeenCalled();
        const loading = screen.queryByText('Loading...');
        expect(loading).toBeNull();
        global.fetch.mockRestore();
    });

    it('renders static elements correctly', () => {
        // console.log(toBeInDocument);
        const {getByText} = render(<Registrees />);
        expect(getByText('Registered')).toBeInTheDocument();
        // expect(getByText('Registered')).toBeTruthy();
        expect(getByText('List of everyone registered for the event.')).toBeInTheDocument();
    });

    it('has the "loading..." element displayed when data not fetched', () => {
        const {getByText} = render(<Registrees />);
        expect(getByText('Loading...')).toBeInTheDocument();
    });
});