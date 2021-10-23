/**
 * @jest-environment jsdom
 */

import { render  } from '@testing-library/react'
import Content from "@/components/Content";
import {characterObject } from "../__mocks__/mocks";

describe('Content', () => {
    it('should render successfully', () => {
        const { asFragment } = render(<Content dataObject={characterObject}/>)

        expect(asFragment()).toMatchSnapshot();
        expect(asFragment()).toBeDefined()
    })
})