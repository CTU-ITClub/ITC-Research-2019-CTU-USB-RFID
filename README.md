# ITC-Research-2019-CTU-USB-RFID
ITC Research 2019: CTU USB RFID for event attendance

# Idea
- Use USB RFID 125kHz to RFID card scanner
- Use Firebase from Google Cloud as a database and collection process service 
- Use Flutter to build an Android application

# Workflow
- Volunteer install Android app to volunteer's smartphone, connect USB RFID Scanner to a smartphone by USB OTG cable (use USB Type-C adapter in case smartphone only has USB Type-C)
- The volunteer will set up: student ID, event name (use Vietnamese), event time.
- Student attendance by student card with a volunteer. The volunteer will scan it with a smartphone-available-scanner.
- If the case student forgets student card, volunteer click to "Forget Card" button on the app and typing student ID on the next interface.
- Volunteer click the "Send" button after the attendance of every student.
- The leader of the Youth Union will export a file from Firebase after the event ended. The export file will have info: Student IDs, Volunteer IDs, Time attendance, Event name.

# Credit
Develop by Can Tho University, IT Club at College of ICT
