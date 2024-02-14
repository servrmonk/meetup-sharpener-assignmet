import NewMeetupForm from "@/components/meetups/NewMeetupForm";



export default function NewMeetupPage() {
  async function addMeetupHandler(enteredMeetupData) {
    console.log("Entered meetup data:", enteredMeetupData); // Log entered meetup data
    
    try {
      const response = await fetch("/api/new-meetup", {
        method: "POST",
        body: JSON.stringify(enteredMeetupData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        // Log error if response is not OK
        console.error("Failed to add meetup. Server responded with status:", response.status);
        const errorMessage = await response.text(); // Get error message from response body if available
        console.error("Error message from server:", errorMessage);
        throw new Error("Failed to add meetup");
      }

      const data = await response.json(); // Parse response JSON
      console.log("Response data:", data); // Log response data
    } catch (error) {
      // Catch any errors that occur during the fetch request
      console.error("Error adding meetup:", error.message); // Log the error message
      // Handle error (e.g., show error message to the user)
    }
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
