import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { callsign, email, briefing } = body;

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["mikhajuntaq@gmail.com"],
      subject: `New Transmission from ${callsign}!`,
      replyTo: email,
      html: `
        <h1>New Mission Briefing</h1>
        <p><strong>Callsign:</strong> ${callsign}</p>
        <p><strong>Email Protocol:</strong> ${email}</p>
        <hr />
        <h2>Briefing:</h2>
        <p>${briefing}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
