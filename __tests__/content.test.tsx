/**
 * @jest-environment jsdom
 */

import { render  } from '@testing-library/react'
import Content from "../components/Content";
import { mockContent } from "../__mocks__/mocks";
import { MainContextProvider } from "../context/MainContext";


describe('Content', () => {
    it('should render successfully', () => {
        const { asFragment } = render(
            <MainContextProvider>
                <Content dataObject={mockContent}/>
            </MainContextProvider>
        )

        expect(asFragment()).toMatchSnapshot();
        expect(asFragment()).toBeDefined()
    })
})