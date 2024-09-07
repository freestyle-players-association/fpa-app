import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export default function EventList(events) {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="container mx-auto py-10">
      <Table>
        <TableBody>
          {events.map((event, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{event.name}</TableCell>
              <TableCell>{formatDate(event.startDate)}</TableCell>
              <TableCell>{formatDate(event.endDate)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
