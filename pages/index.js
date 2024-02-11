import MeetupList from "@/components/meetups/MeetupList";
// import { useEffect, useState } from "react";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address loremldiek",
    description: "This is a first meetup",
  },
  {
    id: "m3",
    title: "A Third Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Some ldie address",
    description: "This is a first meetup",
  },
  {
    id: "m4",
    title: "A Fourth Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Somedke address",
    description: "This is a first meetup",
  },
];

export default function HomePage(props) {
  // const [loadedMeetups, setLoadedMeetups] = useState([]);
  // useEffect(() => {
  // send a http request and fetch data
  //asyn task and once it's done than call
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // }, []);
  return <MeetupList meetups={props.meetups} />;
}

export function getStaticProps() {
  //reserve name , next js will looked with the funciton with that nameand if it finds it it executes this function during prerendering process so it will not directly call ur component funciton  and use the return jsx snapshot , it will first of all call the getStaticProps() before it calls to component funciton  and getStaticProps has the name because indeed it's job is to prepare props for this page and this props will contain the data that needs

  // fetch data from an API and return an object always
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10, //no of second next js will wait untill it's regenerate this page for an incoming request , data will update in 10s
  };
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
  // fetch data from an API
//   return {
//     props:{
//       meetups:DUMMY_MEETUPS
//     },
    
//   };
// }
//getserverside might be better becaus is guarantees to run for every request but that actually can be a disadvantage becaus that means that u needs to wait for ur page  to be generated on every incoming requestnow if u don't have data that changeall the time means it changes every second getstaticprops is better  because there u pregenerate a html file that file can than be stored and served by cdn and that simply is faster than pregeneratingand fetching the data for every request so page is faster in getstaticprops

