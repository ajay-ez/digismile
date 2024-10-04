# import datetime
# import os.path    

# from google.auth.transport.requests import Request
# from google.oauth2.credentials import Credentials
# from google_auth_oauthlib.flow import InstalledAppFlow
# from googleapiclient.discovery import build
# from googleapiclient.errors import HttpError

# # If modifying these scopes, delete the file token.json.
# SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"]


# def main():
#   """Shows basic usage of the Google Calendar API.
#   Prints the start and name of the next 10 events on the user's calendar.
#   """
#   creds = None
#   # The file token.json stores the user's access and refresh tokens, and is
#   # created automatically when the authorization flow completes for the first
#   # time.
#   if os.path.exists("token.json"):
#     creds = Credentials.from_authorized_user_file("token.json", SCOPES)
#   # If there are no (valid) credentials available, let the user log in.
#   if not creds or not creds.valid:
#     if creds and creds.expired and creds.refresh_token:
#       creds.refresh(Request())
#     else:
#       flow = InstalledAppFlow.from_client_secrets_file(
#           "credentials.json", SCOPES
#       )
#       creds = flow.run_local_server(port=0)
#       creds = flow.run_local_server(port=0, authorization_prompt_message="Please visit this URL: {url}", open_browser=False)
#       print(f"Redirect URI used: {creds.token_uri}")
#     # Save the credentials for the next run
#     with open("token.json", "w") as token:
#       token.write(creds.to_json())

#   try:
#     service = build("calendar", "v3", credentials=creds)

#     # Call the Calendar API
#     now = datetime.datetime.utcnow().isoformat() + "Z"  # 'Z' indicates UTC time
#     print("Getting the upcoming 10 events")
#     events_result = (
#         service.events()
#         .list(
#             calendarId="primary",
#             timeMin=now,
#             maxResults=10,
#             singleEvents=True,
#             orderBy="startTime",
#         )
#         .execute()
#     )
#     events = events_result.get("items", [])

#     if not events:
#       print("No upcoming events found.")
#       return

#     # Prints the start and name of the next 10 events
#     for event in events:
#       start = event["start"].get("dateTime", event["start"].get("date"))
#       print(start, event["summary"])

#   except HttpError as error:
#     print(f"An error occurred: {error}")



import datetime
import os.path

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from flask import jsonify


# If modifying these scopes, delete the file token.json.
SCOPES = ["https://www.googleapis.com/auth/calendar"]

def add_appointment(email, appointment_date, start_time, end_time, description):
  """Shows basic usage of the Google Calendar API.
  Prints the start and name of the next 10 events on the user's calendar.
  """
  creds = None
  # The file token.json stores the user's access and refresh tokens, and is
  # created automatically when the authorization flow completes for the first
  # time.
  if os.path.exists("token.json"):
    creds = Credentials.from_authorized_user_file("token.json", SCOPES)
  # If there are no (valid) credentials available, let the user log in.
  
  if not creds or not creds.valid:
    if creds and creds.expired and creds.refresh_token:
      creds.refresh(Request())
    else:
      flow = InstalledAppFlow.from_client_secrets_file(
          "credentials.json", SCOPES
      )
      creds = flow.run_local_server(port=0)
    # Save the credentials for the next run
    with open("token.json", "w") as token:
      token.write(creds.to_json())



  try:
    service = build("calendar", "v3", credentials=creds)
    event={
      "summary":"Dental Appointment",
      "location": "Virtual Event",
      "description":description,
      "colorId":6,
      "start": {
        # "dateTime": "2024-09-15T09:00:00+05:30",  # Corrected "dateTime"
        "dateTime": f'{appointment_date}T{start_time}+05:30',  # Corrected "dateTime"
        "timeZone": "Asia/Kolkata"  # Corrected "timeZone", India/Delhi is not valid, use "Asia/Kolkata"
    },
    "end": {
        # "dateTime": "2024-09-15T17:00:00+05:30",  # Corrected "dateTime"
        "dateTime": f'{appointment_date}T{end_time}+05:30',  # Corrected "dateTime"
        "timeZone": "Asia/Kolkata"  # Corrected "timeZone"
    },
      "recurrence":["RRULE:FREQ=DAILY;COUNT=3"],
      "attendees":[
        {"email": 'digismile.doc@gmail.com'},
        {"email": email}
      ]
    }

    event = service.events().insert(calendarId="primary", body=event).execute()
    event_id = event.get('id')
    print(f"Event created {event.get('htmlLink')}, event: {event}")
    return event_id

  except HttpError as error:
    print(f"An error occurred: {error}")


def get_google_credentials():
    creds = None
    # Check if token.json exists and load it
    if os.path.exists("token.json"):
        creds = Credentials.from_authorized_user_file("token.json", SCOPES)

    # Check if the credentials are valid or need to be refreshed
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            try:
                creds.refresh(Request())
            except Exception as e:
                print(f"Error refreshing token: {e}")
                creds = None
        if not creds:
            # If the credentials are not valid, run the authorization flow again
            flow = InstalledAppFlow.from_client_secrets_file('credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)

            # Save the credentials to token.json for the next run
            with open('token.json', 'w') as token_file:
                token_file.write(creds.to_json())
    
    return creds

def cancel_event(event_id, credentials):
    try:
      creds = credentials
      print(f'creds {creds}')
      service = build('calendar', 'v3', credentials=creds)
      service.events().delete(calendarId="primary", eventId=event_id).execute()
      print(f"Event with Id {event_id} deleted from Googlu calender")
    except Exception as error:
       print(f"An error occured: {error}")
       return jsonify({'error': 'Failed to delete event from Googlu calender'})
    