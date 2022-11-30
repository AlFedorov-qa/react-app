import { useState } from 'react';
import configurations from '../Data/configurations'
import Button from './ConfigButton';
import './Config.css';

function Configuration() {
        
    const [activedConfiguration, setActivedConfiguration] = useState(1);

    function hendleClick(e, memory) {
        setActivedConfiguration(memory)
    }

    return (
        <div className="configuration__list">
            {configurations.map((configuration) => (
                <Button
                key={configuration.memory}
                configuration={configuration}
                actived={configuration.memory === activedConfiguration}
                onClick={(e) => hendleClick(e, configuration.memory)}
                />
            ))}
        </div>        
    )
}

export default Configuration;