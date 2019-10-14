// Test away!
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';

afterEach(rtl.cleanup);

let wrapper;

beforeEach(() => {
//   wrapper = rtl.render(<Display />);
});

describe("Display Component", () => {

    it("Display shows", () => { wrapper = rtl.render(<Display />);})

    it("Shows gate is open/closed and if it is locked/unlocked", () => {
        wrapper = rtl.render(<Display />);
        expect(wrapper.queryByText(/open|closed/i) && wrapper.queryByText(/locked|unlocked/i)).toBeInTheDocument()
        
    })

    it("Displays locked when `locked` prop is true", () => {
        const wrapper = rtl.render(<Display locked={true} />)

        expect(wrapper.queryByText(/Locked/)).toBeInTheDocument()
    })

    it("Displays unlocked when `locked` prop is false", () => {
        const wrapper = rtl.render(<Display locked={false} />)

        expect(wrapper.queryByText(/Locked/)).not.toBeInTheDocument()
    })

    it("Displays unlocked when `locked` prop is not passed", () => {
        const wrapper = rtl.render(<Display />)

        expect(wrapper.queryByText(/Locked/)).not.toBeInTheDocument()
    })

    it("Displays closed when `closed` prop is true", () => {
        const wrapper = rtl.render(<Display closed={true} />)

        expect(wrapper.queryByText(/closed/i)).toBeInTheDocument()
    })

    it("Displays Open when `closed` prop is false", () => {
        const wrapper = rtl.render(<Display closed={false} />)

        expect(wrapper.queryByText(/Open/i)).toBeInTheDocument()
    })

    it("Displays Open when `closed` prop is not passed", () => {
        const wrapper = rtl.render(<Display />)

        expect(wrapper.queryByText(/open/i)).toBeInTheDocument()
    })
})