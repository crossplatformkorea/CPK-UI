import React from 'react';
import {View} from 'react-native';
import type {RenderAPI} from '@testing-library/react-native';
import {render} from '@testing-library/react-native';

import {createComponent} from '../../../../test/testUtils';
import {Checkbox, type CheckboxProps} from './Checkbox';
import {light} from '../../../utils/colors';

let testingLib: RenderAPI;

const Component = (props?: CheckboxProps): JSX.Element =>
  createComponent(<Checkbox {...props} />);

describe('[Checkbox]', () => {
  it('should render without crashing', () => {
    testingLib = render(Component());

    const json = testingLib.toJSON();

    expect(json).toBeTruthy();
  });

  it('should render `disabled` button', () => {
    testingLib = render(
      Component({
        disabled: true,
      }),
    );

    const json = testingLib.toJSON();

    expect(json).toBeTruthy();
  });

  it('should render `startElement`', () => {
    testingLib = render(
      Component({
        startElement: <View />,
      }),
    );

    const json = testingLib.toJSON();

    expect(json).toBeTruthy();
  });

  it('should render `endElement`', () => {
    testingLib = render(
      Component({
        endElement: <View />,
      }),
    );

    const json = testingLib.toJSON();

    expect(json).toBeTruthy();
  });

  describe('type', () => {
    it('should render type==="info"', () => {
      testingLib = render(
        Component({
          color: 'info',
          checked: true,
        }),
      );

      const checkbox = testingLib.getByTestId('cpk-ui-checkbox');

      expect(checkbox.props.style.borderTopColor).toEqual(light.role.info);
    });

    it('should render type==="primary"', () => {
      testingLib = render(
        Component({
          color: 'primary',
          checked: true,
        }),
      );

      const checkbox = testingLib.getByTestId('cpk-ui-checkbox');

      expect(checkbox.props.style.borderTopColor).toEqual(light.role.primary);
    });

    it('should render type==="secondary"', () => {
      testingLib = render(
        Component({
          color: 'secondary',
          checked: true,
        }),
      );

      const checkbox = testingLib.getByTestId('cpk-ui-checkbox');

      expect(checkbox.props.style.borderTopColor).toEqual(light.role.secondary);
    });

    it('should render type==="success"', () => {
      testingLib = render(
        Component({
          color: 'success',
          checked: true,
        }),
      );

      const checkbox = testingLib.getByTestId('cpk-ui-checkbox');

      expect(checkbox.props.style.borderTopColor).toEqual(light.role.success);
    });

    it('should render type==="danger"', () => {
      testingLib = render(
        Component({
          color: 'danger',
          checked: true,
        }),
      );

      const checkbox = testingLib.getByTestId('cpk-ui-checkbox');

      expect(checkbox.props.style.borderTopColor).toEqual(light.role.danger);
    });

    it('should render type==="warning"', () => {
      testingLib = render(
        Component({
          color: 'warning',
          checked: true,
        }),
      );

      const checkbox = testingLib.getByTestId('cpk-ui-checkbox');

      expect(checkbox.props.style.borderTopColor).toEqual(light.role.warning);
    });
  });
});
