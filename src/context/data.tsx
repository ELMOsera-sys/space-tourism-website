import {
	createContext,
	useContext,
	useEffect,
	useState,
	type ReactNode,
} from "react";

export interface Destination {
  name: string;
  images: { png: string; webp: string };
  description: string;
  distance: string;
  travel: string;
}

 export interface CrewMember {
  name: string;
  images: { png: string; webp: string };
  role: string;
  bio: string;
}

export interface Technology {
  name: string;
  images: { portrait: string; landscape: string };
  description: string;
}

export interface Data {
  destinations: Destination[];
  crew: CrewMember[];
  technology: Technology[];
}
type DataContextValue = {
	data: Data;
	loading: boolean;
	error: Error | null;
};

export const dataContext = createContext<DataContextValue | null>(null);

type DataProviderProps = {
	children: ReactNode;
};

export function DataProvider({ children }: DataProviderProps) {
	const [data, setData] = useState< Data | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		const controller = new AbortController();

		fetch("/data-p.json", { signal: controller.signal })
			.then((response) => {
				if (!response.ok) {
					throw new Error(`Failed to fetch data: ${response.status}`);
				}
				return response.json();
			})
			.then(setData)
			.catch((fetchError: unknown) => {
				if (!controller.signal.aborted) {
					setError(
						fetchError instanceof Error
							? fetchError
							: new Error("Failed to fetch data"),
					);
				}
			})
			.finally(() => {
				if (!controller.signal.aborted) setLoading(false);
			});

		return () => controller.abort();
	}, []);

	
	if(!data) return <p>Loading...</p>;

	return (
		<dataContext.Provider value={{ data, loading, error }}>
			{children}
		</dataContext.Provider>
	);
}

export function useData() {
	const context = useContext(dataContext);
	if (!context) {
		throw new Error("useData must be used within a DataProvider");
	}
	return context;
}
