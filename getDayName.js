function getDayName(dateString) {
    let dataCompleta = new Date(dateString);
    let diaDaData = dataCompleta.getDay(), arrayDiasDaSemana = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return arrayDiasDaSemana[diaDaData];
}
