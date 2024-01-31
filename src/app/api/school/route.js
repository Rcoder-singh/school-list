import { School } from "../../../lib/modals/school";

export async function GET() {
  const schools = await School.findAll();

  console.log(schools);

  return Response.json({ data: "1" });
}

export async function POST() {
  return Response.json({ data: "2" });
}
