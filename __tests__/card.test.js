/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react'
import Card from "@/components/Card";
import { characterObject } from "../__mocks__/mocks";

describe('Card', () => {
    it('should render successfully', () => {
        const { asFragment } = render(<Card character={characterObject}/>)

        expect(asFragment()).toMatchSnapshot();
        expect(asFragment()).toBeDefined()
    })
})
