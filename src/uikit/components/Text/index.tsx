import * as React from 'react';
import classnames from 'classnames';

import './styles.scss';

type Color = 'violet' | 'black' | 'white' | 'green' | 'gray';
type Size = 's' | 'm' | 'l' | 'xl' | 'xxl';

type Props = {
    children: string,
    className?: string,
    size?: Size
    color?: Color,
};

const Text = ({children, className, size = 'm', color = 'white'}: Props) =>
    <div
        className={classnames(
            [`size-${size}`],
            [`color-${color}`],
            className,
        )}
    >
        {children}
    </div>;

export default Text;
