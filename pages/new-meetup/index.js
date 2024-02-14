//our-domain.com/new-meetup

import NewMeetupForm from "@/components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
  async function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
    // now send the request to api route using fetch or axios
    const response = await fetch('/api/new-meetup',{
      method:'POST',
      body:JSON.stringify(enteredMeetupData),
      headers:{
        'Content-Type':'application/json'
      }
    }) //we need to send the post request
    const data = await response.json();
    console.log(data);
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
