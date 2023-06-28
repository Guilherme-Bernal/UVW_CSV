const table = document.createElement("table");
const tblBody = document.createElement("tbody");
const uploadcorfirm = document.getElementById("uploadcorfirm");

uploadcorfirm.addEventListener("click", () => {
  Papa.parse(document.getElementById("uploadfile").files[0], {
    dowload: true,
    header: true,
    skipEmptylines: true,
    complete: (resultado) => {
      resultado.data.forEach((element) => {
        // Tratamento de Linhas
        const row = document.createElement("tr");
        const keys = Object.keys(element);

        // Tratamento de Celulas
        keys.forEach((key) => {
          const cell = document.createElement("td");
          // Caso queira tratar oq aparecer na tabela aqui

          // fim
          const cellText = document.createTextNode(`${element[key]}`);
          cell.appendChild(cellText);
          row.appendChild(cell);
        });

        // Tratamento de Linha body
        tblBody.appendChild(row);
      });
      table.appendChild(tblBody);
      document.body.appendChild(table);
      table.setAttribute("border", "2");
      console.log(resultado.data[0]);
    },
  });
});
