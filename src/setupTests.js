// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import React from 'react'
import deepFreeze from "deep-freeze"

global.React = React
global._testColors = deepFreeze([
  {
    "id":"c695430b-5f03-4cbf-939b-64737a345611",
    "title":"blue",
    "color":"#0432ff",
    "timestamp":"Tue Apr 13 2021 11:01:44 GMT+0800 (Иркутск, стандартное время)",
    "rating":5
  },
  {
    "id":"b1bc7bd8-ce86-4214-94be-ca09cb79b5cc",
    "title":"green",
    "color":"#00a800",
    "timestamp":"Tue Apr 13 2021 11:02:02 GMT+0800 (Иркутск, стандартное время)",
    "rating":4
  },
  {
    "id":"9f4088fd-8912-4ca9-819f-a9b4f849fc46",
    "title":"yellow",
    "color":"#fbc40f",
    "timestamp":"Tue Apr 13 2021 11:02:39 GMT+0800 (Иркутск, стандартное время)",
    "rating":3
  }
])