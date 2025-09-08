import { useState } from "react";

function TemperatureConverter()
{
    const[celsius, setcelsius] = useState("");

    const handleCelsiusChange = (value) =>
    {
        setcelsius(value);
    };

    const handleFahrenheitChange = (value) =>
    {
        setcelsius(((value - 32) * 5)/9);
    };

    const fahrenheit = celsius === "" ? "" : (celsius * 9)/5+32;

    return(

        <div>
            <CelsiusInput celsius={celsius} onCelsiusChange={handleCelsiusChange} />
            <FahrenheitInput fahrenheit={fahrenheit} onFahrenhitChange={handleFahrenheitChange} />
        
        </div>
    );
}

function CelsiusInput({celsius,onCelsiusChange})
{
    return(
        <div>
            <label>Celsius Input:--</label>
            <input value={celsius} onChange={(e) => onCelsiusChange(e.target.value)} />
        </div>
    );
}

function FahrenheitInput({fahrenheit,onFahrenhitChange})
{
    return(
        <div>
            <label>Fahrenheit Input:--</label>
            <input value={fahrenheit} onChange={(e) => onFahrenhitChange(e.target.value)}/>
        </div>
    );
}

export default TemperatureConverter;