import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  useSelector.mockImplementation((selector) => selector({
    taskTitle: '',
    tasks: [
      { id: 1, title: '할일 #1' },
      { id: 2, title: '할일 #2' },
    ],
  }));

  const { getByText } = render((
    <App />
  ));

  expect(getByText(/할일 #1/)).not.toBeNull();
  expect(getByText(/할일 #2/)).not.toBeNull();

  expect(getByText(/추가/)).not.toBeNull();

  // TODO: 통합 테스트 코드 작성
  // CodeceptJS => 실제 브라우저에서 사용자 테스트 실행 가능.
});
