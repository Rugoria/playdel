// Table component
interface TableProps {
  headers: string[];
  data: any[];
  renderRow: (item: any, index: number) => React.ReactNode;
}

export const Table = ({ headers, data, renderRow }: TableProps) => {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => renderRow(item, index))}
      </tbody>
    </table>
  );
};
