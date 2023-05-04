import DataTable from 'datatables.net-dt';
import 'datatables.net-rowreorder';
import 'datatables.net-colreorder';
class Table {

  constructor(tableNodeId) {
    this.dataTable = new DataTable( tableNodeId, {
    bPaginate: false,
    bInfo: false,
    searching: false,
    colReorder: true,
    rowReorder: {
      selector: '.rowId'
    },
    columnDefs: [{
      targets: 0,
    }]
   });
  }

  count = 1;

  addRow(data) {
    this.dataTable.row.add([this.#createIdBlock(),...data]).draw(false);
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
