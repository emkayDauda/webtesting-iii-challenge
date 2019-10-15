// Test away
// Test away!
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';

afterEach(rtl.cleanup);

let wrapper, gateClose, gateLock;

beforeEach(() => {
  wrapper = rtl.render(<Dashboard />);
  gateClose = wrapper.queryByText(/close gate/i)
  gateLock = wrapper.queryByText(/lock gate/i)
});

describe("Dashboard Component", () => {
    it("Dashboard shows", () => {})

    it("Gate defaults to `open`", () => {
        expect(wrapper.queryByText(/open/i)).toBeInTheDocument()
    })

    it("Gate defaults to `unlocked`", () => {
        expect(wrapper.queryByText(/unlocked/i)).toBeInTheDocument()
    })

    it("Cannot be closed or opened when locked", () => {
        expect(gateClose).toBeInTheDocument()
        rtl.fireEvent.click(gateClose)

        let gateOpen = wrapper.queryByText(/open gate/i)
        expect(gateOpen).toBeInTheDocument()
        expect(wrapper.queryByText(/closed/i)).toBeInTheDocument()

        rtl.fireEvent.click(gateLock)
        // rtl.fireEvent.click(gateLock)
        rtl.fireEvent.click(gateOpen)

        expect(wrapper.queryByText('Open')).not.toBeInTheDocument()


    })
})