$('input[name="agendamento"]').daterangepicker(
    {
      singleDatePicker: true,
      minYear: 2021,
      autoApply: true,
      locale: {
        format: "DD/MM/YYYY",
        separator: " - ",
        applyLabel: "Apply",
        cancelLabel: "Cancel",
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
      minDate: "06/07/2021", // Inicio da campanha
      maxDate: "10/07/2021", // Fim da campanha
      drops: "auto",
    },
    function (start, end, label) {
      console.log(
        "New date range selected: " +
          start.format("YYYY-MM-DD") +
          " to " +
          end.format("YYYY-MM-DD") +
          " (predefined range: " +
          label +
          ")"
      );
    }
  );