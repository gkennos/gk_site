export const withBase = (path: string) => {
	const normalizedPath = path.startsWith('/') ? path : `/${path}`;
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');

	return `${base}${normalizedPath}` || normalizedPath;
};
