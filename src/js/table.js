import DataTable from 'datatables.net-dt';

class Table {
  constructor(tableNodeId, config) {
    this.dataTable = new DataTable( tableNodeId, config);
  }

  addRow() {
  }

  removeRow() {

  }
}

export default Table;
