import React from 'react';
import type { I18nContextType } from './type';

const I18nContext = React.createContext<I18nContextType>({} as I18nContextType);
export default I18nContext;
