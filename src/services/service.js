export const getWeather = async (long, lat) => {
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=${long}&longitude=${lat}&timezone=America/Argentina/Jujuy`)
        return response.json();
    } catch {
        throw new Error('Error weather');
    }
}