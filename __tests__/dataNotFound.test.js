/**
 * @jest-environment jsdom
 */

import { render  } from '@testing-library/react'
import DataNotFound from "@/components/DataNotFound";

describe('Data Not Found', () => {
    it('should render successfully', () => {
        const { asFragment } = render(<DataNotFound message="Character Not Found"/>)

        expect(asFragment()).toMatchSnapshot();
        expect(asFragment()).toBeDefined()
    })
})