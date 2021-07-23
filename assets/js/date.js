$('input[name="agendamento"]').daterangepicker({
  singleDatePicker: true,
  minYear: 2021,
  autoApply: false,
  locale: {
    format: "DD/MM/YYYY",
    separator: " - ",
    applyLabel: "Selecionar",
    cancelLabel: "Cancelar",
    fromLabel: "From",
    toLabel: "To",
    customRangeLabel: "Custom",
    weekLabel: "W",
    daysOfWeek: ["D", "S", "T", "Q", "Q", "S", "S"],
    monthNames: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "junho",
      "julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    firstDay: 1,
  },
  linkedCalendars: false,
  showCustomRangeLabel: false,
  startDate: "06/07/2021", // Não alterar
  endDate: "10/07/2021", // Não alterar
  //////////////////////////////////////////
  minDate: "", // Inicio da campanha
  maxDate: "", // Fim da campanha
  drops: "auto",
});
