import QuoteList from "../components/quotes/QuoteList";
const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning1" },
  { id: "q2", author: "Max", text: "Learning2" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES}></QuoteList>;
};
export default AllQuotes;
