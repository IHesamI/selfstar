import EventsTable from "../EventsTable";

export default function AddMainPageItem() {
  return (
    <div>
      <EventsTable
        headers={["title", "description", "eventDate", "location", "action"]}
        data={[
          {
            title: "همایش بین المللی خود تطبیقی",
            description:
              "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur possimus id omnis qui iure accusamus, libero eveniet amet! Laborum alias totam consequuntur perspiciatis eos, doloribus temporibus tenetur ipsa ea quibusdam.",
            eventDate: "1403/05/23",
            location:
              "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur possimus id omnis qui iure accusamus, libero eveniet amet! Laborum alias totam consequuntur perspiciatis eos, doloribus temporibus tenetur ipsa ea quibusdam.",
          },
        ]}
      />
    </div>
  );
}
