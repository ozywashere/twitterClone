import { createElement } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function Button({ as, size, variant, className, children, ...props }) {
  return createElement(
    as,
    {
      type: 'button',
      className: classNames('rounded-full flex items-center justify-center font-bold transition-all', {
        'px-4 h-8 text-sm': size === 'sm',
        'px-4 h-9': size === 'md',
        'px-4 text-[1.063rem] h-[3.25rem] w-full': size === 'lg',
        'bg-[#1d9bf0] hover:opacity-90 text-white': variant === 'primary',
        'bg-white hover:opacity-90 text-[#1d9bf0] border border-[#1d9bf0]': variant === 'white-outline',
        'bg-white hover:opacity-90 text-[#1d9bf0]': variant === 'white',

        [className]: true,
      }),
      ...props,
    },
    children
  );
}

Button.propTypes = {
  as: PropTypes.any,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  variant: PropTypes.oneOf(['primary', 'white', 'white-outline']),
  props: PropTypes.object,
  className: PropTypes.string,
};

Button.defaultProps = {
  as: 'button',
  size: 'normal',
  variant: 'primary',
};
