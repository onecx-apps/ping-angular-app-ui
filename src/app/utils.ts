import { Column, MfeInfo } from '@onecx/portal-integration-angular';

export const basePathProvider = (mfeInfo: MfeInfo) => {
  console.log(`Base path provider ${mfeInfo?.remoteBaseUrl}`);
  return mfeInfo
    ? mfeInfo.remoteBaseUrl + 'ping-angular-app-api'
    : './ping-angular-app-api';
};

export function initFilteredColumns(columns: Column[]): Column[] {
  const temp = [];
  columns.forEach((column) => {
    if (column.active) {
      temp.push(column);
    }
  });
  return temp;
}
export interface FilteredColumns {
  columns: Column[];
  filteredColumns: Column[];
}

export function generateFilteredColumns(
  activeColumnIds: string[],
  columns: Column[]
): FilteredColumns {
  const filteredColumns = [];

  // Iterate over activeColumnIds
  for (const colId of activeColumnIds) {
    // Find column with activeId, set it to active, overwrite the old column and push the column to temp
    const matchingCols = columns.filter((column) => column.field === colId);
    if (matchingCols.length > 0) {
      const matchingCol = matchingCols[0];
      const matchingColIndex = columns.indexOf(matchingCol);
      matchingCol.active = true;
      columns[matchingColIndex].active = true;
      filteredColumns.push(matchingCol);
    }
  }

  // Iterate over columns
  for (const column of columns) {
    // Deactivate every column that is not marked active in activeColumnIds
    if (!activeColumnIds.includes(column.field)) {
      column.active = false;
    }
  }

  // Return an object containing all the columns with their correct active state assigned to them (columns) and only the filtered/currently active columns (filteredColumns)
  return {
    columns,
    filteredColumns,
  };
}
