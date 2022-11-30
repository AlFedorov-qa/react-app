import Configs from '../../Data/Configs';
import './Config.css';

function config() {
    return (
        <div className="configuration__list">
            {Configs.map((config) => (
                <label key={config.memory}>
                    <input type="radio" checked name="memory" />
                    <div className="btn">{config.memory}</div>
                </label>
            ))}
        </div>
    );

}

export default config;