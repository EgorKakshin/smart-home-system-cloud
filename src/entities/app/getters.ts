// eslint-disable-next-line no-unused-vars
import {Collections} from './';

export const getControlDeviceId = (state: Collections): string | null=> state.deviceId;

export const getControlStatus = (state: Collections): boolean => state.isControl;
