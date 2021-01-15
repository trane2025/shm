import { YMInitializer } from 'react-yandex-metrika';
import React from 'react';

class YandexMetrica extends React.Component {
    render() {
        return (

            <div>
                <YMInitializer accounts={[45039809]} options={{
                    clickmap: true,
                    trackLinks: true,
                    accurateTrackBounce: true,
                    webvisor: true,
                    trackHash: true
                }} />
            </div>
        )
    }
};

export default YandexMetrica;