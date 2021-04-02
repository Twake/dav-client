export const response = `<?xml version="1.0"?>
<d:multistatus
	xmlns:d="DAV:"
	xmlns:s="http://sabredav.org/ns"
	xmlns:cal="urn:ietf:params:xml:ns:caldav"
	xmlns:cs="http://calendarserver.org/ns/"
	xmlns:card="urn:ietf:params:xml:ns:carddav">
	<d:response>
		<d:href>/calendars/5fbb828496e95069fd4d5114/inbox/sabredav-8c5d0154-75e3-45de-9f6f-da47e56a181e.ics</d:href>
		<d:propstat>
			<d:prop>
				<d:getetag>&quot;59be6bf1e12e937dfed81c547fc61a11&quot;</d:getetag>
				<cal:calendar-data>BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Sabre//Sabre VObject 4.1.3//EN
CALSCALE:GREGORIAN
METHOD:REQUEST
BEGIN:VTIMEZONE
TZID:Africa/Lagos
BEGIN:STANDARD
TZOFFSETFROM:+0100
TZOFFSETTO:+0100
TZNAME:WAT
DTSTART:19700101T000000
END:STANDARD
END:VTIMEZONE
BEGIN:VEVENT
UID:fae13cb1-a436-46de-b06f-7436f640e3d4
TRANSP:OPAQUE
DTSTART;TZID=UTC:20201127T140000Z
DTEND;TZID=UTC:20201127T143000Z
CLASS:PUBLIC
X-OPENPAAS-VIDEOCONFERENCE:http://conference
SUMMARY:A
ORGANIZER;CN=John0 Doe0:mailto:user0@open-paas.org
ATTENDEE;PARTSTAT=NEEDS-ACTION;RSVP=TRUE;ROLE=REQ-PARTICIPANT;CUTYPE=INDIVI
  DUAL:mailto:user3@open-paas.org
ATTENDEE;PARTSTAT=TENTATIVE;RSVP=TRUE;ROLE=REQ-PARTICIPANT;CUTYPE=RESOURCE;
  CN=ball:mailto:5fbb8a4fb77afc7fc0edc6c1@open-paas.org
ATTENDEE;PARTSTAT=ACCEPTED;RSVP=FALSE;ROLE=CHAIR;CUTYPE=INDIVIDUAL:mailto:u
  ser0@open-paas.org
DTSTAMP:20201124T144329Z
SEQUENCE:0
END:VEVENT
END:VCALENDAR
    </cal:calendar-data>
			</d:prop>
			<d:status>HTTP/1.1 200 OK</d:status>
		</d:propstat>
	</d:response>
<d:response>
		<d:href>/calendars/5fbb828496e95069fd4d5114/inbox/sabredav-3d04e820-805b-492a-9d94-ec6abfaf6b36.ics</d:href>
		<d:propstat>
			<d:prop>
				<d:getetag>&quot;4aca4ddc6cc752bb0b513fb27ee8e923&quot;</d:getetag>
				<cal:calendar-data>BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Sabre//Sabre VObject 4.1.3//EN
CALSCALE:GREGORIAN
METHOD:REQUEST
BEGIN:VTIMEZONE
TZID:Africa/Lagos
BEGIN:STANDARD
TZOFFSETFROM:+0100
TZOFFSETTO:+0100
TZNAME:WAT
DTSTART:19700101T000000
END:STANDARD
END:VTIMEZONE
BEGIN:VEVENT
UID:fae13cb1-a436-46de-b06f-7436f640e3d4
TRANSP:OPAQUE
DTSTART;TZID=UTC:20201127T143000Z
DTEND;TZID=UTC:20201127T150000Z
CLASS:PUBLIC
X-OPENPAAS-VIDEOCONFERENCE:
SUMMARY:A
ORGANIZER;CN=John0 Doe0:mailto:user0@open-paas.org
DTSTAMP:20201124T144329Z
ATTENDEE;PARTSTAT=NEEDS-ACTION;RSVP=TRUE;ROLE=REQ-PARTICIPANT;CUTYPE=INDIVI
  DUAL;CN=John3 Doe3:mailto:user3@open-paas.org
ATTENDEE;PARTSTAT=ACCEPTED;RSVP=FALSE;ROLE=CHAIR;CUTYPE=INDIVIDUAL;CN=John0
  Doe0:mailto:user0@open-paas.org
ATTENDEE;PARTSTAT=NEEDS-ACTION;RSVP=TRUE;ROLE=REQ-PARTICIPANT;CUTYPE=RESOUR
  CE;CN=ball:mailto:5fbb8a4fb77afc7fc0edc6c1@open-paas.org
SEQUENCE:1
END:VEVENT
END:VCALENDAR
    </cal:calendar-data>
			</d:prop>
			<d:status>HTTP/1.1 200 OK</d:status>
		</d:propstat>
	</d:response>
</d:multistatus>`;
