import { useFetch } from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter';
import LoadingMessage from './LoadingMessage';
import PokemonCard from './PokemonCard';

const MultipleCustomHook = () => {
    const {increment, decrement, counter} = useCounter(1);
  const { data, IsLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

  return (
    <div className="container border border-primary p-5">
      <div>Informacion de Pokemon</div>
      {IsLoading && <LoadingMessage />}
      {data && (
        <>
          <PokemonCard data={data} />
           
          <br />
          <button className='btn btn-primary' onClick={()=>counter>1?decrement():null} >anterior</button>

          <button className='btn btn-primary' onClick={increment} >siguiente</button>
        </>
        
      )}
    </div>
  );
};

export default MultipleCustomHook;
