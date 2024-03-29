const isAnalyze = (date: Date): boolean => !(date.getHours() - new Date().getHours());

export const isAnalitic = (): boolean => {
    try {
        const storedHours = localStorage.getItem('date');

        if (storedHours !== null && isAnalyze(new Date(storedHours))) return false;
        localStorage.setItem('date', JSON.stringify(new Date()));
        return true;
    } catch (err) {
        return true;
    }
};



export const getFormatedNumber = (number): String => {
    if(number < 10) {
        return `${0}${number}`
    }
    else {
        return number
    }
};
