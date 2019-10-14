// Test away!
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';

afterEach(rtl.cleanup);

let wrapper;

beforeEach(() => {
  wrapper = rtl.render(<Display />);
});

describe("Display Component", () => {
    it("Display shows", () => {})

    it("Shows gate is open/closed and if it is locked/unlocked", () => {
        expect(wrapper.queryByText(/open|closed/i) && wrapper.queryByText(/locked|unlocked/i)).toBeInTheDocument()
        
    })
})