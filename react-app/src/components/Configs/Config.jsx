import Configs from '../../Data/Configs';
import './Config.css';

function config() {
    return (
        <div className="configuration__list">
            {Configs.map((config) => (
                <label>
                    <input type="radio" checked name="memory" />
                    <div className="btn">{config.memory}</div>
                </label>
            ))}
        </div>
    );

}

export default config;