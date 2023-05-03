import DataTable from 'datatables.net-dt';
import 'datatables.net-rowreorder';
class Table {

  constructor(tableNodeId) {
    this.dataTable = new DataTable( tableNodeId, {
    "bPaginate": false,
    "bInfo": false,
    "searching": false,
    rowReorder: {
      selector: '.rowId'
    },
    columnDefs: [{
      targets: 0,
      visible: false
    }]
   });
  }

  count = 1;

  addRow(data) {
    this.dataTable.row.add([this.#createIdBlock(), this.#createIdBlock(),...data]).draw(false);
    this.count++;
  }

  removeRow($row) {
    this.dataTable.row($row).remove().draw();
  }

  #createIdBlock() {
    return `
      <div class="rowId">${this.count}</div>
    `
  }
}

export default Table;
