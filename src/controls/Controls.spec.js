// Test away
// Test away!
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Controls from './Controls';

afterEach(rtl.cleanup);

let wrapper;

beforeEach(() => {
  wrapper = rtl.render(<Controls />);
});

describe("Controls Component", () => {
    it("Controls show", () => {})

    it("Buttons present to manipulate gate", () => {
      let gateLock = wrapper.getByTestId("locked");
      let gateClose = wrapper.getByTestId("closed");
      expect(gateLock).toBeInTheDocument();
      expect(gateClose).toBeInTheDocument();
    });
    it("Close button is disabled while gate locked", () => {
      rtl.cleanup();
      wrapper = rtl.render(<Controls locked={true} closed={true} />);
      let gateClose = wrapper.getByTestId("closed");
      expect(gateClose).toBeDisabled();
    });
    it("Lock button is disabled while gate open", () => {
      let gateLock = wrapper.getByTestId("locked");
      expect(gateLock).toBeDisabled();
  });
})