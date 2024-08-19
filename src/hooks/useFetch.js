import { useState, useEffect } from 'react';

const localCache = {};

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    IsLoading: true,
    hasError: false,
    error: null,
  });

  const getFetch = async () => {
    // Verifica si los datos ya están en la caché
    if (localCache[url]) {
      console.log('Usando cache');
      setState({
        data: localCache[url],
        IsLoading: false,
        hasError: false,
        error: null,
      });
      return;
    }

    // Si no hay caché, establece el estado de carga
    setState((prevState) => ({
      ...prevState,
      IsLoading: true,
      hasError: false,
      error: null,
    }));

    try {
      const response = await fetch(url);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (!response.ok) {
        setState({
          data: null,
          IsLoading: false,
          hasError: true,
          error: {
            code: response.status,
            message: response.statusText,
          },
        });
        return;
      }

      const data = await response.json();
      // Guardar en la caché
      localCache[url] = data;

      setState({
        data,
        IsLoading: false,
        hasError: false,
        error: null,
      });
    } catch (error) {
      setState({
        data: null,
        IsLoading: false,
        hasError: true,
        error: {
          message: error.message,
        },
      });
    }
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data: state.data,
    IsLoading: state.IsLoading,
    hasError: state.hasError,
    error: state.error,
  };
};
