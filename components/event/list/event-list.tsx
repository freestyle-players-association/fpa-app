import {Table, TableBody, TableCell, TableRow} from "@/components/ui/table";
import {Tables} from "@/utils/supabase/database.types";
import {Link} from "@/i18n/routing";

type EventListProps = {
  events: Tables<'events'>[];
}

export default function EventList({events}: EventListProps) {
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <Table>
      <TableBody>
        {events.map((event, index) => (
          <TableRow key={index}>
            <Link href={`/events/${event.id}`} key={index}>
              <TableCell className="font-medium">{event.name}</TableCell>
              <TableCell>{formatDate(event.start_date ?? "")}</TableCell>
              <TableCell>{formatDate(event.end_date ?? "")}</TableCell>
            </Link>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
