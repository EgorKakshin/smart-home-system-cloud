import React from 'react';

import IconIllumination from 'uikit/icons/deviceIcons/sun.svg';
import IconTemperature from 'uikit/icons/deviceIcons/celsius.svg';
import IconHumidity from 'uikit/icons/deviceIcons/wet.svg';

type Params = {
    icon: string,
};

const DeviceIcon = ({icon}: Params) => {
    switch (icon) {
    case 'illumination':
        return <IconIllumination fill='white' />;
    case 'temperature':
        return <IconTemperature fill='white' />;
    case 'humidity':
        return <IconHumidity fill='white' />;
    default:
        return <IconIllumination />;
    }
};

export default DeviceIcon;
