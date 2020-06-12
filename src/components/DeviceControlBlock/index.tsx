import React, {useEffect, useState} from 'react';
import moment from 'moment';
moment.locale('ru');
import Button from '@material-ui/core/Button';
// eslint-disable-next-line no-unused-vars
import {Device} from 'entities/device';
import DeviceIcon from 'components/DeviceIcon';
import DeviceDataInfo from 'components/DeviceDataInfo';
import TextFields from '@material-ui/core/TextField';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

import './styles.scss';

type Props = {
    device: Device,
    getUserDevices: () => void,
    closeDeviceController: () => void,
};

const DeviceControlBlock = ({device, getUserDevices, closeDeviceController}: Props) => {
    useEffect(() => {
        getUserDevices();
    }, []);

    const [maxValue, setMaxValue] = useState('0');
    const [minValue, setMinValue] = useState('0');

    const graphicsData = device.dataTimeStamp.slice(-20).map((timeStamp, id) => ({
        name:  moment(timeStamp).format('DD MMMM HH:mm'),
        uv: device[device.icon][id],
    }));

    return (
        <div>        
            <div className='deviceControlBlock'>
                <div className='device-icon'>
                    <DeviceIcon icon={device.icon} />
                </div>
                <div className='device-full-info-block'>
                    <div className='full-device-name'>
                        {device.deviceName}
                    </div>
                    <div className='device-value'>
                        <DeviceDataInfo device={device} />
                    </div>
                    <div className='device-room'>
                        Помещение: {device.deviceRoom}
                    </div>
                    <Button
                        size='small'
                        className='device-end-controll-button'
                        onClick={closeDeviceController}
                    >
                        К списку устройств
                    </Button>
                </div>
                <div className='device-thresholds'>
                    <TextFields
                        id='maxValue'
                        label='Макс. знач.'
                        type='number'
                        fullWidth={false}
                        className='device-tresholds-max-value'
                        onChange={e => setMaxValue(e.target.value)}
                        error={false}
                        helperText={''}
                        value={maxValue}
                    />
                    <TextFields
                        id='minValue'
                        label='Мин. знач.'
                        type='number'
                        fullWidth={false}
                        className='device-tresholds-min-value'
                        onChange={e => setMinValue(e.target.value)}
                        error={false}
                        helperText={''}
                        value={minValue}
                    />
                    <Button
                        size='small'
                        className='device-fix-threshold-value'
                        onClick={() => null}
                    >
                        Зафиксировать
                    </Button>
                </div>
            </div>
            <div className='graphic-device-data'>
                <div className='graphic-text'>
                    Данные с устройства
                </div>
                <LineChart  width={600} height={300} data={graphicsData} >
                    <XAxis dataKey='name' stroke='#000' />
                    <YAxis stroke='#000' />
                    <CartesianGrid stroke='#000' />
                    <Line type='monotone' dataKey='uv' stroke='#f00' />
                    <Tooltip />
                </LineChart>
            </div>
        </div>
    );
};

export default DeviceControlBlock;
