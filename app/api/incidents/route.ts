import { NextResponse } from "next/server";
import { createIncident } from "@/services/incidentService";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const incident = await createIncident(body);

        return NextResponse.json(incident, { status: 201});
    } catch (error: unknown) {
       const errorMessage = error instanceof Error ? error.message : "Something went wrong";
       return NextResponse.json(
         { error: errorMessage },
         { status: 400 }
       );
    }
}