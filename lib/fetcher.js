import useSWR from "swr";


const { BASE_URL } = "process.env";
const response = (...args) => fetch(...args).then((res) => res.json());

export default function Fetcher(endpoint){
const { data, error } = useSWR(`${BASE_URL}${endpoint}`, response);

 return {
		data,
		isLoading: !error && !data,
		isError: error,
 };
}
