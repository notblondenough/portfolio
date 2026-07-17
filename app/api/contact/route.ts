// Contact form endpoint. Currently a validated stub: it accepts the
// message and logs it server-side. To actually deliver mail, wire this
// to Resend, Formspree, or a similar service — see README "Contact form".

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message =
    typeof payload.message === "string" ? payload.message.trim() : "";

  if (!name || name.length > 120) {
    return Response.json({ error: "A name is required." }, { status: 400 });
  }
  if (!email || email.length > 200 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json(
      { error: "A valid email is required." },
      { status: 400 },
    );
  }
  if (!message || message.length > 5000) {
    return Response.json({ error: "A message is required." }, { status: 400 });
  }

  // Placeholder delivery: visible in Vercel function logs.
  console.log("[contact]", { name, email, message });

  return Response.json({ ok: true });
}
