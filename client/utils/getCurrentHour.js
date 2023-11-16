const getCurrentHour = () => {
    const currentHour = new Date().getHours();
    return currentHour >= 0 && currentHour < 24 ? currentHour : 0;
};

export default getCurrentHour;
