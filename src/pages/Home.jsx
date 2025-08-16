import { Badge, Col, Row } from "antd";
import { Collapse } from "antd";
import ScheduleAppointmentCards from "../components/UpcomingAppointmentCard";
import Navigation from "../components/Navigation";
import { getUpcomingAppointments } from "../services/appointment.service";
import { useQuery } from "@tanstack/react-query";
import UpcomingAppointmentCard from "../components/UpcomingAppointmentCard";

function Home() {
  const { data: upcomingAppointments, isPending: upcomingAppointmentsPending } =
    useQuery({
      queryKey: ["upcoming-appointments"],
      queryFn: getUpcomingAppointments,
    });

  return (
    <>
      <Navigation />
      <main className="flex flex-col justify-center py-2">
        <div className="p-5">
          {upcomingAppointments?.map((appointment) => (
            <UpcomingAppointmentCard
              key={appointment.referenceId}
              appointment={appointment}
            />
          ))}
        </div>
        <Collapse
          ghost
          items={{
            label: (
              <Row
                justify="space-between"
                align="middle"
                style={{ width: "100%" }}
              >
                <Col>
                  <h1 className="text-lg font-semibold text-black">
                    Past Appointments
                  </h1>
                </Col>
                <Col>
                  <Badge count={1} style={{ backgroundColor: "#52c41a" }} />
                </Col>
              </Row>
            ),
            children: <p></p>,
          }}
        />
      </main>
    </>
  );
}

export default Home;

{
  /* <div className="text-center p-4 border rounded-md border-dashed border-gray-300">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              No Upcoming Appointments
            </h2>
            <p className="text-gray-600">
              You currently have no upcoming appointments. Click the
              <PlusOutlined /> button above to schedule.
            </p>
          </div> */
}
