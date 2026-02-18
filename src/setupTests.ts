// Make React available globally for styled-components in test environment
import React from 'react';
(globalThis as unknown as { React: typeof React }).React = React;

// jest-dom adds custom matchers for asserting on DOM nodes.
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
