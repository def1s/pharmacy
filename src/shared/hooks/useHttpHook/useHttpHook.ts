import { useState } from 'react';

type method = 'GET' | 'POST' | 'UPGRADE';

// interface requestProps {
// 	url: string;
// 	method?: method;
// 	body?: string;
// 	headers?: Record<string, string>;
// }

interface requestProps {
	url: string;
	method?: method;
	body?: string;
	headers?: Record<string, string>;
}

// переделать, не нравится отутствие структурированного ответа и написание пропсов через объект

export const useHttp = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);

	const clearError = () => {
		setError(false);
	};

	async function request({ url, method='GET', headers={ 'Content-Type': 'application/json' }, body=null }: requestProps) {
		setLoading(true);

		try {
			const response = await fetch(url, { method, headers, body });
			const res = await response.json();

			if (!response.ok) {
				throw res;
			}

			setLoading(false);
			return res;
		} catch(e) {
			setLoading(false);
			setError(e.message);
			throw e;
		}
	}

	return { loading, error, request, clearError };
};
