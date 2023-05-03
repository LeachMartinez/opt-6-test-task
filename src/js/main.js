import Table from "./table";

const table = new Table($("#myTable"));

$("#addRow").on("click", e => {
  table.addRow([
    createInput("itemName", "Введите наименование единицы"),
    createInput("price", "Введите цену"),
  
  ]);
});

const createInput = (id, placeholder = "Введите что-нибудь") => {
  return `<input type="text" id="${id}" placeholder="${placeholder}">`
}